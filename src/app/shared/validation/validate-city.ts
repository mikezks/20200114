import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validateCity(control: AbstractControl): ValidationErrors | null {
    const validCities = [
        'Graz',
        'Hamburg'
    ];

    if (validCities.indexOf(control.value) === -1) {
        return {
            city: {
                actualCity: control.value,
                validCities
            }
        };
    }

    return null;
}

export function validateCityWithWhitelist(validCities: string[]): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
        if (validCities.indexOf(control.value) === -1) {
            return {
                city: {
                    actualCity: control.value,
                    validCities
                }
            };
        }

        return null;
    };
}