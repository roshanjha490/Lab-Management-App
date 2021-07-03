import { DialogboxComponent } from './admin/manage-computers/dialogbox/dialogbox.component';
import { AdminModule } from './admin/admin.module';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Authentication/auth-guard.service';
import { AuthService } from './Authentication/auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  entryComponents: [DialogboxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AdminModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
