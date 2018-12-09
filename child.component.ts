import { Component, OnInit, Input, Output  , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() input:string;
@Output()output:EventEmitter<string> = new EventEmitter();
myOutputText = "i am your child";

constructor() { }

  ngOnInit() {
    console.log(this.input);
  }


  getData(){
  this.output.emit(this.myOutputText);
  }
}
