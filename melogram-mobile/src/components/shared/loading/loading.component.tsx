import { View } from "native-base";
import { useAppStore } from "../../../state/app-store";
import { loadingComponentStyle } from "./loading.component.style";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";

export default function LoadingComponent() {
  const isLoading = useAppStore((state) => state.loading);
  return isLoading ? (
    <View style={loadingComponentStyle.backdrop}>
      <MaterialIndicator color={loadingComponentStyle.spinner.color} />
    </View>
  ) : null;
}
