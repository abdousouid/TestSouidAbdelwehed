import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
title:string="Films a voir aujourd'hui";
  film=[{titre:'ange&demons',affiche:'../assets/ange.jpg',duree:120},
{titre:'coco',affiche:'../assets/coco.jpg',duree:88},
{titre:'coeur nomade',affiche:'../assets/nomade.jpg',duree:97}];

  constructor() { }

  ngOnInit() {
  }

}
