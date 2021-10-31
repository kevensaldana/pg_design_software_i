import { INotification } from "./definitions";
import message_notification from "./message_notification";
import NotifySlack from "./notify_slack";

export default class NotifySlackAdapter implements INotification {
  private notifySlack: NotifySlack;
  private channel: string;
  constructor(notifySlack: NotifySlack, channel: string) {
    this.notifySlack = notifySlack;
    this.channel = channel;
  }
  notify(message: message_notification): void {
    this.notifySlack.notify(message, this.channel);
  }
}
