import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ModalBackComponent } from './components/modal-back/modal-back.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BreadcrumbComponent,
    ModalDeleteComponent,
    FooterComponent,
    MessagesComponent,
    ModalBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
