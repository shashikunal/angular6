import { CourseService } from './course.servie';
import { Component } from "@angular/core";

@Component({
    selector : 'courses',
    template :`

         <div class="container">
           
         <div class="form-group">
           <button class="btn btn-primary" (click)="addUsers()">add users</button>
         </div>

            <table class="table table-bordered">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>company</th>
                    <th>Remove</th>
                </tr>
                 <tr *ngFor="let user of users; index as i">
                       
                         <td>{{i}}</td>
                         <td>{{user.name}}</td>
                         <td>{{user.age}}</td>
                         <td>{{user.company}}</td>
                         <td (click)="removeUser(user)">Remove</td>
                        
                 </tr>

            </table> 
    

        
       
        <input type="text" class="form-control col-md-6 col-lg-6"  #email (keyup.enter)="onSave(email.value) "/> 

           <input type="text" [(ngModel)]="name" class="form-control" />
          
            <h1>{{ name }} </h1>


           
            <div *ngIf="languages.length > 0; then languageList  else nolanguages"></div> 

            <ng-template #languageList>
                languages are here
             </ng-template>
         

           <ng-template #nolanguages>
                no languages are here
          </ng-template>
             

         <div [ngSwitch]="color">
             <p *ngSwitchCase="'red'">Red color is applying</p>
             <p *ngSwitchCase="'green'"> green color is applying</p>
             <p *ngSwitchCase="'blue'"> blue color is appying </p> 
             <p *ngSwitchDefault >no color is here</p>
         </div>



        </div>
    `
})

export class courseComponent {
    users;
    constructor(service:CourseService){
      this.users = service.getCourses()
    }

    color = "purple";
    languages = [1 , 1];

     
    onSave(email){
        console.log('Enter was Pressed through angular method' , email);
    }  
    

    



    colSpan  = 2;
    isActive = false;



    
   
  

    



}