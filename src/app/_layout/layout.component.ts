import { Component, HostListener, OnInit } from '@angular/core';
import { layout } from './config/layout-config';
import { BootStrapConfig } from './config/boostrap-config';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showVerticalMenu: boolean = false;
  showHorizontalMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.setUpLayout();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setUpResponsiveMenu(window.innerWidth);
  }

  private setUpLayout() {
    this.setUpResponsiveMenu();
  }

  private setUpResponsiveMenu(innerWidth?: number) {
    if (!innerWidth) innerWidth = window.innerWidth;

    if (layout.menuType.type == 'vertical') {
      if (innerWidth <= BootStrapConfig.MD) {
        this.showHorizontalMenu = true;
        this.showVerticalMenu = false;
      } else {
        this.showVerticalMenu = true;
        this.showHorizontalMenu = false;
      }
    } else if (layout.menuType.type == 'horizontal') {
      this.showHorizontalMenu = true;
      this.showVerticalMenu = false;
    }
  }
}
