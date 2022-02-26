import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorNotesComponent } from './color-notes/color-notes.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorNotesComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, ColorNotesComponent, TablesComponent]
})
export class AppModule { }