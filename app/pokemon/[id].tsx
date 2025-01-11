import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ThemedText } from "@/components/ThemedText";
import { Row } from "@/components/row";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { colors } from "@/constant/colors";
import { Card } from "@/components/card";
import { PokeBallImage } from "@/components/pokemon/pokeballImage";
import { getPokemonArtwork, getStringSliced } from "@/functions/pokemon";
import { TypeBadge } from "@/components/typeBadge";
import { PokemonSpec } from "@/components/pokemonSpec";
import { PokemonStats } from "@/components/pokemonStats";

export default function Pokemon() {
  const params = useLocalSearchParams();
  const { data, isLoading } = useFetchQuery("/pokemon/[id]", { id: params.id });
  /** je récupère isLoading pour gérer le fait que data soit d'abord une promesse,
   * ça me permet d'éviter les erreurs où j'essaie d'accéder à des propriétés qui n'existent pas encore
   *
   *  */
  const colory = useThemeColors();
  const pokemonColors = colors.pokeType;

  const { width, height } = Dimensions.get("window"); //je récupère les dimmensions de l'écran
  const gap = height > 640 ? 15 : 3;
  const pokemonTypes =
    data !== undefined ? data.types.map((t) => t.type.name) : {}; // si data === undefine, on renvoie un objet vide, sinon on récupère la valeur du nom
  const pokemonFirstType = pokemonTypes[0] as keyof typeof pokemonColors;

  const pokemonBaseStats =
    data?.stats.flatMap((s) => {
      return { name: s.stat.name, value: s.base_stat };
    }) ?? [];

  // console.log(pokemonBaseStats);
  //console.log("longuer de data.w", data.weight.toString().length);
  const router = useRouter();

  const retourArriere = () => {
    router.back();
  };
  /**
   * le hook useLocalSearchParams() me permet de récupérer uniquement l'id
   * dans l'url
   */
  return (
    <>
      {isLoading ? (
        <SafeAreaView
          style={[styles.waitingScreen, { backgroundColor: colory.identity }]}
        >
          <PokeBallImage
            style={[
              styles.waitingScreenPokeball,
              { tintColor: "rgba(255, 255, 255, 0.7)" },
            ]}
          />
          <ActivityIndicator size="large" color="white" />
        </SafeAreaView>
      ) : (
        <SafeAreaView
          style={[
            styles.container,
            {
              backgroundColor: isLoading
                ? colory.identity
                : pokemonColors[pokemonFirstType], // prends la même structure qu'une propriété de l'objet pokemonColors
            },
          ]}
        >
          <PokeBallImage
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

            <ThemedText
              variant="subtitle2"
              style={[styles.pokemonNumber, { color: colory.grayWhite }]}
            >
              #{params.id.toString().padStart(3, "0")}
            </ThemedText>
          </Row>

          <Card style={styles.card}>
            <Row style={styles.badgeType} gap={16}>
              {pokemonTypes.map((p) => (
                <TypeBadge
                  key={p}
                  background={pokemonColors[p as keyof typeof pokemonColors]}
                  text={p}
                />
              ))}
            </Row>
            <ThemedText
              variant="subtitle1"
              style={{ color: pokemonColors[pokemonFirstType] }}
            >
              About
            </ThemedText>
            <Row>
              <PokemonSpec
                title={getStringSliced(data.weight.toString()) + " kg"}
                description="Weight"
                image={require("@/assets/images/weight.png")}
              />
              <PokemonSpec
                title={getStringSliced(data.height.toString()) + " m"}
                description="Height"
                image={require("@/assets/images/height.png")}
                style={[
                  styles.pokemonSpecCenter,
                  { borderColor: colory.grayLight },
                ]}
              />
              <PokemonSpec
                title={data?.moves
                  .slice(0, 2)
                  .map((m) => m.move.name)
                  .join("\n")}
                description="Moves"
              />
            </Row>
            <ThemedText variant="body3" color="grayDark" style={styles.bio}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua.
            </ThemedText>
            <ThemedText
              variant="subtitle1"
              style={{ color: pokemonColors[pokemonFirstType] }}
            >
              Base Stats
            </ThemedText>
            <View style={{ flex: 1, alignItems: "center", gap: gap }}>
              {pokemonBaseStats.map((poke) => (
                <PokemonStats
                  key={poke.name}
                  name={poke.name}
                  stats={poke.value}
                  color={pokemonColors[pokemonFirstType]}
                />
              ))}
            </View>
          </Card>
          <View style={styles.artwork}>
            <Image
              source={{
                uri: getPokemonArtwork(params.id),
              }}
              style={styles.pokemonArtwork}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  waitingScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  waitingScreenPokeball: {
    position: "absolute",
    width: 208,
    height: 208,
  },
  container: {
    flex: 1,
    /**
     * en react-native, la propriété flex affecte aussi la position de l'élément sur lequel elle est appliqué, pas juste les enfants
     * d'où la confusion
     */
  },
  header: {
    padding: 15,
    paddingBottom: 24,
  },
  arrowBack: {
    height: 32,
    width: 32,
  },
  pokemonName: {
    //  paddingRight: 150,
    width: 232,
    height: 32,
  },
  pokemonNumber: {
    // marginRight: 100,
  },
  pokeball: {
    position: "absolute",
    right: 1,
    width: 208,
    height: 208,
  },
  artwork: {
    flex: 1,
    position: "absolute",
    top: 75,
    left: 100,
  },
  pokemonArtwork: {
    alignItems: "center",
    width: 200,
    height: 200,
  },
  badgeType: {
    //justifyContent: "center",
    marginTop: 50,
  },
  card: {
    flex: 1,
    marginTop: 150,
    margin: 4,
    gap: 10,
    alignItems: "center",
  },
  pokemonSpecCenter: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    //padding: 15,
  },
  bio: {
    marginTop: 15,
    //marginBottom: 5,
    width: 312,
    height: 60,
    paddingBottom: 0,
  },
});
