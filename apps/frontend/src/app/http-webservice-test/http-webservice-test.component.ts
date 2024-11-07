import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faelan } from 'src/assets/characters/faelan';
import { Character, Class } from '../types/characters';
import { Item, ItemType, MoneyUnit } from '../types/inventory';

@Component({
  selector: 'app-request-tester',
  templateUrl: './http-webservice-test.component.html',
  styleUrls: ['./http-webservice-test.component.scss'],
})
export class HttpWebserviceTestComponent {
  private baseUrl = 'http://localhost:5000/api';
  exampleObjects: { [key: string]: object } = {
    Class: {
      id: 1,
      name: 'Warrior',
      description: 'A strong and resilient fighter, skilled in melee combat.',
      img: 'https://example.com/images/warrior.png',
      abilities: [
        {
          id: 1,
          name: 'Shield Block',
          description:
            'Blocks incoming attacks with a shield, reducing damage.',
        },
        {
          id: 2,
          name: 'Power Strike',
          description: 'A powerful attack that deals extra damage.',
        },
      ],
      subclasses: [
        {
          id: 1,
          name: 'Berserker',
        },
        {
          id: 2,
          name: 'Knight',
        },
      ],
      learnableSpells: [
        { id: 101, name: 'Fireball' },
        { id: 102, name: 'Healing Touch' },
      ],
    },
    Item: {
      id: 1,
      name: 'Excalibur',
      description: 'A legendary sword of immense power.',
      img: 'https://example.com/images/excalibur.png',
      type: ItemType.Weapon, // Assuming ItemType is a string or an enum
      cost: {
        amount: 1000,
        unit: MoneyUnit.GOLD, // Assuming MoneyUnit is a string or an enum
      },
    },
    Character: faelan,
    // Weitere Beispielobjekte für andere Typen
  };

  constructor(private http: HttpClient) {}

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getAll(type: string) {
    console.warn(
      `${this.baseUrl}/${type.toLowerCase()}${
        type.toLowerCase() === 'class' ? 'e' : ''
      }s`
    );

    this.http
      .get(
        `${this.baseUrl}/${type.toLowerCase()}${
          type.toLowerCase() === 'class' ? 'e' : ''
        }s`
      )
      .subscribe(
        (response) =>
          console.log(
            `Get all ${type}${type === 'class' ? 'e' : ''}s:`,
            response
          ),
        (error) => console.error(`Error fetching all ${type}s`, error)
      );
  }

  getOne(type: string) {
    const id = 1; // Beispiel-ID
    this.http.get(`${this.baseUrl}/${type.toLowerCase()}/${id}`).subscribe(
      (response) => console.log(`Get ${type} with ID ${id}:`, response),
      (error) => console.error(`Error fetching ${type} with ID ${id}`, error)
    );
  }

  create(type: string) {
    const exampleObject = this.exampleObjects[type];
    this.http
      .post(`${this.baseUrl}/${type.toLowerCase()}`, exampleObject)
      .subscribe(
        (response) => console.log(`Created new ${type}:`, response),
        (error) => console.error(`Error creating ${type}`, error)
      );
  }

  update(type: string) {
    const id = 1; // Beispiel-ID für das Update
    const updatedObject = {
      ...this.exampleObjects[type],
      name: 'Updated Name',
    };
    this.http
      .put(`${this.baseUrl}/${type.toLowerCase()}/${id}`, updatedObject)
      .subscribe(
        (response) => console.log(`Updated ${type} with ID ${id}:`, response),
        (error) => console.error(`Error updating ${type} with ID ${id}`, error)
      );
  }

  delete(type: string) {
    const id = 1; // Beispiel-ID für das Löschen
    this.http.delete(`${this.baseUrl}/${type.toLowerCase()}/${id}`).subscribe(
      (response) => console.log(`Deleted ${type} with ID ${id}:`, response),
      (error) => console.error(`Error deleting ${type} with ID ${id}`, error)
    );
  }
}
