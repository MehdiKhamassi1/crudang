import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddeditComponent } from './addedit/addedit.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  constructor(private dialog:MatDialog){}

  openform(){
    this.dialog.open(AddeditComponent);
  }
}
