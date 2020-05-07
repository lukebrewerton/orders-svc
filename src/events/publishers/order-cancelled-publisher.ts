import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@lb-dev-ticket/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
