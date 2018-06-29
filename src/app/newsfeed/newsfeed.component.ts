import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  private apiUrl = 'https://newsapi.org/v2/everything?' +
  'q=+SME AND (+trade OR cross-border OR eu OR european union)&' +
  'sortBy=relevancy&' +
  'pageSize=10&' +
  'apiKey=11711cee95a74a63bafa8996c92fc2dd';
  data: any = {};

  constructor(private http: Http) {
    this.getNews();
    this.getData();
   }

   getData() {
     return this.http.get(this.apiUrl)
      .pipe(map((res: Response) => res.json()));
   }

   getNews() {
     this.getData().subscribe(data => {
       this.data = data;
     });
   }

  ngOnInit() {
  }

}
