import Result from "./result";
import { UseCaseError } from "./usecase_error";

export class UnexpectedError extends Result<UseCaseError> {
  public constructor(err: any) {
    super(false, {
      message: `An unexpected error occurred.`,
      error: err,
    } as UseCaseError);
  }
}
