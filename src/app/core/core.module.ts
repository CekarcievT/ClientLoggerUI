import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from './data-services/client.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    ClientService]
})
export class CoreModule { }
