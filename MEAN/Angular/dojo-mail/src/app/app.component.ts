import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*interface message{
  email: string
  importance: boolean
  subject: string
  content: string
}*/

export class AppComponent {
  emails: any[] = [{email: "ZDAWG@gmail.com", importance: true, subject: "Important notification", content: "Jk this is pointless"},
  {email: "ZDAWG@protonmail.com", importance: false, subject: "Unimportant", content: "Hmm what is this"},
  {email: "ZDAWG@yahoo.com", importance: true, subject: "Testing 123", content: "durrrrkkdkfk"},
  {email: "ZDAWG@hotmail.com", importance: false, subject: "Something", content: "Testing 456"}];
}
