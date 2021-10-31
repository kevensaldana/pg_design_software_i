import Result from "./result";
import ValueObject from "./value_object";

interface PhoneNotificationProps {
  value: string;
}
const PHONE_NUMBER_ES_REGEX = /^34(?:6[0-9]|7[1-9])[0-9]{7}$/;

export default class PhoneNotification extends ValueObject<PhoneNotificationProps> {
  get value(): string {
    return this.props.value;
  }
  private constructor(props: PhoneNotificationProps) {
    super(props);
  }

  private static validate(value: string) {
    return !!value && PHONE_NUMBER_ES_REGEX.test(value);
  }

  public static create(value: string): Result<PhoneNotification> {
    if (PhoneNotification.validate(value)) {
      return Result.ok<PhoneNotification>(
        new PhoneNotification({
          value,
        })
      );
    }
    return Result.fail<PhoneNotification>("Invalid Phone");
  }
}
