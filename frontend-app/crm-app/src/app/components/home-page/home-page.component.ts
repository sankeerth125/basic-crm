import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SIDENAV } from 'src/app/enums/sidenav-options';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [MatToolbarModule, MatSidenavModule, CommonModule, MatButtonModule],
})
export class HomePageComponent {
  defaultOption = SIDENAV.LIST;

  onOptionClick(option: SIDENAV) {
    this.defaultOption = option;
  }
}
