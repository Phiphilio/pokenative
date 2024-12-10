import { Image, StyleSheet, ViewStyle, View, Pressable } from "react-native";
import { ThemedText } from "../ThemedText";
import { Card } from "../card";
import { useThemeColors } from "@/hooks/useThemeColors";

type props = {
  style?: ViewStyle; // correspond à toutes les valeurs que la propriété style peut recevoir.
  id: number;
  name: string;
};
export function PokemonCard({ id, name, style }: props) {
  const colors = useThemeColors();
  return (
    <Pressable
      android_ripple={{ color: colors.identity, foreground: true }}
      style={
        style /**le style qui est transmis au composaant pokemoncard est maintenant ici pour que les tailles restent les mêmes */
      }
    >
      <Card style={styles.card}>
        <View
          style={[styles.boxShadow, { backgroundColor: colors.grayBackground }]}
        />
        {/** le fait de mettre la vue correspondant à l'effet de gris au début de la card fait que tous les autres éléments de la card s'affichent par
      dessus. pas besoin de jouer avec l'opacité */}
        <ThemedText
          style={styles.textNumber}
          variant="caption"
          color="grayMedium"
        >
          #{id.toString().padStart(3, "0")}
        </ThemedText>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
          width={72}
          height={72}
        />
        <ThemedText>{name}</ThemedText>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    alignItems: "center",
    padding: 4,
  },

  textNumber: {
    alignSelf: "flex-end",
  },
  boxShadow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 24,
    paddingBottom: 4,
    height: 44,
    borderRadius: 7,
  },
});
