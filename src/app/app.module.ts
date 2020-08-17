import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestmoniesComponent } from './testmonies/testmonies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent, data:{animation: 'HomePage'}},
      { path: 'about', component: AboutComponent, data:{animation: 'AboutPage'}},
      { path: 'projects', component: ProjectsComponent , data:{animation: 'ProjectsPage'}},
      { path: 'testmonials', component: TestmoniesComponent , data:{animation: 'TestmoniesPage'}},
    ])
  ],

  declarations: [ 
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    TestmoniesComponent
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
