import { StyleSheet, View, ViewProps } from "react-native";

/**
 *  le but du composant Row est de me permettre de savoir quand un élément est affiché en forme de ligne, mais surtout,
 * de me permettre de rapidement aliigner des éléments
 */
type pros = ViewProps & {
  gap?: number;
};
export function Row({ style, gap, ...rest }: pros) {
  return <View style={[, styles.row, style, { gap: gap }]} {...rest} />;
}

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
});
