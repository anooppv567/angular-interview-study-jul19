import { Component, OnInit,Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input () userNameFromParent ='' ;
 @Output () nameEvent = new EventEmitter<string>();
 userName='';
  constructor() { }

  ngOnInit() {
     console.log('ngOnint  Called')
  }
  ngOnChanges(){
    console.log('ngOnchanges Called')
  }
onNameChange(){
 this.nameEvent.emit(this.userName);
}
}