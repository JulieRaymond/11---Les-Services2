import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CocktailListComponent} from "./cocktail-list/cocktail-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CocktailListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mySecondService';
}
