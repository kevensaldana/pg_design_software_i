import NotificationService from "./notification_service";

export default class NotifyUserUseCase {
  private notificationService: NotificationService;
  constructor(userId: string) {
    const data = this.getDataNotification(userId);
    this.notificationService = new NotificationService(
      data.channel,
      data.phone
    );
  }
  sendAll(message: string) {
    if (!!!message) {
      return;
    }
    this.notificationService.sendByOne("slack", message);
    this.notificationService.sendByOne("sms", message);
  }

  private getDataNotification(userId: string) {
    // logic to get data with userId
    return {
      channel: "channel",
      phone: "34612128110",
    };
  }
}
