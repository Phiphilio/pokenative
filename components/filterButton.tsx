import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, View, ViewProps, Image } from "react-native";

type props = ViewProps;
export function FilterButton({ style, ...rest }: props) {
  const colors = useThemeColors();
  return (
    <View
      style={[styles.forme, { backgroundColor: colors.grayWhite }]}
      {...rest}
    >
      <Image
        source={require("@/assets/images/sort.png")}
        style={{ width: 24, height: 24, tintColor: colors.identity }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  forme: {
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});
