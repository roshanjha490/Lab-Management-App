import { HardwareComponent } from "./hardware/hardware.component";
import { DialogboxComponent } from "./manage-computers/dialogbox/dialogbox.component";
import { RepairsComponent } from "./repairs/repairs.component";
import { NotificationComponent } from "./notification/notification.component";
import { ManageLabsComponent } from "./manage-labs/manage-labs.component";
import { ManageComputersComponent } from "./manage-computers/manage-computers.component";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditSystemComponent } from "./manage-computers/edit-system/edit-system.component";
import { SpecificLabComponent } from "./specific-lab/specific-lab.component";
import { SpecificSoftwareComponent } from "./specific-software/specific-software.component";
import { AuthGuard } from "../Authentication/auth-guard.service";
import { NotInUseComponent } from "./not-in-use/not-in-use.component";
import { SpecificHardwareComponent } from "./specific-hardware/specific-hardware.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { SoftwareComponent } from "./software/software.component";
import { UserComponent } from './user/user.component';
import { UserInfrmComponent } from './user/user-infrm/user-infrm.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';


const adminRoutes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
