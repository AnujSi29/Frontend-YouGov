import { EntitiesService } from './entities.service';
import { Component, OnInit } from '@angular/core';
import { Entity } from './entity';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss'],
})
export class EntitiesComponent implements OnInit {
  public entities: Entity[] = [];

  constructor(
    private entitiesService: EntitiesService,
  ) { }

  ngOnInit() {
    this.entities = this.entitiesService.get();
  }
}
