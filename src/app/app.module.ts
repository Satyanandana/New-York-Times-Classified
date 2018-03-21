import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { RealestateComponent } from './tabs/realestate/realestate.component';
import { JobsComponent } from './tabs/jobs/jobs.component';
import { AutosComponent } from './tabs/autos/autos.component';
import { AllclassifiedsComponent } from './tabs/allclassifieds/allclassifieds.component';


@NgModule({
  declarations: [
    AppComponent,
    RealestateComponent,
    JobsComponent,
    AutosComponent,
    AllclassifiedsComponent
  ],
  imports: [
    BrowserModule , BrowserAnimationsModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
