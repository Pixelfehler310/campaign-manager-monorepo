import { Component, Input } from '@angular/core';
import { RegionFormViewComponent } from './species-form-view/region-form-view/region-form-view.component';
import { MonsterFormViewComponent } from './monster-form-view/monster-form-view.component';
import { SpellFormViewComponent } from './spell-form-view/spell-form-view.component';
import { ClassFormViewComponent } from './class-form-view/class-form-view.component';
import { ItemFormViewComponent } from './item-form-view/item-form-view.component';
import { SpeciesFormViewComponent } from './species-form-view/species-form-view.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrl: './form-view.component.scss',
})
export class FormViewComponent {
  @Input() category: string = '';
  id: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Lesen des 'id' Path Parameters
    this.category =
      this.route.snapshot.paramMap.get('category') ?? 'Hilfe ist kaputt';
    console.log(this.category); // Gibt den Parameterwert in der Konsole aus
  }
}
