import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcharComponent } from './components/newchar/newchar.component';
import { CharviewComponent } from './components/charview/charview.component';
import { CharlistComponent } from './components/charlist/charlist.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { ChatComponent } from './components/chat/chat.component';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NewcharComponent,
    CharviewComponent,
    CharlistComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    BrowserAnimationsModule
  ],
  providers: [{provide : MessageService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
