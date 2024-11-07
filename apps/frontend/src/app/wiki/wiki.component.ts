import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss'],
})
export class WikiComponent {
  // TODO Die komponenten hier haben irgendwie eine hierarche stufe zu viel, vllt kann man da was machen 5-6
  category: string = '';
  id: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Abonnieren und Route-Parameter abrufen
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category') ?? 'No category';
      this.id = Number(params.get('id')) ?? 0;
      console.log('Category:', this.category, 'ID:', this.id);
    });
  }
  // Logik komponente
}
