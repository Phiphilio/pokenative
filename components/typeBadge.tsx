import { StyleSheet, View, ViewProps, Text } from "react-native";
import { ThemedText } from "./ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { colors } from "@/constant/colors";

type props = ViewProps & {
  background: string;
  text: string;
};
export function TypeBadge({ background, text, ...rest }: props) {
  return (
    <View style={[styles.badge, { backgroundColor: background }]}>
      <ThemedText variant="subtitle3" color="grayWhite" style={styles.text}>
        {text}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    width: 46,
    borderRadius: 10,
  },
  text: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
