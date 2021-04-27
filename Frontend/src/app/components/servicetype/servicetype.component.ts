import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorytypeService } from '../../services/categorytype.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicedataComponent } from '../servicedata/servicedata.component';
import { } from '@google/maps';
declare var $: any;

@Component({
  selector: 'app-servicetype',
  templateUrl: './servicetype.component.html',
  styleUrls: ['./servicetype.component.css']
})
export class ServicetypeComponent implements OnInit {
  public categoryurl: any;
  public categorydata: any; 
  lat = 34.021488190;
  lng = -118.286781311;
  public latitude: any;
  public longitude: any;

  constructor(private route: ActivatedRoute, private categorytypeService: CategorytypeService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.categoryurl = this.route.snapshot.paramMap.get('servicetype');
    this.fetchCategoryData();
  }

  fetchCategoryData() {
    this.categorytypeService.getCategory(this.categoryurl).subscribe(res => {
      this.categorydata = res;
      this.categorydata = this.categorydata.data;
    });
  }

  onMouseOver(infoWindow: any, gm: any) {
    if (gm.lastOpen != null) {
        gm.lastOpen.close();
    }
    gm.lastOpen = infoWindow;
    infoWindow.open();
  }

  openModal (data: any) {
    const modalRef = this.modalService.open(ServicedataComponent);
    modalRef.componentInstance.data = data;
    modalRef.componentInstance.servicetype = this.categoryurl;
  }

}
