import { StyleSheet, View, ViewProps } from "react-native";
import { ThemedText } from "./ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";

type props = ViewProps & {
  background: string;
};
export function TypeBadge({ background, ...rest }: props) {
  const colors = useThemeColors();
  return (
    <View style={[styles.badge, { backgroundColor: background }]} {...rest}>
      <ThemedText variant="subtitle3" color="grayWhite" />
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    height: 20,
    width: 46,
    borderRadius: 20,
  },
});
