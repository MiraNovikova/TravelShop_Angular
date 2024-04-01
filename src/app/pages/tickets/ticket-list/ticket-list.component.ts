import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BlocksStyleDirective } from 'src/app/derective/blocks-style.directive';
import { ITour } from 'src/app/modales/tours';
import { TicketService } from 'src/app/services/tickets/ticket.service';
import { TiсketsStorageService } from 'src/app/services/tiсkets-storage/tiсkets-storage.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  tickets: ITour[];
  ticketCopy: ITour[] = [];
  filterText: string = '';
 
  
  
  @ViewChild('tourWrap', {read: BlocksStyleDirective}) blockDirective: BlocksStyleDirective;

  @ViewChild('tourWrap') tourWrap: ElementRef;


  constructor(private ticketService : TicketService,
              private router : Router,
              private ticketStorage : TiсketsStorageService) { }
          

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(
      (data : ITour[]) => {
        this.tickets = data;
        if (Array.isArray(data)) {
          this.ticketCopy = [...data];
        }
       
        this.ticketStorage.setStorage(data);
      }
    )
    }

    //поиск 
    searchTour(): void {
     
      if (!this.filterText) {
        this.tickets = [...this.ticketCopy];
      } else {
        this.tickets = this.ticketCopy.filter((tour) => {
          return tour.name.toLowerCase().includes(this.filterText.toLowerCase())
          });
      }

    }
  


  ngAfterViewInit(){
   setTimeout(() => {}
   , 0)
  }

  goToTicketInfoPage(item: ITour) {
    //this.router.navigate([`/tickets/ticket/${item.id}`])
    this.router.navigate([`/tickets/ticket`], {queryParams:{id: item.id}});
  }
    directiveRenderComplete(ev: boolean) {

      console.log('xxx', ev)
    this.tourWrap;
     this.blockDirective.initStyle(0)
}

}




