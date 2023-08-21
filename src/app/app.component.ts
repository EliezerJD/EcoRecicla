import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Herramientas', url: '/folder/Herramientas', icon: 'accessibility' },
    { title: 'Administrar', url: '/folder/Administrar', icon: 'build' },
  ];
  constructor() {}
}
