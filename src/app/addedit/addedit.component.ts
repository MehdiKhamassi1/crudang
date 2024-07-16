import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent implements OnInit{
  empForm: FormGroup;
  
  constructor(private _fb: FormBuilder,private emp:EmployeeService,private dialogref:DialogRef<AddeditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ){
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
    });
  }
  ngOnInit() {
    this.empForm.patchValue(this.data);
  }
  
  onformsubmit(){
    if(this.empForm.valid){
      if(this.data){
        this.emp.updateEmployee(this.data.id,this.empForm.value).subscribe({
          next:(val:any)=> {
            alert('Employee Updated');
            this.dialogref.close();
            window.location.reload();
          },
          error:(err) =>{
              console.error(err);
          }
        });
      }
      else
      {
        this.emp.addEmployee(this.empForm.value).subscribe({
          next:(val:any)=> {
            alert('Employee added');
            this.dialogref.close();
            window.location.reload();
          },
          error:(err) =>{
              console.error(err);
          }
        });
      }
      
    }
  }

}
