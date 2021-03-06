import { Subjects, Publisher, OrderCancelledEvent } from '@jdticket/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject =  Subjects.OrderCancelled;
}