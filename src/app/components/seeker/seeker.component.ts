import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html'
})
export class SeekerComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( paramns => {
      this.termino = paramns['termino'];
      this.heroes = this.heroesService.buscarHeroes(paramns['termino']);
      // console.log(this.heroes);
    } );
  }

}
