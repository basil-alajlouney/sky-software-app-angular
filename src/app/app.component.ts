import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  BaseRoute = 'Home';
  search:string = ""
  notImplemented = () => alert("not implemented");
  cards = [
    {name:"Ahmad Attar", duration:"2 Weeks (1/4/2024 - 14/4/2024)", salary:"1000 AED", submittion:"1/3/2024"},
    {name:"Ahmad Attar", duration:"2 Weeks (1/4/2024 - 14/4/2024)", salary:"1000 AED", submittion:"1/3/2024"},
    {name:"Ahmad Attar", duration:"2 Weeks (1/4/2024 - 14/4/2024)", salary:"1000 AED", submittion:"1/3/2024"},
    {name:"Ahmad Attar", duration:"2 Weeks (1/4/2024 - 14/4/2024)", salary:"1000 AED", submittion:"1/3/2024"},
    {name:"Ahmad Attar", duration:"2 Weeks (1/4/2024 - 14/4/2024)", salary:"1000 AED", submittion:"1/3/2024"},
    {name:"Ahmad Attar", duration:"2 Weeks (1/4/2024 - 14/4/2024)", salary:"1000 AED", submittion:"1/3/2024"},
    {name:"Ahmad Attar", duration:"2 Weeks (1/4/2024 - 14/4/2024)", salary:"1000 AED", submittion:"1/3/2024"},
  ]
}
