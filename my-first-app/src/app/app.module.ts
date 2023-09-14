import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarnavComponent } from './nav-barnav/nav-barnav.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BindingComponent } from './pages/binding/binding.component';
import { ParentComponent } from './pages/binding/parent/parent.component';
import { ChildComponent } from './pages/binding/child/child.component';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryService } from './pages/_service/in-memory.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StudentsDetailsComponent } from './pages/dashboard/students-details/students-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarnavComponent,
    DashboardComponent,
    BindingComponent,
    ParentComponent,
    ChildComponent,
    StudentsDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryService,{dataEncapsulation:false}
    // )
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryService,{dataEncapsulation:false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
