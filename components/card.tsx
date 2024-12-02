import { View, ViewProps, ViewStyle } from "react-native";
import { Shadow } from "@/constant/shadow";
import { useThemeColors } from "@/hooks/useThemeColors";

type props = ViewProps;

export function Card({ style, ...rest }: props) {
  const colors = useThemeColors();
  return (
    <View
      style={[style, styles, { backgroundColor: colors.grayWhite }]}
      {...rest}
    />
  );
}

const styles = {
  borderRadius: 8,
  ...Shadow.dp2,
} satisfies ViewStyle; // permet de mettre en place la validation des propriétés
