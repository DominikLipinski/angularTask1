import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { warningAlertComponent } from './warn/warnAlert.component';
import { successAlertComponent } from './success/successAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    warningAlertComponent,
    successAlertComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
