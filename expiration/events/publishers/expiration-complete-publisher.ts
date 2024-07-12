import {
  Subjects,
  Publisher,
  ExpirationCompletedEvent,
} from '@vitaliy1yeremenkoticktes/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompletedEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
