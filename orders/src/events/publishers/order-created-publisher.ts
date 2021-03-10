import { Publisher, OrderCreateEvent, Subjects } from '@jdticket/common';

export class OrderCreatedPublisher extends Publisher<OrderCreateEvent> {
    readonly subject = Subjects.OrderCreated;
}