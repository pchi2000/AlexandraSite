import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleBooksService } from 'src/app/shared/google-books.service';

@Component({
  selector: 'app-web-books-page',
  templateUrl: './web-books-page.component.html',
  styleUrls: ['./web-books-page.component.css']
})
export class WebBooksPageComponent {
  searchQuery = '';
  books: any[] = [];

  constructor(private googleBooksService: GoogleBooksService) {}

  searchBooks() {
    this.googleBooksService.searchBooks(this.searchQuery)
      .subscribe((data: any) => {
        this.books = data.items;
      });
  }
}
