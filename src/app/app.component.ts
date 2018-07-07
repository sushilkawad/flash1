import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Mumbai';
  name1='';
  act:boolean = true;
  students = ['Mangesh','Sushil','Kartheek'];
  users = [{'name':'mangesh','id':1,'age':45},{'name':'Kartheek','id':5,'age':30}];
  flash;
  flag=1;
  redvar = 'red';
  bluevar = 'blue';
  green = 'green';

  flashTitle = function () {
    this.flash = setInterval(() => {
      if (this.title == 'Mumbai') {
        this.title = '';
      } else {
        this.title = 'Mumbai';
      }
    }, 200);
  }

  fun = function(){
    return true;
  }

  stopFlash = function(){
    clearInterval(this.flash);
     this.title = 'Mumbai';
  }

  // title = 'Welcome to App';
  // title1 = 'Welcome to App';
  // disabledVar: boolean = false;
  // disabledVar2: boolean = true;
  // name1 = "Sushil";
  // classname = 'white';
  // handle;

  // flashTitle = function() {
  //   this.disabledVar = true;
  //   this.disabledVar2 = false;

  //   this.handle = setInterval(() => {
  //     // console.log(typeof(this.handle));
  //     if(this.classname == 'white'){
  //       this.classname = 'black';
  //     }else{
  //       this.classname = 'white'
  //     }

  //     if (this.title == "") {
  //       this.title = this.title1;
  //     } else {
  //       this.title = "";
  //     }

  //   }, 1000);
  // };

  // stopFlash() {
  //   this.disabledVar = false;
  //   this.disabledVar2 = true;
  //   this.title = this.title1;
  //   //  alert();
  //   clearInterval(this.handle);
  // }
}
