import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateCity, validateCityWithWhitelist } from '../../shared/validation/validate-city';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  fGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fGroup = this.fb.group({
      id: [0],
      from: [
        'Graz',
        [
          Validators.required,
          Validators.minLength(3),
          validateCity
        ]  
      ],
      to: [
        'Hamburg',
        [
          Validators.required,
          Validators.minLength(3),
          validateCityWithWhitelist([
            'Wien',
            'Berlin'
          ])
        ]
      ],
      date: [
        (new Date()).toISOString()
      ]
    });

    this.fGroup.valueChanges
      .subscribe(console.log);
  }

  save(): void {
    console.log('value', this.fGroup.value);
    console.log('valid', this.fGroup.valid);
    console.log('dirty', this.fGroup.dirty);
    console.log('touched', this.fGroup.touched);
  }

}
