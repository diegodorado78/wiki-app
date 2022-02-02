import { Component, Input } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Article, SearchService } from './core/services/search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles$!:Observable<Article[]>;
  title = 'wiki-app';
  constructor(private searchService:SearchService){
  }
  onSearch(term:string):void{
    this.articles$=this.searchService.search(term);//toma el valor emitido por search y llama al service que devuelve un array:Article
}}
