import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ITour} from '../../modales/tours'
import {TicketRestService} from '../rest/ticket-rest.service'

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private ticketServiceRest: TicketRestService) { }

  getTickets() : Observable<ITour[]> {
    return this.ticketServiceRest.getTickets()
  }
}
