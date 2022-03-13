import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorNotesComponent } from './color-notes/color-notes.component';
import { TablesComponent } from './tables/tables.component';
import { MiroConfigComponent } from './miro-config/miro-config.component';
import { DistanceBetweenNotesComponent } from './distance-between-notes/distance-between-notes.component';
import { ToHTMLComponent } from './to-html/to-html.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorNotesComponent,
    TablesComponent,
    MiroConfigComponent,
    DistanceBetweenNotesComponent,
    ToHTMLComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }