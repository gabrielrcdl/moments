import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ErroComponent } from './components/pages/not-existent route/erro.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MomentFormComponent } from './components/moment-form/moment-form.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MomentUniqueComponent } from './components/pages/moment-unique/moment-unique.component';

// Angular Material
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { EditMomentUniqueComponent } from './components/pages/edit-moment-unique/edit-moment-unique.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ErroComponent,
    NewMomentComponent,
    MomentFormComponent,
    MessagesComponent,
    MomentUniqueComponent,
    EditMomentUniqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
