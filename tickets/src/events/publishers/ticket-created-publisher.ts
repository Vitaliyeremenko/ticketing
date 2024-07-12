import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@vitaliy1yeremenkoticktes/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
