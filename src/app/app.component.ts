import { Component } from '@angular/core';
import CustomHttpClientService from './customHttpClient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  constructor(private http: CustomHttpClientService) {
    http.get('https://jsonplaceholder.typicode.com/todos/1').then((result) => {console.log(result)})
    // this.getData();
  }

  public async getData(){
    let dataTestAwait = await this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    this.title = dataTestAwait.title;
  }
}
