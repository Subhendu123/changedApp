import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { MyListComponent } from './item-display/my-list/my-list.component';
import { UserListInfoComponent } from './user-list-info/user-list-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DisplayComponentComponent,
    MyListComponent,
    UserListInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
