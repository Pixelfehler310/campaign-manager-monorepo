import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss',
})
export class DetailViewComponent {
  id: number = 0;
  category: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Lesen des 'id' Path Parameters
    this.category =
      this.route.snapshot.paramMap.get('category') ?? 'No category';
    this.id = Number(this.route.snapshot.paramMap.get('id')) ?? 'No Id';
    console.log('category', this.category, 'id', this.id);
  }
}
