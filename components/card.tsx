import { View, ViewProps, ViewStyle } from "react-native";

type props = ViewProps;
export function Card({ style, ...rest }: props) {
  return <View style={[style, styles]} {...rest} />;
}

const styles = {
  backgroundColor: "#FFF",
  borderRadius: 8,
} satisfies ViewStyle; // permet de mettre en place la validation des propriétés
