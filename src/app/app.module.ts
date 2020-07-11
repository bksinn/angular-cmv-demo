import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { DeviceComponent } from './device/device.component';
import { PersonComponent } from './person/person.component';
import { PhonesComponent } from './phones/phones.component';
import { HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    DeviceComponent,
    PersonComponent,
    PhonesComponent,
    HomeComponent,
    LoginComponent,
    LeftNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
