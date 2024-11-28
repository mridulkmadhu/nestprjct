import { Component } from '@angular/core';
import { CardsComponent } from "../../components/cards/cards.component";
import { CarousalComponent } from "../../components/carousal/carousal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarousalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
