import MessageNotification from "./message_notification";
import PhoneNotification from "./phone_notification";

export default class NotifySMS {
  notify(message: MessageNotification, phone: PhoneNotification) {
    console.log("sending by SMS", message.value, phone.value);
  }
}
