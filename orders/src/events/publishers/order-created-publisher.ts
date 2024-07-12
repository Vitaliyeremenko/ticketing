import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@vitaliy1yeremenkoticktes/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
