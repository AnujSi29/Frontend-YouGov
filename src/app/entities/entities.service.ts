import { Injectable } from '@angular/core';
import { entities } from './entities-mock';
import { Entity } from './entity';
@Injectable({
  providedIn: 'root',
})
export class EntitiesService {

  constructor() { }
  sortRating(obj: any) {
    obj.sort((a: any , b: any) => b.rating - a.rating );
    return obj;
  }
  roundRating(obj: any) {
    const l = obj.length;
    for (let i = 0; i < l; i++) {
      obj[i].rating = Math.round(obj[i].rating);
    }
    // filtering only those objects which contains rating greater than 50
    const newObj = obj.filter( h => h.rating > 50);
    return newObj;
  }
  get() {
    // getting the unique items from the entities
    const result: Entity[] = [];
    const map = new Map();
    for (const item of entities) {
      if (!map.has(item.uuid)) {
        map.set(item.uuid, true);    // set any value to Map
        result.push({
            image: item.image,
            name: item.name,
            type: item.type,
            rating: item.rating,
            uuid: item.uuid,
        });
      }
    }
    // sorting the unique object.
    const afterSorting = this.sortRating(result);
    // rounded rating to nearest value.Inside this function filtering rating greater than 50.
    const finalEntity = this.roundRating(afterSorting);
    return finalEntity;
  }
}
