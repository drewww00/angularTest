import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivComponentComponent } from './components/div-component/div-component.component';
import { ModifyDivComponentComponent } from './components/modify-div-component/modify-div-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DivComponentComponent,
    ModifyDivComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
