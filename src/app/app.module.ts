import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './shared/components/home/home.component';
import { notFoundComponent } from './shared/components/notfound/notfound.component';
import { SystemModule } from './system/system.model';
import { CreateSurveyComponent } from './system/create-survey/create-survey.component';
import { TakeSurveyComponent } from './system/take-survey/take-survey.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './system/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    notFoundComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CreateSurveyComponent,
    TakeSurveyComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SystemModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
