import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent  {
  posts:any[];
  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http : Http) {
      http.get(this.url).subscribe((response)=>{
              this.posts = response.json();
      })
   };

   createData(input:HTMLInputElement){
        let post = {title : input.value}
        input.value = '';
          this.http.post(this.url , JSON.stringify(post)).subscribe((response)=>{
           post['id']= response.json().id;
           this.posts.splice(0 , 0 , post)
          });
    };

    remove(post){
      this.http.delete(this.url + "/" + post.id).subscribe((response)=>{
             let index = this.posts.indexOf(post);
             this.posts.splice(index , 1) 
      })
    }



  
}
