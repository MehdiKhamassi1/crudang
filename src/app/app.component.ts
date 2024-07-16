import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditComponent } from './addedit/addedit.component';
import { EmployeeService } from './services/employee.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud';
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog,private emp:EmployeeService,private router:Router){}


  ngOnInit(): void {
    this.getlist();
  }

  openform(){
    this.dialog.open(AddeditComponent);
  }

  getlist()
  {
    this.emp.showall().subscribe(
      {
        next :(res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator =this.paginator;
        },
        error:(err)=>{
          console.log(err);
        }
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteempp(id:number){
    this.emp.deleteemp(id).subscribe({
      next:(val:any)=> {
        alert('Employee deleted');
        window.location.reload();
      },
      error:(err) =>{
          console.error(err);
      }
    });
  }

  openformedit(data:any){
    this.dialog.open(AddeditComponent,{
      data:data
    })
  }

  gostats(){
    this.router.navigate(['stats']);
  }

}
