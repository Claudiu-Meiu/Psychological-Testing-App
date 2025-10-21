import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from './services/theme.service';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatIconModule, MatTooltip],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public themeService = inject(ThemeService);

  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
