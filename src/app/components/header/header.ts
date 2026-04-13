import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @ViewChild('searchIcon') private iconRef!: ElementRef<HTMLElement>;
  @ViewChild('searchBar') private searchBarRef!: ElementRef<HTMLElement>;
  
}
