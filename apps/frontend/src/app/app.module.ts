import { WikiEntry } from './wiki/wiki-overview/wiki-entry-card/wiki-entry-card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { PanelModule } from 'primeng/panel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ChipModule } from 'primeng/chip';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Overlay } from 'primeng/overlay';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './world/map/map.component';
import { StoryComponent } from './story/story.component';
import { WikiComponent } from './wiki/wiki.component';
import { CampaignSelectorComponent } from './campaign-selector/campaign-selector.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CharacterDetailViewComponent } from './dataview/detail-view/character-detail-view/character-detail-view.component';
import { RegionDetailViewComponent } from './dataview/detail-view/region-detail-view/region-detail-view.component';
import { MonsterDetailViewComponent } from './dataview/detail-view/monster-detail-view/monster-detail-view.component';
import { SpeciesDetailViewComponent } from './dataview/detail-view/species-detail-view/species-detail-view.component';
import { ClassDetailViewComponent } from './dataview/detail-view/class-detail-view/class-detail-view.component';
import { ItemDetailViewComponent } from './dataview/detail-view/item-detail-view/item-detail-view.component';
import { SpellDetailViewComponent } from './dataview/detail-view/spell-detail-view/spell-detail-view.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterFormViewComponent } from './dataview/form-view/character-form-view/character-form-view.component';
import { WikiOverviewComponent } from './wiki/wiki-overview/wiki-overview.component';
import { WikiSearchBarComponent } from './wiki/wiki-overview/wiki-search-bar/wiki-search-bar.component';
import { WikiFilterBarComponent } from './wiki/wiki-overview/wiki-filter-bar/wiki-filter-bar.component';
import { WikiEntryCardComponent } from './wiki/wiki-overview/wiki-entry-card/wiki-entry-card.component';
import { WikiCharacterCardComponent } from './wiki/wiki-overview/wiki-entry-card/wiki-character-card/wiki-character-card.component';
import { WikiSpellCardComponent } from './wiki/wiki-overview/wiki-entry-card/wiki-spell-card/wiki-spell-card.component';
import { WikiItemCardComponent } from './wiki/wiki-overview/wiki-entry-card/wiki-item-card/wiki-item-card.component';
import { WikiMonsterCardComponent } from './wiki/wiki-overview/wiki-entry-card/wiki-monster-card/wiki-monster-card.component';
import { WikiRegionCardComponent } from './wiki/wiki-overview/wiki-entry-card/wiki-region-card/wiki-region-card.component';
import { WikiSpeciesCardComponent } from './wiki/wiki-overview/wiki-entry-card/wiki-species-card/wiki-species-card.component';
import { WikiClassCardComponent } from './wiki/wiki-overview/wiki-entry-card/wiki-class-card/wiki-class-card.component';
import { HttpWebserviceTestComponent } from './http-webservice-test/http-webservice-test.component';
import { DetailViewComponent } from './dataview/detail-view/detail-view.component';
import { FormViewComponent } from './dataview/form-view/form-view.component';
import { RegionFormViewComponent } from './dataview/form-view/species-form-view/region-form-view/region-form-view.component';
import { ClassFormViewComponent } from './dataview/form-view/class-form-view/class-form-view.component';
import { ItemFormViewComponent } from './dataview/form-view/item-form-view/item-form-view.component';
import { MonsterFormViewComponent } from './dataview/form-view/monster-form-view/monster-form-view.component';
import { SpeciesFormViewComponent } from './dataview/form-view/species-form-view/species-form-view.component';
import { SpellFormViewComponent } from './dataview/form-view/spell-form-view/spell-form-view.component';
import { ImageUploadComponent } from './dataview/image-upload/image-upload.component';
import { DatatableComponent } from './dataview/datatable/datatable.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TabViewModule } from 'primeng/tabview';
import { RippleModule } from 'primeng/ripple';
import { DiceInfoComponent } from './dataview/dice-info/dice-info.component';

@NgModule({
  // todo Den shit hier modularisieren 5-7
  declarations: [
    AppComponent,
    MapComponent,
    StoryComponent,
    WikiComponent,
    CampaignSelectorComponent,
    MenubarComponent,
    CharacterDetailViewComponent,
    RegionDetailViewComponent,
    MonsterDetailViewComponent,
    SpeciesDetailViewComponent,
    ClassDetailViewComponent,
    ItemDetailViewComponent,
    SpellDetailViewComponent,
    DetailViewComponent,
    CharacterFormViewComponent,
    WikiOverviewComponent,
    WikiSearchBarComponent,
    WikiFilterBarComponent,
    WikiEntryCardComponent,
    WikiCharacterCardComponent,
    WikiSpellCardComponent,
    WikiItemCardComponent,
    WikiMonsterCardComponent,
    WikiRegionCardComponent,
    WikiSpeciesCardComponent,
    WikiClassCardComponent,
    HttpWebserviceTestComponent,
    FormViewComponent,
    RegionFormViewComponent,
    MonsterFormViewComponent,
    SpellFormViewComponent,
    ClassFormViewComponent,
    ItemFormViewComponent,
    SpeciesFormViewComponent,
    ImageUploadComponent,
    DatatableComponent,
    DiceInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AutoCompleteModule,
    MenubarModule,
    DropdownModule,
    CardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputNumberModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    CheckboxModule,
    ConfirmDialogModule,
    TableModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    DividerModule,
    AccordionModule,
    PanelModule,
    TooltipModule,
    FileUploadModule,
    MultiSelectModule,
    ChipModule,
    ToolbarModule,
    DialogModule,
    ToastModule,
    SelectButtonModule,
    OverlayPanelModule,
    FloatLabelModule,
    TabViewModule,
    RippleModule,
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
