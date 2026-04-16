import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @ViewChild('searchIcon') private iconRef!: ElementRef<HTMLElement>;
  @ViewChild('searchBar') private searchBarRef!: ElementRef<HTMLElement>;
  
}
