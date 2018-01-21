import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BgButtonComponent } from './bg-button/bg-button.component';
import { SysTimeComponent } from './sys-time/sys-time.component';

@NgModule({
  declarations: [
    AppComponent,
    BgButtonComponent,
    SysTimeComponent
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
