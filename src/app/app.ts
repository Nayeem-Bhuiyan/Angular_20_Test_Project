import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Top_Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Top_Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected title = 'Product-app';
}
