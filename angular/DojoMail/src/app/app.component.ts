import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  // emailList = [bill@gates.com, ada@lovelace.com, john@carmac.com, gabe@newel.com]
  emailArray = [{    
        email: 'bill@gates.com',
        importance: true, 
        subject: 'New Windows',
        content: 'Windoex XI will launch in year 2100',
    },
    {    
        email: 'ada@lovelace.com',
        importance: true, 
        subject: 'programming',
        content: 'Echantress of Numbers.',
    },
    {    
        email: 'john@carmac.com',
        importance: false, 
        subject: 'updated algo',
        content: 'New Algorithm for shadow volumes.',
    },
    {    
      email: 'gabe@newel.com',
      importance: false, 
      subject: 'hl3!',
      content: 'Just kidding...',
    },
  ]
}
