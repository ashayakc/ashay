import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("New Recipe", "check recipe", "https://cdn.pixabay.com/photo/2014/06/11/17/00/cook-366875_960_720.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
