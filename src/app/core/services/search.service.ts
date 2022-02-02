import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
interface WikiResponse{
query:{
  search:Article[]
}

}
export interface Article{
  ns:number,
  title:string,
  pageid:number,
  size:number,
  wordcount:number,
  snippet:string,
  timestamp:Date;
}
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor( private http:HttpClient) { }
  search(term:string):Observable<Article[]>{
    const params = {
      action:'query',
      format:'json',
      list:'search',
      srsearch:term,
      utf8:'1',
      srlimit:11,//limite de respuestas por consulta, default:10
      origin:'*'
    }
    return this.http.get<WikiResponse>(environment.api,{params:params})
    .pipe(
      pluck('query','search')//filtar del array dos niveles hasta llegar a search
      )
  }
}
