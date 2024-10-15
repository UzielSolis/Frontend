import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../modules/material/material.module';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8), this.passwordsMatch.bind(this)]],
      accept: [false, [Validators.requiredTrue]]
    }, {
      validators: [() => this.passwordsMatch()]
    });
  }

  passwordsMatch() {
    if (!this.form) return null;
    const [ password, confirm ] = this.form.getRawValue();
    return password === confirm ? null : { passwordMatch: true };
  }

  signup() {
    console.log('Formulario: ', this.form.value);
    if (this.form.valid) {
      console.log('Enviar datos...', this.form);
    } else {
      alert('Debes llenar todos los campos');
    }
  }

  getEmail(e: KeyboardEvent) {
    console.log("Eventos: ", (e.target as HTMLInputElement).value);
  }

}
