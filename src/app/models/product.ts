export interface ProductListResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }
  
  export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    thumbnail: string;
    images: string[];
  }
  
  export interface Dimensions {
    width: number;
    height: number;
    depth: number;
  }
  
  export interface Review {
    rating: number;
    comment: string;
    date: string; // ISO string (you can convert to Date object if needed)
    reviewerName: string;
    reviewerEmail: string;
  }
  
  export interface Meta {
    createdAt: string; // ISO string
    updatedAt: string; // ISO string
    barcode: string;
    qrCode: string;
  }
  
