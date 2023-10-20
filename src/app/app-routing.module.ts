import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { PicturesPageComponent } from './pictures-page/pictures-page.component';
import { MemoriesPageComponent } from './memories-page/memories-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, // Default route
  { path: 'home', component: HomePageComponent },
  { path: 'books', component: BooksPageComponent },
  { path: 'pictures', component: PicturesPageComponent },
  { path: 'memories', component: MemoriesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
