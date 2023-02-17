import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PluginsModule} from "tapp-plugins";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PluginsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
