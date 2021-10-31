import NotifyUserUseCase from "../src/code_smells_refactors_01/notify_user_usecase";
import NotifyUserUseCaseRefactor from "../src/code_smells_refactors_01/refactor/notify_user_usecase";
import GetUserUseCase from "../src/code_smells_refactors_01/refactor/get_user_usecase";

const userId = "ANVM1224345";
test("Notify User UseCase", () => {
  const useCase = new NotifyUserUseCase(userId);
  useCase.sendAll("Hello User");
});

test("Notify User Refactor UseCase", () => {
  const useCase = new NotifyUserUseCaseRefactor(new GetUserUseCase());
  const response = useCase.execute("Hello User from Refactor", userId);
  console.log(response);
});
