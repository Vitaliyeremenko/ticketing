import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@vitaliy1yeremenkoticktes/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
