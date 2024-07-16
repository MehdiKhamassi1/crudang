import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit{
  num=0;
  constructor(private emp:EmployeeService){}
  ngOnInit() {
    this.num=this.emp.statis();
  }

}
