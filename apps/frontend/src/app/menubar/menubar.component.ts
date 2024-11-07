import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Campaign } from '../types/campaigns';
import { ReferenceTo } from '../types/general';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  @Input() campaign!: Campaign;

  items: MenuItem[] = [];
  campaigns: Campaign[] | undefined = []; // todo backend, get campaigns
  selectedCampaign: Campaign | undefined = undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Players',
        icon: 'pi pi-users',
        routerLink: '/characters',
        items: (this.campaign?.playerCharacters ?? []).map((character) => ({
          label: character.name,
          routerLink: ['/characters', character.name],
        })),
      },
      {
        label: 'Entitys',
        icon: 'pi pi-users',
        routerLink: '/characters',
        items: [
          {
            label: 'Form',
            icon: 'pi pi-users',
            items: [
              {
                label: 'Charakter',
                icon: 'pi pi-users',
                routerLink: 'character/new',
              },
              {
                label: 'Spell',
                icon: 'fa-solid fa-wand-sparkles',
                routerLink: 'spell/new',
              },
              {
                label: 'Class',
                icon: 'fa-solid fa-hat-wizard',
                routerLink: 'class/new',
              },
              {
                label: 'region',
                icon: 'fa-solid fa-mountain-sun',
                routerLink: 'region/new',
              },
              {
                label: 'monster',
                icon: 'fa-solid fa-skull',
                routerLink: 'monster/new',
              },
              {
                label: 'species',
                icon: 'fa-solid fa-dragon',
                routerLink: 'species/new',
              },
              {
                label: 'Item',
                icon: 'fa-solid fa-ring',
                routerLink: 'item/new',
              },
            ],
          },
          {
            label: 'Detail',
            icon: 'pi pi-users',
            items: [
              {
                label: 'Charakter',
                icon: 'pi pi-users',
                routerLink: 'character/1',
              },
              {
                label: 'Spell',
                icon: 'fa-solid fa-wand-sparkles',
                routerLink: 'spell/1',
              },
              {
                label: 'Class',
                icon: 'fa-solid fa-hat-wizard',
                routerLink: 'class/1',
              },
              {
                label: 'region',
                icon: 'fa-solid fa-mountain-sun',
                routerLink: 'region/1',
              },
              {
                label: 'monster',
                icon: 'fa-solid fa-skull',
                routerLink: 'monster/1',
              },
              {
                label: 'Species',
                icon: 'fa-solid fa-dragon',
                routerLink: 'species/1',
              },
              {
                label: 'Item',
                icon: 'fa-solid fa-ring',
                routerLink: 'item/1',
              },
            ],
          },
        ],
      },
      {
        label: 'Test',
        icon: 'pi pi-paperclip',
        routerLink: '/test',
      },
      {
        label: 'Worldmap',
        icon: 'pi pi-globe',
        routerLink: '/world/map',
      },
      {
        label: 'Story',
        icon: 'pi pi-book',
        routerLink: '/story',
        // TODO story -> act -> chapter -> timelineEvents (Event / Quest (/ Location)) 1 // einfach erstmal was mocken // aus kampagne laden: 4
        // items: this.campaign.story.majorEvents.map((event) => ({
        //   label: event.title,
        //   routerLink: ['/story', event.title],
        // })),
      },
      {
        label: 'Wiki',
        icon: 'pi pi-info-circle',
        routerLink: '/wiki',
      },
    ];
  }
}
