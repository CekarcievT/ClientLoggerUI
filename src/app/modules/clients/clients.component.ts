import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { ClientService } from 'src/app/core/data-services/client.service';
import { AddressService } from 'src/app/core/data-services/address.service';
import { ClientFullInfo } from '../../core/models/ClientFullInfo'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };
  public gridView: GridDataResult;
  public gridItems: ClientFullInfo[] = [];

  public isEdit = false;
  public editedClient: ClientFullInfo;

  public addEditDialogOpened = false;
  public aggregationsDialogOpened = false;

  public dataAggregations:any;

  public clientForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    birthDate: new FormControl(new Date(),Validators.required),
    street: new FormControl('', Validators.required),
    postName: new FormControl('', Validators.required),
    postNumber: new FormControl('', Validators.maxLength(5)),
    country: new FormControl('', Validators.required)
  });

  public aggregationFieldsForm: FormGroup = new FormGroup({
    field: new FormControl('Country')
  })

  constructor(private route: ActivatedRoute,
              private clientService: ClientService,
              private addressService: AddressService) { }

  ngOnInit(): void {
    this.route.data.subscribe(res =>{
      this.gridItems = res.routeResolver.data;
      this.loadItems();
    });
  }
  
  onAddClient(){
    this.isEdit = false;
    this.addEditDialogOpened = true;
  }

  onEditClient(dataItem: ClientFullInfo){
    this.isEdit = true;
    this.addEditDialogOpened = true;
    this.editedClient = dataItem;
    this.clientForm.controls.firstName.setValue(dataItem.firstName);
    this.clientForm.controls.lastName.setValue(dataItem.lastName);
    this.clientForm.controls.email.setValue(dataItem.email);
    this.clientForm.controls.birthDate.setValue(new Date(dataItem.birthDate));
    this.clientForm.controls.postNumber.setValue(dataItem.postNumber);
    this.clientForm.controls.postName.setValue(dataItem.postName);
    this.clientForm.controls.street.setValue(dataItem.street);
    this.clientForm.controls.country.setValue(dataItem.country);
  }

  onDeleteClient(dataItem: ClientFullInfo){
    this.clientService.deleteClient(dataItem).subscribe(res => {
      if(res.errors.length > 0){

      } else {
        let idx = this.gridItems.findIndex(item => item.id === dataItem.id);
        this.gridItems.splice(idx,1);
        this.loadItems();
      }
    })
  }

  loadItems(){
    this.gridView = process(this.gridItems, this.gridState);
  }

  onCloseAddEditDialog(){
    this.addEditDialogOpened = false;
    this.clientForm.reset();
    this.editedClient = undefined;
  }

  onSave(){
    if(this.clientForm.valid) {
      if(this.isEdit){
        this.editedClient.firstName = this.clientForm.controls.firstName.value;
        this.editedClient.lastName = this.clientForm.controls.lastName.value;
        this.editedClient.email = this.clientForm.controls.email.value;
        this.editedClient.birthDate = this.clientForm.controls.birthDate.value;
        this.editedClient.postNumber = this.clientForm.controls.postNumber.value;
        this.editedClient.postName = this.clientForm.controls.postName.value;
        this.editedClient.street = this.clientForm.controls.street.value;
        this.editedClient.country = this.clientForm.controls.country.value;
        this.clientService.updateClient(this.editedClient).subscribe(res => {
          if(res.errors.length > 0){

          } else {
            let idx = this.gridItems.findIndex(item => item.id === this.editedClient.id);
            this.gridItems[idx] = this.editedClient;
            this.loadItems();
            this.onCloseAddEditDialog();
          }
        });
      } else {
        let newClient: ClientFullInfo = {} as any;
        newClient.firstName = this.clientForm.controls.firstName.value;
        newClient.lastName = this.clientForm.controls.lastName.value;
        newClient.email = this.clientForm.controls.email.value;
        newClient.birthDate = this.clientForm.controls.birthDate.value;
        newClient.postNumber = this.clientForm.controls.postNumber.value;
        newClient.postName = this.clientForm.controls.postName.value;
        newClient.street = this.clientForm.controls.street.value;
        newClient.country = this.clientForm.controls.country.value;
        this.clientService.createClient(newClient).subscribe(res => {
          if(res.errors.length > 0){

          } else {
            this.gridItems.push(res.data);
            this.loadItems();
            this.onCloseAddEditDialog();
          }
        });
      }
    }
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.gridState = state;
    this.loadItems();
  }

  public onShowAggregations() {
    this.aggregationsDialogOpened = true;
    this.addressService.aggregateByField(this.aggregationFieldsForm.controls.field.value).subscribe(res =>{
      this.dataAggregations = res.data;
    })
  }

  public onCloseAggregationsDialog(){
    this.aggregationsDialogOpened = false;
  }

  changeValue() {
    this.addressService.aggregateByField(this.aggregationFieldsForm.controls.field.value).subscribe(res =>{
      this.dataAggregations = res.data;
    })
  }

}
