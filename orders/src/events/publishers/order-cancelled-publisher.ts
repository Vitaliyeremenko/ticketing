import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@vitaliy1yeremenkoticktes/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
