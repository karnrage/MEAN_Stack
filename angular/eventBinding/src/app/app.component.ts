import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Timezone Display';
  time: string = '';
  months: string[] = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ]
  clicked: string = '';

  // function formatDate(date) {
  //   var hours = date.getHours();
  //   var minutes = date.getMinutes();
  //   var ampm = hours >= 12 ? 'pm' : 'am';
  //   hours = hours % 12;
  //   hours = hours ? hours : 12; // the hour '0' should be '12'
  //   minutes = minutes < 10 ? '0'+minutes : minutes;
  //   var strTime = hours + ':' + minutes + ' ' + ampm;
  //   return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
  // }
  
  // var d = new Date();
  // var e = formatDate(d);
  
  // alert(e);

  PST(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours() - 2;
    var min: any = date.getMinutes();
    var sec: any = date.getSeconds();
    var period = '';
    if (hour > 12){
      period = 'PM';
      hour = hour - 12;
    } else {
      period = 'AM';
    }
    if (min < 10){
      min = '0' + min;
    }
    if (sec < 10){
      sec = '0' + sec;
    }
    this.time = this.months[month] + ' ' +  day + ', ' + hour + ':' + min + ':' + sec + ' ' + period;
    this.clicked = 'PST';
  }

  MST(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours() - 1;
    var min: any = date.getMinutes();
    var sec: any = date.getSeconds();
    var period = '';
    if (hour > 12){
      period = 'PM';
      hour = hour - 12;
    } else {
      period = 'AM';
    }
    if (min < 10){
      min = '0' + min;
    }
    if (sec < 10){
      sec = '0' + sec;
    }
    this.time = this.months[month] + ' ' +  day + ', ' + hour + ':' + min + ':' + sec + ' ' + period;
    this.clicked = 'MST';
  }

  CST(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours() ;
    var min: any = date.getMinutes();
    var sec: any = date.getSeconds();
    var period = '';
    if (hour > 12){
      period = 'PM';
      hour = hour - 12;
    } else {
      period = 'AM';
    }
    if (min < 10){
      min = '0' + min;
    }
    if (sec < 10){
      sec = '0' + sec;
    }
    this.time = this.months[month] + ' ' +  day + ', ' + hour + ':' + min + ':' + sec + ' ' + period;
    this.clicked = 'CST';
  }

  EST(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var hour = date.getHours() + 1;
    var min: any = date.getMinutes();
    var sec: any = date.getSeconds();
    var period = '';
    if (hour > 12){
      period = 'PM';
      hour = hour - 12;
    } else {
      period = 'AM';
    }
    if (min < 10){
      min = '0' + min;
    }
    if (sec < 10){
      sec = '0' + sec;
    }
    this.time = this.months[month] + ' ' +  day + ', ' + hour + ':' + min + ':' + sec + ' ' + period;
    this.clicked = 'EST';
  }

  clear(){
    this.time = '';
    this.clicked = 'clear';
  }

  //   pstButtonClick(event) { 
  //     // var currentTime= Date.now();
  //     //  console.log(currentTime);
  //     var dt = new Date();
  //     console.log(dt);
  //     console.log(`PST Click event is working, event:`, event);
  // }
  //   mstButtonClick(event) { 
  //     // code here
  //     console.log(`MST Click event is working, event:`, event);
  // }

}
