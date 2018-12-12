import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-uservalue',
  templateUrl: './uservalue.component.html',
  styleUrls: ['./uservalue.component.css']
})
export class UservalueComponent implements OnInit {

  form = new FormGroup({
    topics : new FormArray([])
  });

  addTopic(topic: HTMLInputElement){
   this.topics.push(new FormControl(topic.value));
   topic.value = ""
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  constructor() { }
 ngOnInit() {
  }

}
