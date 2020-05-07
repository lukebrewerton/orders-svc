import { Publisher, OrderCreatedEvent, Subjects } from '@lb-dev-ticket/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
