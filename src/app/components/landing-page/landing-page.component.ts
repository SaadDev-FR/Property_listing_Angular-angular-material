import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListingService } from '../../../services/listing.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  showTableView = false;
  showCardView = true;
  product_id?: number;

  dataSource!: MatTableDataSource<any>;
  tableColumns: string[] = ['Title', 'Address', 'Beds', 'Bath', 'Area', 'Type', 'isCommercial', 'Price'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.listingService.getListings().subscribe((listings) => {
      // console.log("listing is",listings);
      this.dataSource = new MatTableDataSource(listings);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    // toggle views
    this.listingService.viewToggle$.subscribe((showView: boolean) => {
      this.showTableView = showView;
      this.showCardView = !showView;
    });
  }

  // pick_product_id(id:number)
  // {
  //   console.log("called");

  //   this.product_id = id;
  //  console.log("produt id is",this.product_id);

  // }
}
