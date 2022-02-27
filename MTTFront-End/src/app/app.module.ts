import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }