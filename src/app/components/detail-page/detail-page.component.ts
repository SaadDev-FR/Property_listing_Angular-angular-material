import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from 'src/services/listing.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  listing: any;

  constructor(
    private route: ActivatedRoute,
    private listingService: ListingService
  ) { }

  ngOnInit() {
    const listingId = Number(this.route.snapshot.paramMap.get('id'));
    this.listingService.getListingById(listingId).subscribe((listing) => {
      this.listing = listing;
    });
  }

}
