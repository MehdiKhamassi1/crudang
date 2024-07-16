import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeditComponent } from './addedit/addedit.component';
import { StatsComponent } from './stats/stats.component';
import { PrintComponent } from './print/print.component';

const routes: Routes = [
  {path :'',redirectTo:'list',pathMatch:'full'},
  {path :'list',component:AddeditComponent},
  {path :'stats',component:StatsComponent},
  {path :'print',component:PrintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
