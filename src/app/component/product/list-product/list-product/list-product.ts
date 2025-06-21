import { Component, inject, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ListProductService } from '../../../../services/product-service/list-product-service';
import { ProductListResponse } from '../../../../models/product';
import { PaginationComponent } from '../../../../shared/pagination/pagination';

@Component({
  selector: 'list-product',
  standalone: true,
  imports: [CommonModule, PaginationComponent],
  templateUrl: './list-product.html',
  styleUrls: ['./list-product.css']
})
export class ListProduct implements OnInit {
  private product_service = inject(ListProductService);
  private toastr = inject(ToastrService);

  currentPage = 1;
  itemsPerPage = 5;
  totalItems = 0;

  public productListData = signal<ProductListResponse>({
    products: [],
    total: 0,
    skip: 0,
    limit: 0
  });

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    const skip = (this.currentPage - 1) * this.itemsPerPage;
    this.product_service.get_products(this.itemsPerPage, skip).subscribe({
      next: (res) => {
        this.productListData.set(res);
        this.totalItems = res.total;
      },
      error: () => {
        this.toastr.error('Failed to load products');
      }
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchProducts();
  }



}
