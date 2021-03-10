import { Publisher, Subjects, TicketCreatedEvent } from '@jdticket/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
   
}

