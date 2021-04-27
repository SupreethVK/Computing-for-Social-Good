import { Component, OnInit } from '@angular/core';
import { TerminologiesService } from '../../services/terminologies.service';

@Component({
  selector: 'app-terminologies',
  templateUrl: './terminologies.component.html',
  styleUrls: ['./terminologies.component.css']
})
export class TerminologiesComponent implements OnInit {
  public terminologies: any;
  public hoveredElement:any;
  public id: any;


  constructor(private terminologiesService: TerminologiesService) { }

  ngOnInit(): void {
    this.fetchTerminologies();
  }

  fetchTerminologies() {
    this.terminologiesService.getTerminologies().subscribe(res => {
      this.terminologies = res;
      this.terminologies = this.terminologies.data;
    });
  }

  toggleHover(id: any) {
    this.hoveredElement = id
  }
  
  removeHover() {
    this.hoveredElement = null;
  }
  

}
