import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hello';
import { HEROES } from './mock-heroes';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched heroes${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
