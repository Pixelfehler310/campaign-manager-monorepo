import { RegionDetailViewComponent } from './dataview/detail-view/region-detail-view/region-detail-view.component';
import { FormViewComponent } from './dataview/form-view/form-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './world/map/map.component';
import { StoryComponent } from './story/story.component';
import { WikiComponent } from './wiki/wiki.component';
import { CharacterDetailViewComponent } from './dataview/detail-view/character-detail-view/character-detail-view.component';
import { CharacterFormViewComponent } from './dataview/form-view/character-form-view/character-form-view.component';
import { WikiOverviewComponent } from './wiki/wiki-overview/wiki-overview.component';
import { DetailViewComponent } from './dataview/detail-view/detail-view.component';
import { HttpWebserviceTestComponent } from './http-webservice-test/http-webservice-test.component';

const routes: Routes = [
  // { path: 'campaigns', component: CampaignOverviewComponent },
  { path: 'character/test', component: CharacterDetailViewComponent },
  // { path: 'world', component: MapComponent },
  { path: 'regions/test', component: RegionDetailViewComponent },
  { path: 'world/map', component: MapComponent },
  { path: 'wiki', component: WikiOverviewComponent },
  { path: 'test', component: HttpWebserviceTestComponent },
  { path: ':category/new', component: FormViewComponent }, // TODO 6: Path param übergeben, im Detailview auslesen und entsprechendes Objekt laden, und in ansicht anzeigen
  { path: ':category/:id', component: DetailViewComponent }, // TODO 6: Path param übergeben, im Detailview auslesen und entsprechendes Objekt laden, und in ansicht anzeigen
  { path: ':category', component: WikiOverviewComponent }, // TODO 7: Path param übergeben, im WIki auslesen und dementsprechend Filter anwenden, backend kann erstmal vernachlässigt werden
  { path: '', redirectTo: '/characters', pathMatch: 'full' }, // Default Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
