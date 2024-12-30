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

export default function Pokemon() {
  const params = useLocalSearchParams();
  const { data } = useFetchQuery("/pokemon/[id]", { id: params.id });
  const colors = useThemeColors();

  console.log(data);
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
      style={[styles.container, { backgroundColor: colors.identity }]}
    >
      <Row style={styles.header} gap={8}>
        <Pressable
          android_ripple={{ color: colors.identity, foreground: true }}
          onPress={retourArriere}
        >
          <Image
            source={require("@/assets/images/icon/arrow_back.png")}
            style={[styles.arrowBack, { tintColor: colors.grayWhite }]}
          />
        </Pressable>
        <ThemedText
          variant="headline"
          style={[styles.pokemonName, { color: colors.grayWhite }]}
        >
          {params.name}
        </ThemedText>
        <ThemedText variant="subtitle2" style={{ color: colors.grayWhite }}>
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
});
