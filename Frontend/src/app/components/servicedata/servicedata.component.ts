import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorytypeService } from '../../services/categorytype.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-servicedata',
  templateUrl: './servicedata.component.html',
  styleUrls: ['./servicedata.component.css']
})
export class ServicedataComponent implements OnInit {
  @Input() public data: any;
  @Input() public servicetype: any;
  public type: any;
  public newURL: any;
  public category_details: any;
  public cost: any;
  public name: string = '';
  public address: string = '';
  public phone_number: string = '';
  public speciality: string = '';
  public distance: string = '';
  public website: string = '';


  constructor(private route: ActivatedRoute, private categorytypeService: CategorytypeService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.newURL = this.servicetype + '/' + this.data[0];
    this.fetchCategoryDetails();
    this.assignValues();
  }

  fetchCategoryDetails() {
    this.categorytypeService.getCategoryData(this.newURL).subscribe(res => {
      this.category_details = res;
      this.cost = this.category_details.Innetwork;
    });
  }

  assignValues() {
    if (this.servicetype == 'behavioralprofessionals') {
      this.name = this.data[0];
      this.address = this.data[1];
      this.phone_number = this.data[2];
      this.distance = this.data[3];
      this.speciality = this.data[4];
    }
    
    else if (this.servicetype == 'laboratories') {
      this.name = this.data[0];
      this.address = this.data[1];
      this.phone_number = this.data[2];
      this.distance = this.data[3];
      this.speciality = this.data[4];
    }

    else if (this.servicetype == 'pharmacies') {
      this.name = this.data[0];
      this.address = this.data[1];
      this.phone_number = this.data[2];
      this.distance = this.data[3];
    }

    else if (this.servicetype == 'urgentcare') {
      this.name = this.data[0];
      this.address = this.data[1];
      this.phone_number = this.data[2];
      this.distance = this.data[3];
      this.speciality = this.data[4];
    }

    else if (this.servicetype == 'hospitals') {
      this.name = this.data[0];
      this.address = this.data[1];
      this.phone_number = this.data[2];
      this.distance = this.data[3];
      this.speciality = this.data[4];
    }

    else if (this.servicetype == 'primarycareproviders') {
      this.name = this.data[0];
      this.address = this.data[1];
      this.phone_number = this.data[2];
      this.distance = this.data[3];
      this.speciality = this.data[4];
    }

    else if (this.servicetype == 'pharmacies') {
      this.name = this.data[0];
      this.address = this.data[1];
      this.phone_number = this.data[2];
      this.distance = this.data[3];
    }
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }

}
