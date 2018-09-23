import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
    selector : 'courses',
    template :`
      <h1>{{title}}</h1>

      <ul class="list-group">
            <li class="list-group-item" *ngFor="let course of courses; index as i">{{i + ":"}}{{course}}</li>
      </ul>
     
    <form>
       <div class="form-group">
            <input type="sumit" class="btn btn-primary" value="addplayer" (click)="AddPlayers()" />
       </div>
    </form>


      <table class="table table-bordered">
            <tr>
                <th>name</th>
                <th>age</th>
                <th>runs</th>
                <th>remove</th>
            </tr>
            <tr *ngFor="let player of favplayers">
              <td> {{player.name}}</td>
              <td> {{player.age}}</td>
              <td> {{player.runs}}</td>
              <td class="btn btn-danger btn-xs" (click)="remove(player)">X</td>
            </tr>
      </table>

    <div [ngClass]="{available:isAvailable , unavailable:!isAvailable}">hello this is text</div>


    `,
    styles : [`
        .available {
            color:green;
        }
        .unavailable {
            color:red;
        }
    `]
})

export class courseComponent{
  
    isAvailable = false;


  title = "This is an angular application";
  courses; 

  constructor(service:CourseService){
     this.courses = service.getCourse();
  }
  color = "blue1";

  favplayers = [
      {
        name:"sachin",
        age : 30,
        runs : 35000
      },

      {
          name : "dravid",
          age : 25,
          runs : 20000
      }
]


AddPlayers(){
    this.favplayers.push({
        name:"lara",
        age:30,
        runs:30000

    });
}

remove(player){
    let removeitem =  this.favplayers.indexOf(player);
    this.favplayers.splice(removeitem , 1)

}

}