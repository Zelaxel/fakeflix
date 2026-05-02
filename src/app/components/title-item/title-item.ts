import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { GetJsonData } from '../../injectables/get-json-data';
import { Title } from '../../models/title';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-title-item',
  templateUrl: './title-item.html',
  styleUrl: './title-item.css',
  imports: [RouterLink],
})
export class TitleItem implements OnInit {
  @Input() title?: Title;
  img: string = '';
  name: string = '';
  loaded: boolean = false;

  constructor(
    private jsonDataService: GetJsonData,
    private cdr: ChangeDetectorRef,
  ) {}

  async ngOnInit() {
    if (this.title) {
      this.img = this.title.imageUrl;
      this.name = this.title.name;
      this.loaded = true;
      this.cdr.detectChanges();
    }
  }
}
