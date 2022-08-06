import { Component, OnInit } from '@angular/core';
import { Recipies } from '../recipies.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css'],
})
export class RecipiesListComponent implements OnInit {
  recipies: Recipies[] = [
    new Recipies(
      'Test Recipie',
      'This is a test recipie',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg'
    ),
    new Recipies(
      'Test Recipie',
      'This is a test recipie',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
