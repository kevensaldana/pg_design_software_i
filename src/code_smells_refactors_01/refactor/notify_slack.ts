import MessageNotification from "./message_notification";

export default class NotifySlack {
  notify(message: MessageNotification, channel: string) {
    console.log("sending by Slack", message.value, channel);
  }
}
