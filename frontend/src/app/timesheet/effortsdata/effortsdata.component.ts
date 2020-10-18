import { Component, OnInit, ViewChild,  ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Timesheet } from 'src/app/model/timesheet';
import { UsersService } from 'src/app/service/users.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-effortsdata',
  templateUrl: './effortsdata.component.html',
  styleUrls: ['./effortsdata.component.css']
})
export class EffortsdataComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;

  timedata$: Subscription;
  displayedCategories: string[] = ["Date", "Time", "Efforts"];
  timedata: any;
  categoriesDataSource;

  constructor(
    private userService: UsersService
  ) { }


  ngOnInit(): void {
    console.log('effortsdata loaded');
    this.timedata$  = this.userService.getTime().subscribe( res => {
      console.log(res);
      this.timedata = res;
      this.categoriesDataSource = new MatTableDataSource(this.timedata.slice().reverse());
      this.categoriesDataSource.paginator = this.paginator
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.categoriesDataSource.filter = filterValue.trim().toLowerCase();
  }

  public convetToPDF()
{
var data = document.getElementById('contentToConvert');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 308;
var pageHeight = 395;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;

const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('new-file.pdf'); // Generated PDF
});
}
}
