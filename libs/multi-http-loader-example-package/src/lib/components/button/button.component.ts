import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { PrizmButtonComponent } from '@prizm-ui/components';

@Component({
  selector: 'shared-button',
  standalone: true,
  imports: [TranslateModule, PrizmButtonComponent],
  template: `<button prizmButton>{{ 'Shared.ButtonComponent.Button' | translate }}</button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
