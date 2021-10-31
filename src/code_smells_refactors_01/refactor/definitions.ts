import MessageNotification from "./message_notification";
import PhoneNotification from "./phone_notification";

export interface INotification {
  notify: (message: MessageNotification) => void;
}
export interface IDataUser {
  channel: string;
  phone: PhoneNotification;
}
