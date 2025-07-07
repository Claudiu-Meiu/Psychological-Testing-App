import { Component, Input } from '@angular/core';

import { PortalMcmi3Component } from '../portal-mcmi-3/portal-mcmi-3.component';
import { TestMcmi3Component } from '../test-mcmi-3/test-mcmi-3.component';
import { ResultsMcmi3Component } from '../results-mcmi-3/results-mcmi-3.component';

@Component({
  selector: 'app-main-mcmi-3',
  standalone: true,
  imports: [PortalMcmi3Component, TestMcmi3Component, ResultsMcmi3Component],
  templateUrl: './main-mcmi-3.component.html',
})
export class MainMcmi3Component {
  @Input() mcmi3Btn!: () => void;
}
