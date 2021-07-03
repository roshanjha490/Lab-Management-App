import { DialogboxComponent } from './manage-computers/dialogbox/dialogbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageComputersComponent } from './manage-computers/manage-computers.component';
import { NotificationComponent } from './notification/notification.component';
import { ManageLabsComponent } from './manage-labs/manage-labs.component';
import { RepairsComponent } from './repairs/repairs.component';
import { EditSystemComponent } from './manage-computers/edit-system/edit-system.component';
import { FilterPipe } from './filter.pipe';
import { SpecificLabComponent } from './specific-lab/specific-lab.component';
import { SpecificSoftwareComponent } from './specific-software/specific-software.component';
import { NotInUseComponent } from './not-in-use/not-in-use.component';
import { HardwareComponent } from './hardware/hardware.component';
import { SpecificHardwareComponent } from './specific-hardware/specific-hardware.component';
import { GridSoftwareComponent } from './specific-software/grid-software/grid-software.component';
import { TableSoftwareComponent } from './specific-software/table-software/table-software.component';
import { GridViewComponent } from './manage-computers/grid-view/grid-view.component';
import { TableViewComponent } from './manage-computers/table-view/table-view.component';
import { GridLabComponent } from './specific-lab/grid-lab/grid-lab.component';
import { TableLabComponent } from './specific-lab/table-lab/table-lab.component';
import { GridRepairComponent } from './repairs/grid-repair/grid-repair.component';
import { TableRepairComponent } from './repairs/table-repair/table-repair.component';
import { GridNotComponent } from './not-in-use/grid-not/grid-not.component';
import { TableNotComponent } from './not-in-use/table-not/table-not.component';
import { GridHardwareComponent } from './specific-hardware/grid-hardware/grid-hardware.component';
import { TableHardwareComponent } from './specific-hardware/table-hardware/table-hardware.component';
import { SoftwareComponent } from './software/software.component';
import { UserComponent } from './user/user.component';
import { UserInfrmComponent } from './user/user-infrm/user-infrm.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    ManageComputersComponent,
    NotificationComponent,
    ManageLabsComponent,
    RepairsComponent,
    DialogboxComponent,
    EditSystemComponent,
    FilterPipe,
    SpecificLabComponent,
    SpecificSoftwareComponent,
    NotInUseComponent,
    HardwareComponent,
    SpecificHardwareComponent,
    GridSoftwareComponent,
    TableSoftwareComponent,
    GridViewComponent,
    TableViewComponent,
    GridLabComponent,
    TableLabComponent,
    GridRepairComponent,
    TableRepairComponent,
    GridNotComponent,
    TableNotComponent,
    GridHardwareComponent,
    TableHardwareComponent,
    SoftwareComponent,
    UserComponent,
    UserInfrmComponent,
    UserEditComponent,
  ]
})
export class AdminModule { }