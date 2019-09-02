import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hello';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() hero: Hero;
}
