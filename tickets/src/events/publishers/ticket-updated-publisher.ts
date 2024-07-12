import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@vitaliy1yeremenkoticktes/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
