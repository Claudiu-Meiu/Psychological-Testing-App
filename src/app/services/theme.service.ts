import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private readonly _lightTheme = 'assets/themes/azure-blue.css';
  private readonly _darkTheme = 'assets/themes/cyan-orange.css';

  private readonly _themeLinkId = 'app-theme';
  private readonly _storageKey = 'app-theme-mode';

  private _current: 'light' | 'dark' = 'light';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this._initTheme();
  }

  private _initTheme(): void {
    const storedTheme = localStorage.getItem(this._storageKey);
    if (storedTheme === 'dark') {
      this._setDarkTheme();
    } else {
      this._setLightTheme();
    }
  }

  public toggleTheme(): void {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      this._setLightTheme();
    } else {
      this._setDarkTheme();
    }
  }

  private _setLightTheme(): void {
    this._updateThemeLink(this._lightTheme);
    this.renderer.removeClass(document.documentElement, 'dark');
    localStorage.setItem(this._storageKey, 'light');
    this._current = 'light';
  }

  private _setDarkTheme(): void {
    this._updateThemeLink(this._darkTheme);
    this.renderer.addClass(document.documentElement, 'dark');
    localStorage.setItem(this._storageKey, 'dark');
    this._current = 'dark';
  }

  private _updateThemeLink(themeUrl: string): void {
    let linkElement = document.getElementById(
      this._themeLinkId
    ) as HTMLLinkElement;
    if (!linkElement) {
      linkElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkElement, 'id', this._themeLinkId);
      const head = document.head;
      this.renderer.appendChild(head, linkElement);
    }
    this.renderer.setAttribute(linkElement, 'href', themeUrl);
  }

  get currentTheme(): 'light' | 'dark' {
    return this._current;
  }
}
