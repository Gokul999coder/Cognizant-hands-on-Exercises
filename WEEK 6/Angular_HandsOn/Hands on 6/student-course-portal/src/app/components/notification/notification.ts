import { Component } from '@angular/core';
import { Notification } from '../../services/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.html',

  providers: [Notification]

  // Creates a NEW Notification
  // instance only for this component
})
export class NotificationComponent {

  constructor(
    public notificationService: Notification
  ) {}

}