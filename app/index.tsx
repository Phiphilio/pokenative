import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

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
  return (
    <SafeAreaView style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about"> à propos</Link>
      <Link href={{ pathname: "/pokemon/[id]", params: { id: 3 } }}>
        pokemon 3
      </Link>
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
    backgroundColor: "#FFC0CBAA",
    flex: 1, // dis au conteneur de prendre tout l'espace disponible
    /**
     * ici flex permet de gérer l'occupation de l'espace d'un élément dans son conteneur.
     * En css, il aurait besoin d'autres propriétés (comme flex-grow, width ou height)
     *  pour gérer la taille de son élément
     *  */
  },
});
