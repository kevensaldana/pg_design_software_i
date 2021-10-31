import { INotification } from "./definitions";
import message_notification from "./message_notification";
import NotifySMS from "./notify_sms";
import PhoneNotification from "./phone_notification";

export default class NotifySMSAdapter implements INotification {
  private notifySMS: NotifySMS;
  private phone: PhoneNotification;
  constructor(notifySMS: NotifySMS, phone: PhoneNotification) {
    this.notifySMS = notifySMS;
    this.phone = phone;
  }
  notify(message: message_notification): void {
    this.notifySMS.notify(
      message,
      this.phone
    );
  }
}
