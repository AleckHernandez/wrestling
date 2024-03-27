import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './Components/main-menu/main-menu.component';
import { CreateWrestlerComponent } from './Components/create-wrestler/create-wrestler.component';
import { ViewWrestlerComponent } from './Components/view-wrestler/view-wrestler.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CreateWrestlerComponent,
    ViewWrestlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
