import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  vaccineForm: FormGroup;
  submitted = false; 
  post : any;

  //attributes declarations
  firstName: any ='';
  surName:any='';
  eMail:string='';
  phoneNumber:number;
  birthDay:number;



  constructor(private fb: FormBuilder){
    this.vaccineForm = fb.group({

      // the attributes in the form and validation
      'firstName': ['', Validators.required],
      'surName': ['', Validators.required],
      'eMail': ['', Validators.required],
      'phoneNumber': ['', Validators.required],
      'birthDay': ['', Validators.required],
      'validate' : ''
    });
  }

  // produce a JSON file information and alet informing the success of registration
  onSubmit() {
    this.submitted = true;

    if (this.vaccineForm.invalid) {
        return;
    }

    alert('Your Registration is Successful!\n\n' + JSON.stringify(this.vaccineForm.value))
}

}