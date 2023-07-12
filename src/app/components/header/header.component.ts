import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/services/listing.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showTableView = false;
  showCardView = false;

  constructor(private listingServ: ListingService) { }

  ngOnInit(): void {
  }

  toggleView(showView: boolean) {
    this.listingServ.toggleView(showView);
  }
}
