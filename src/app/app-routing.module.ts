import { ManageComputersComponent } from './admin/manage-computers/manage-computers.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpecificSoftwareComponent } from './admin/specific-software/specific-software.component';
import { DialogboxComponent } from './admin/manage-computers/dialogbox/dialogbox.component';
import { EditSystemComponent } from './admin/manage-computers/edit-system/edit-system.component';
import { SpecificLabComponent } from './admin/specific-lab/specific-lab.component';
import { ManageLabsComponent } from './admin/manage-labs/manage-labs.component';
import { NotificationComponent } from './admin/notification/notification.component';
import { SoftwareComponent } from './admin/software/software.component';
import { SpecificHardwareComponent } from './admin/specific-hardware/specific-hardware.component';
import { HardwareComponent } from './admin/hardware/hardware.component';
import { RepairsComponent } from './admin/repairs/repairs.component';
import { NotInUseComponent } from './admin/not-in-use/not-in-use.component';
import { UserComponent } from './admin/user/user.component';
import { UserInfrmComponent } from './admin/user/user-infrm/user-infrm.component';
import { UserEditComponent } from './admin/user/user-edit/user-edit.component';
import { AuthGuard } from './Authentication/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-admin',
    pathMatch: 'full'
  },

  { path: 'login-admin', component: LoginComponent },

  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard/:software",
        component: SpecificSoftwareComponent,
        children: [
          { path: ":id", component: DialogboxComponent },
          { path: ":id/:edit", component: EditSystemComponent }
        ]
      },

      { path: "dashboard", component: DashboardComponent },

      {
        path: "manage-computers",
        component: ManageComputersComponent,
        children: [
          { path: ":id", component: DialogboxComponent },
          { path: ":id/:edit", component: EditSystemComponent }
        ]
      },

      {
        path: "manage-labs/:lab",
        component: SpecificLabComponent,
        children: [
          { path: ":id", component: DialogboxComponent },
          { path: ":id/:edit", component: EditSystemComponent }
        ]
      },

      { path: "manage-labs", component: ManageLabsComponent },

      { path: "notification", component: NotificationComponent },

      {
        path: "manage-software/:software",
        component: SpecificSoftwareComponent,
        children: [
          { path: ":id", component: DialogboxComponent },
          { path: ":id/:edit", component: EditSystemComponent }
        ]
      },

      { path: "manage-software", component: SoftwareComponent },

      {
        path: "manage-hardware/:hardware",
        component: SpecificHardwareComponent,
        children: [
          { path: ":id", component: DialogboxComponent },
          { path: ":id/:edit", component: EditSystemComponent }
        ]
      },

      { path: "manage-hardware", component: HardwareComponent },

      {
        path: "repairs",
        component: RepairsComponent,
        children: [
          { path: ":id", component: DialogboxComponent },
          { path: ":id/:edit", component: EditSystemComponent }
        ]
      },

      {
        path: "not-in-use",
        component: NotInUseComponent,
        children: [
          { path: ":id", component: DialogboxComponent },
          { path: ":id/:edit", component: EditSystemComponent }
        ]
      },

      {
        path: "user",
        component: UserComponent,
        children: [
          { path: ":id", component: UserInfrmComponent },
          { path: ":id/:edit", component: UserEditComponent }
        ]
      },

      { path: "user", component: UserComponent },
    ]
  },

  // { path: '**', component: PageNotFoundComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
