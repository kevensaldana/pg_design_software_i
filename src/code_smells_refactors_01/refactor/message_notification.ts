import Result from "./result";
import ValueObject from "./value_object";

interface MessageNotificationProps {
  value: string;
}

export default class MessageNotification extends ValueObject<MessageNotificationProps> {
  get value(): string {
    return this.props.value;
  }
  private constructor(props: MessageNotificationProps) {
    super(props);
  }

  private static validate(value: string) {
    return !!value && value.length > 5 && value.length < 100;
  }

  public static create(value: string): Result<MessageNotification> {
    if (MessageNotification.validate(value)) {
      return Result.ok<MessageNotification>(
        new MessageNotification({
          value,
        })
      );
    }
    return Result.fail<MessageNotification>("Invalid Message");
  }
}
