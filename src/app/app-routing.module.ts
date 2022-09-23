import { ChatComponent } from './components/chat/chat.component';
import { CharviewComponent } from './components/charview/charview.component';
import { NewcharComponent } from './components/newchar/newchar.component';
import { CharlistComponent } from './components/charlist/charlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'liste', component : CharlistComponent},
  {path : 'new', component : NewcharComponent},
  {path : 'detail/:id', component : CharviewComponent},
  {path : 'chat', component : ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
