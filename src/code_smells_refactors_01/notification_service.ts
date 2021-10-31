export default class NotificationService {
  private channel: string;
  private phoneUser: string;

  constructor(channel: string, phoneUser: string) {
    this.channel = channel;
    this.phoneUser = phoneUser;
  }

  // send message to user's messenger
  private sendSlack(message: string): void {
    if (!!this.channel && message.length > 5 && message.length < 100) {
      console.log("sending by Slack", message, this.channel);
    }
  }

  // send message to user's mobile
  private sendSMS(message: string): void {
    if (!!this.phoneUser && message.length > 5 && message.length < 100) {
      // only spain mobiles
      if (/^34(?:6[0-9]|7[1-9])[0-9]{7}$/.test(this.phoneUser)) {
        console.log("sending by SMS", message, this.phoneUser);
      }
    }
  }

  public sendByOne(type: string, message: string) {
    switch (type) {
      case "slack":
        this.sendSlack(message);
        break;
      case "sms":
        this.sendSMS(message);
        break;
      default:
        break;
    }
  }
}
