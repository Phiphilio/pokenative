import { Image, StyleSheet, View, ViewProps } from "react-native";
import { Row } from "./row";
import { ThemedText } from "./ThemedText";

type props = ViewProps & {
  title: string;
  description: string;
  image?: string;
};
export function PokemonSpec({
  title,
  description,
  image,
  style,
  ...rest
}: props) {
  return (
    <View style={[styles.alignement, style]}>
      <Row gap={8}>
        {image && <Image source={image} />}
        <ThemedText> {title}</ThemedText>
      </Row>
      <ThemedText variant="caption" color="grayMedium">
        {description}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  alignement: {
    alignItems: "center",
    padding: 5,
  },
});
