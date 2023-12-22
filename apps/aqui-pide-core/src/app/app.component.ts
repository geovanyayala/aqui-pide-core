import { Component } from '@angular/core';

@Component({
  selector: 'aqui-pide-core-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'aqui-pide-core';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
