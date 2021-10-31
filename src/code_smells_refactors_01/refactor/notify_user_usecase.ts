import { UnexpectedError } from "./unexpected_error";
import { IDataUser, INotification } from "./definitions";
import GetUserUseCase from "./get_user_usecase";
import MessageNotification from "./message_notification";
import NotifySlack from "./notify_slack";
import NotifySlackAdapter from "./notify_slack_adapter";
import NotifySMS from "./notify_sms";
import NotifySMSAdapter from "./notify_sms_adapter";
import Result from "./result";

type Response = Result<void> | UnexpectedError;

export default class NotifyUserUseCase {
  private getUserUseCase: GetUserUseCase;
  constructor(getUserUseCase: GetUserUseCase) {
    this.getUserUseCase = getUserUseCase;
  }
  execute(message: string, idUser: string): Response {
    const dataResultUser = this.getUserUseCase.execute(idUser);
    const messageValidation = MessageNotification.create(message);
    if (messageValidation.isFailure) {
      return Result.fail(messageValidation.errorValue()) as Response;
    }
    if (dataResultUser.isFailure) {
      return Result.fail(dataResultUser.errorValue()) as Response;
    }

    const dataUser = dataResultUser.getValue();
    const providers: INotification[] = [
      new NotifySlackAdapter(
        new NotifySlack(),
        (dataUser as IDataUser).channel
      ),
      new NotifySMSAdapter(new NotifySMS(), (dataUser as IDataUser).phone),
    ];
    providers.forEach((element) => {
      element.notify(messageValidation.getValue());
    });
    return Result.ok<void>() as Response;
  }
}
