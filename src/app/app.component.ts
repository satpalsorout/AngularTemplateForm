import { Component } from '@angular/core';
import { User } from './user';
import {EnrollementService} from './enrollement.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','React','Vue'];
  topicHasError=true;
  submitted=false;
  errorMsg='';
  userModel=new User('','rob@test.com',9898989878,'Angular','morning',true);
  constructor(private _enrollementService:EnrollementService)
  {}
  validateTopic(value)
  {
    if(value=='default'){
    this.topicHasError=true}
    else{
      this.topicHasError=false
    }
  }
  OnSubmit()
  {
    this.submitted=true;
   this._enrollementService.enroll(this.userModel)
   .subscribe(
     data=>console.log('success!',data),
     error=>this.errorMsg=error.statusText
   )
   
  }
}
