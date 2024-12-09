import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Card } from "@/components/card";
import { Card2 } from "@/components/card2";

type Item = {
  id: string;
  name: string;
};
const tonton: Item[] = [
  { id: "1", name: "Pikachu" },
  { id: "2", name: "Salamèche" },
  { id: "3", name: "Bulbizarre" },
  { id: "4", name: "Pichu" },
  { id: "5", name: "tiplouf" },
  { id: "6", name: "tortipous" },
  { id: "7", name: "torttank" },
  { id: "8", name: "Pikachu" },
  { id: "9", name: "Salamèche" },
  { id: "10", name: "Bulbizarre" },
  { id: "11", name: "Pichu" },
  { id: "12", name: "tiplouf" },
  { id: "13", name: "tortipous" },
  { id: "14", name: "torttank" },
];

export default function Index() {
  const colors = useThemeColors();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.identity }]}
    >
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/pokeball.png")}
          /**
           * la fonction require() est utilisé pour inclure des ressources statiques locales dans React Native.
           * Quand on dit locale, ça veut dire que c'est dans les fichiers de l'application, donc pas besoin de connexion internet.
           *Cela garantit des performances optimales et une compatibilité multiplateforme.
           *Si tu as besoin de charger des images dynamiques ou via une URL, utilise { uri: "..." } à la place de require.
           */
          width={24}
          height={24}
        />
        <ThemedText variant="headline" color="grayWhite">
          Pokedex
        </ThemedText>
      </View>
      {
        <Card style={styles.body}>
          <FlatList
            data={tonton} // propriété qui récupère le tableau
            numColumns={3} // propriété qui organise les éléments sous forme de colonne. Quand je l'utilise, il y aura tjrs une erreur, mais il suffit de reload l'application
            columnWrapperStyle={styles.gridGap} // propriété qui gère le style de chaque colonne. on ne peut l'utiliser que quand numColumns est au moins égale à 2
            contentContainerStyle={[styles.gridGap, styles.list]} //propriété qui gère l'espacement vertical
            renderItem={({ item }) => (
              <Card style={{ flex: 1 / 3, height: 200 }}>
                <Text>{item.name}</Text>
              </Card>
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
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 12,
    paddingBottom: 24,
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
});
