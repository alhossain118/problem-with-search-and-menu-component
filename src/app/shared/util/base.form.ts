import { FormGroup } from '@angular/forms';

export class BaseForm extends FormGroup {
  constructor(
    controlsConfig: { [key: string]: any },
    validatorOrOpts?: any,
    asyncValidator?: any
  ) {
    super(controlsConfig, validatorOrOpts, asyncValidator);
  }

  // You can add common form methods or functionalities here
}
