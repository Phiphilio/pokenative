import { Image, StyleSheet, ViewStyle, View, Pressable } from "react-native";
import { ThemedText } from "../ThemedText";
import { Card } from "../card";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Link, useRouter } from "expo-router";
import { getPokemonArtwork } from "@/functions/pokemon";

type props = {
  stylos?: ViewStyle; // correspond à toutes les valeurs que la propriété style peut recevoir.
  id: number;
  name: string;
};
export function PokemonCard({ id, name, stylos }: props) {
  const colors = useThemeColors();
  const router = useRouter();

  const lienDynamique = () => {
    router.push({
      pathname: "/pokemon/[id]",
      params: { id: id, name: name },
    });
  };
  /**
   * j'ai remplacé le composant Link par le hook useRouter qui me permet de gérer la navigation de façon plus programmatique
   * maintenat je peux naviguer juste en  remplissant des condition ou des actions plus spécifiques.
   */
  return (
    <Pressable
      android_ripple={{ color: colors.identity, foreground: true }}
      style={
        stylos /**le style qui est transmis au composaant pokemoncard est maintenant ici pour que les tailles restent les mêmes */
      }
      onPress={lienDynamique}
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
            uri: getPokemonArtwork(id),
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
    position: "absolute", // determine la position par rapport aux derniers parent ayant la position relative
    bottom: 0,
    left: 0,
    right: 0,
    /**
     * les positions bottom, left, right toutes à 0 disent au code : "il faut que cette section ait exactement la même position que le parent"
     * c'est ça qui fait que c'est visible
     */
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 24,
    paddingBottom: 4,
    height: 44,
    borderRadius: 7,
  },
});
