import { Component } from '@angular/core';
import { SliderWindowComponent } from "../../../../components/slider-window/slider-window.component";
import { OffersComponent } from "../../components/offers/offers.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { FooterComponent } from "../../../../components/footer/footer.component";
import { LoginComponent } from "../../../../components/Login_Components/login/login.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [OffersComponent, CardsComponent, SliderWindowComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
