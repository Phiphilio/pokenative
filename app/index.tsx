import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Card } from "@/components/card";
import { PokemonCard } from "@/components/pokemon/pokemonCard";
import { useFetchQuery, useInfiniteFetchQuery } from "@/hooks/useFetchQuery";
import { getPokemonId } from "@/functions/pokemon";
import { SearchBar } from "@/components/searchBar";
import { useState } from "react";
import { Row } from "@/components/row";
import { FilterButton } from "@/components/filterButton";

export default function Index() {
  const [text, onChangeText] = useState("");
  const colors = useThemeColors();
  const { data, isFetching, fetchNextPage } =
    useInfiniteFetchQuery("/pokemon?limit=21");
  const pokemon = data?.pages.flatMap((page) => page.results) ?? []; // si data existe tu prends la propriété résults sinon tu renvoies jsute un tableau
  //console.log(data);
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.identity }]}
    >
      <View style={styles.headerBlock}>
        <Row style={styles.header} gap={16}>
          <Image
            source={require("@/assets/images/pokeball.png")}
            style={{ height: 24, width: 24 }}
          />
          <ThemedText variant="headline" color="grayWhite">
            Pokédex
          </ThemedText>
        </Row>
        <Row gap={16}>
          <SearchBar text={text} changeText={onChangeText} />
          <FilterButton />
        </Row>
      </View>
      {
        <Card style={styles.body}>
          <FlatList
            data={pokemon} // propriété qui récupère le tableau
            numColumns={3} // propriété qui organise les éléments sous forme de colonne. Quand je l'utilise, il y aura tjrs une erreur, mais il suffit de reload l'application
            columnWrapperStyle={styles.gridGap} // propriété qui gère le style de chaque colonne. on ne peut l'utiliser que quand numColumns est au moins égale à 2
            contentContainerStyle={[styles.gridGap, styles.list]} //propriété qui gère l'espacement vertical
            ListFooterComponent={
              isFetching ? (
                <ActivityIndicator color={colors.identity} />
              ) : null /** 
              condition ternaire si isFetching existe, ça veut dire que la requete est en cours d'envoie
              dans ke cas où isFetching n'existe pas, il n'y a rien qui s'affiche.
              ActivityIndicator affiche le cercle qui charge
              */
            }
            onEndReached={() => fetchNextPage()}
            renderItem={({ item }) => (
              <PokemonCard
                id={getPokemonId(item.url)}
                name={item.name}
                stylos={{ flex: 1 / 3 }}
              />
            )}
          />
        </Card>
      }
    </SafeAreaView>
  );
}
/**
 * SafeAreaView est une vue au même titre que View sauf qu'il s'assure qu'il y ai un padding
 * au dessus et en dessous de l'application pour ne pas que des éléments externes empêchent de voir l'écran.
 * je parle d'éléments comme la barre qui montre les notifs etc
 */

const styles = StyleSheet.create({
  /**
   *StyleSheet est un module de type objet.
   là on a fait appel à la methode create qui nous permets de gérer les styles.
   cette methode prend en paramètre un objet et renvoie un objet.
   StyleSheet.create permet d'avoir un meilleur contrôle sur le style et de donner des propiétés
   qui sont correctent, sinon dans l'idée, j'aurais directement pu créer un objet et le stocker dans
   styles
   */
  container: {
    flex: 1, // dis au conteneur de prendre tout l'espace disponible
    padding: 6,
    /**
     * ici flex permet de gérer l'occupation de l'espace d'un élément dans son conteneur.
     * En css, il aurait besoin d'autres propriétés (comme flex-grow, width ou height)
     *  pour gérer la taille de son élément
     *  */
  },
  header: {
    padding: 12,
    paddingLeft: 0,
    paddingBottom: 15,
  },
  body: {
    flex: 1,
  },
  gridGap: {
    gap: 8,
  },
  list: {
    paddingBottom: 0,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 24,
  },
  headerBlock: {
    padding: 12,
    paddingBottom: 24,
    alignItems: "flex-start",
    gap: 0,
  },
});
