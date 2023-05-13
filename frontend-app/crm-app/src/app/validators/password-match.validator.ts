import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return ((formGroup: FormGroup): { [key: string]: boolean } | null => {
    const password = formGroup.get('password') as FormControl;
    const confirmPassword = formGroup.get('confirmPassword') as FormControl;

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordNotMatched: true });
      return { passwordNotMatched: true };
    } else {
      confirmPassword.setErrors(null);
      return null;
    }
  }) as ValidatorFn;
}
