import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent {
  empForm: FormGroup;
  
  constructor(private _fb: FormBuilder){
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
    });
  }
  
  onformsubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value);
    }
  }
}
