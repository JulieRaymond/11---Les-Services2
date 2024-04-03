import {Component} from '@angular/core';
import {Cocktail} from "../models/cocktail.model";
import {CocktailService} from "../services/cocktail.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) {
  }

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
      this.cocktails = cocktailsFromJsonFile;
    });
  }
}

