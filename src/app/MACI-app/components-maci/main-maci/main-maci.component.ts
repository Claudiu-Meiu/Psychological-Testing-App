import { Component, Input } from '@angular/core';

import { PortalMaciComponent } from '../portal-maci/portal-maci.component';
import { TestMaciComponent } from '../test-maci/test-maci.component';
import { ResultsMaciComponent } from '../results-maci/results-maci.component';

@Component({
  selector: 'app-main-maci',
  standalone: true,
  imports: [PortalMaciComponent, TestMaciComponent, ResultsMaciComponent],
  templateUrl: './main-maci.component.html',
})
export class MainMaciComponent {
  @Input() maciBtn!: () => void;
}
