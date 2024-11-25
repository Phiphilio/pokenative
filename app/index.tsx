import { StyleSheet, Text, View } from "react-native";

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
 * de nos jours on utilise des composants qui sont des fonctions
 *
 *
 */

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  /**
   *StyleSheet est un module de type objet.
   là on a fait appel à la methode create qui nous permets de gérer les styles.
   cette methode prend en paramètre un objet et renvoie un objet
   */
  container: {
    backgroundColor: "darkgreen",
    padding: 30,
  },
});
