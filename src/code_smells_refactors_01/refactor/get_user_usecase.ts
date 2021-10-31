import { UnexpectedError } from "./unexpected_error";
import { IDataUser } from "./definitions";
import PhoneNotification from "./phone_notification";
import Result from "./result";

type Response = Result<IDataUser> | UnexpectedError;
export default class GetUserUseCase {
  execute(idUser: string): Response {
    // logic with idUser
    const phoneDataValidation = PhoneNotification.create("34612128110");
    if (phoneDataValidation.isSuccess) {
      return Result.ok<IDataUser>({
        channel: "channel",
        phone: phoneDataValidation.getValue(),
      });
    }
    return Result.fail(
      new UnexpectedError(phoneDataValidation.errorValue())
    ) as Response;
  }
}
