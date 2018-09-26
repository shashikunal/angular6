import { UsernameValidator } from './username.validator';
import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  form = new FormGroup({
    username : new FormControl("" , [
      Validators.required,
      Validators.minLength(3),
      UsernameValidator.cannotContainSpace
      
    ]),
    password:  new FormControl("" , Validators.required)
  });

  get username(){
    return this.form.get('username');
  }
  
  

}
