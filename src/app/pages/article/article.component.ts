import { Component, Input} from '@angular/core';
import { Article } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent  {
 @Input() article!:Article; //uso el ! para no inicializar la var

  

}
