import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ClientResolverService} from './core/services/client-resolver.service';
import {CoreModule} from './core/core.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { MatSpinner } from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {LoadingInterceptor } from './core/services/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  entryComponents: [MatSpinner],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    GridModule,
    ButtonsModule,
    DialogsModule,
    LabelModule,
    InputsModule,
    DateInputsModule
  ],
  providers: [
    ClientResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
