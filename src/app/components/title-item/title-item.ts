import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { GetJsonData } from '../../injectables/get-json-data';

@Component({
  selector: 'app-title-item',
  templateUrl: './title-item.html',
  styleUrl: './title-item.css',
})
export class TitleItem implements OnInit {
  @Input() id: number = 0;
  titleImage: string = "";
  titleName: string = "";
  loaded: boolean = false; 

  constructor(private jsonDataService: GetJsonData, private cdr: ChangeDetectorRef) {};

  async ngOnInit() {
    let data = await this.jsonDataService.get("/data/titles.json");
    let title = [...data.titles].find(t => t.id === this.id);
    console.log(title);
    if(title) {
      this.titleName = title.title;
      this.titleImage = title.image;
      this.loaded = true;
      this.cdr.detectChanges();
    }
  }
}
