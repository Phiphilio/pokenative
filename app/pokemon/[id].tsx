import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ThemedText } from "@/components/ThemedText";
import { Row } from "@/components/row";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { colors } from "@/constant/colors";

export default function Pokemon() {
  const params = useLocalSearchParams();
  const { data, isLoading } = useFetchQuery("/pokemon/[id]", { id: params.id });
  /** je récupère isLoading pour gérer le fait que data soit d'abord une promesse,
   * ça me permet d'éviter les erreurs où j'essaie d'accéder à des propriétés qui n'existent pas encore
   *
   *  */
  const colory = useThemeColors();
  const pokemonColors = colors.pokeType;
  const typeName =
    data !== undefined ? data.types.map((t) => t.type)[0].name : {}; // si data === undefine, on renvoie un objet vide, sinon on récupère la valeur du nom

  console.log(typeName);
  const router = useRouter();

  const retourArriere = () => {
    router.back();
  };
  /**
   * le hook useLocalSearchParams() me permet de récupérer uniquement l'id
   * dans l'url
   */
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: isLoading
            ? colory.identity
            : pokemonColors[typeName],
        },
      ]}
    >
      <Image
        source={require("@/assets/images/icon/pokeball.png")}
        style={[styles.pokeball, { tintColor: "rgba(255, 255, 255, 0.2)" }]}
      />
      <Row style={styles.header} gap={8}>
        <Pressable
          android_ripple={{ color: colory.identity, foreground: true }}
          onPress={retourArriere}
        >
          <Image
            source={require("@/assets/images/icon/arrow_back.png")}
            style={[styles.arrowBack, { tintColor: colory.grayWhite }]}
          />
        </Pressable>
        <ThemedText
          variant="headline"
          style={[styles.pokemonName, { color: colory.grayWhite }]}
        >
          {params.name}
        </ThemedText>
        <ThemedText variant="subtitle2" style={{ color: colory.grayWhite }}>
          #{params.id.padStart(3, "0")}
        </ThemedText>
      </Row>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /**
     * en react-native, la propriété flex affecte aussi la position de l'élément sur lequel elle est appliqué, pas juste les enfants
     * d'où la confusion
     */
  },
  header: {
    padding: 20,
    paddingBottom: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowBack: {
    height: 32,
    width: 32,
  },
  pokemonName: {
    paddingRight: 150,
  },
  pokeball: {
    position: "absolute",
    right: 1,
    width: 208,
    height: 208,
  },
});
