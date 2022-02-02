import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchModule } from './pages/search/search.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { ArticleModule } from './pages/article/article.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchModule,
    ArticleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
