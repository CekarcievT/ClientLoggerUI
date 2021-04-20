import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ClientResolverService } from 'src/app/core/services/client-resolver.service';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { AggregationViewComponent } from './aggregation-view/aggregation-view.component';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';


@NgModule({
  declarations: [ClientsComponent, AggregationViewComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    GridModule,
    ButtonsModule,
    DialogsModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    DateInputsModule,
    IndicatorsModule
  ],
  providers: [],
})
export class ClientsModule { }
