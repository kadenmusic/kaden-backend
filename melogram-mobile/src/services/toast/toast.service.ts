import { Alert } from "react-native";

// TODO: Create an error service that logs, sends to Sentry, etc.
export const showErrorToast = (error: any) => {
  console.error(error);
  let err = !!error.message ? error.message : JSON.stringify(error);

  Alert.alert("Error", err, [
    {
      text: "OK",
      onPress: () => {
        // do something
      },
    },
  ]);
};
