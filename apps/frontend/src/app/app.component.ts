import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api'; // Importiere MenuItem

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  campaigns = [{ name: 'Kampagne 1' }, { name: 'Kampagne 2' }]; // TODO: Daten aus Backend holen // dafür fehlt das backend xD aber request kann schonmal aufgesetzt werden // 5

  constructor() {}
}
