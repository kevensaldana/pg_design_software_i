# code_smells_refactors_01

## Install
- npm install
- npm run test

It will run two tests: 'Notify User UseCase' and 'Notify User Refactor UseCase'

## Code Smells

#### notification_service.ts

-  **Bloaters**: Large Class
-  **Dispensables**: Code Duplication and Comments
-  **Object-Orientation Abusers**: Switch Statements

#### notify_user_usecase.ts

- **Bloaters**: Large Class

## Refactor

1. Extract an interface for each notification type (definitions.ts).
2. Implement an adapter pattern for each notification type to support the interface (notify_slack_adapter.ts, notify_sms_adapter.ts).
3. Extract validations logic from common parameters in two value objects message_notification.ts and phone_notification.ts.
4. Create a new use case get_user_usecase.ts from notify_user_usecase.ts.
4. Loop array of notification providers to execute sending, in order to avoid switch statement and executing individually in notify_user_usecase.ts.