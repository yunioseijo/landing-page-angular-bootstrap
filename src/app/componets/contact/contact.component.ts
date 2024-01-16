import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  //Supangamos que cargo la información del usario despues de hacer login
  userActive: any={
    name: 'Pedro',
    lastName: 'Martinez',
    dni: '12345678',
    email: 'nombre@gmail.com',
  }

  type_dni: string='DNI';

  constructor(private form: FormBuilder){
    this.contactForm = form.group({
      name: ['', [Validators.required, Validators.minLength(3)] ],
      lastName: ['', [Validators.required, Validators.minLength(3)] ],
      email: ['', [Validators.required, Validators.email] ],
      typeDNI: [''],
      dni: ['', [Validators.required, Validators.minLength(3)] ],
      message: ['', Validators.required]
    });
  }

  //Si quisiera setear los valores directamente al formulario por que los tengo el la variable userActive
  ngOnInit() {
    //si quisiera quitar los validadores por algun motivo
    this.contactForm.get('lastName')?.clearValidators();
    this.contactForm.get('lastName')?.updateValueAndValidity
    this.contactForm.patchValue({      
      name:     this.userActive.name,
      // lastName: this.userActive.lastName,
      // dni:      this.userActive.dni,
      email:    this.userActive.email,
    });

    this.contactForm.get('name')?.disable();
    // this.contactForm.get('lastName')?.disable();ç
    this.contactForm.get('email')?.disable();
    // this.contactForm.get('dni')?.disable();

    this.contactForm.get('typeDNI')?.valueChanges.subscribe(value => {
      this.type_dni = value;
    }
      
      );

  }

  onSubmit() {
    console.log(this.contactForm);
    // Aquí puedes manejar la lógica de envío del formulario
  }
  hasErrors(controlName: string, errorType: string) {
    return this.contactForm.get(controlName)?.hasError(errorType) && this.contactForm.get(controlName)?.touched

  }
}