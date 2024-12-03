import { Image, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Card } from "@/components/card";

/**
 * StyleSheet, Text, View sont des bouts de codes que je peux réutiliser,
 * importer et exporter.
 * StyleSheet en revanche est un module, un bout de code qui a un rôle purement interne à mon code.
 * les modules peuvent faire des calculs, faire des requête API, fournir des constantes etc.
 * les modules peuvent être des objets(comme StyleSheet), des fonctions utilitaires, des classes, des constantes
 * ou même des combinaisons de tous ces éléments.
 *
 * Par contre, Text et View sont des composants.
 * les composant sont des fonctions ou des classes qui ont pour rôle de générer un élément graphique.
 * ça peut être un bouton, une image, du texte, etc.
 * les composants ne sont utilisables que dans le cadre de react-native (et react)
 * de nos jours on utilise plus les composants qui sont des fonctions
 *
 *
 */

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
           * require() est utilisé pour inclure des ressources statiques locales dans React Native.
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
      <Card style={styles.body}></Card>
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
    padding: 4,
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
});
