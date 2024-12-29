import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, View } from "react-native";

type props = {
  checked: boolean;
};

export function Radio({ checked }: props) {
  const colors = useThemeColors();
  return (
    <View style={[styles.radio, { borderColor: colors.identity }]}>
      {checked && (
        <View
          style={[styles.innerRadio, { backgroundColor: colors.identity }]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  radio: {
    width: 14,
    height: 14,
    borderRadius: 40,
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "red",
  },
  innerRadio: {
    width: 8,
    height: 8,
    borderRadius: 40,
  },
});
