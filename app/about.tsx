import { Text, View } from "react-native";

export default function About() {
  return (
    <View>
      <Text> à propos !</Text>
    </View>
  );
}
/**
 * il faut obligatoirement préciser que le composant est l'élément par défaut parce que c'est ce que expo-router, la dépendance,
 *  va chercher.
 *
 * Expo-router cherche automatiquement l'élément default dans le fichier pour pouvoir l'afficher une page.
 *
 * quand je précise default dans : "export default function About()", je fais aussi comprendre à expo que c'est mon élément principale.
 * C'est celui qui joue le plus grand rôle et comme là, j'utilise react-native, c'est logique que l'élément avec le plus grand rôle soit
 * un composant (dixit la différence entre module et composant).
 * Quand j'utilise default, je peux récupérer cette élément avec le nom que je veux dans les autres fichiers.
 * En revanche, je ne peut avoir q'un seul élément exporté en default. les autres seront juste exporté, je devrais donc préciser leut nom exact0
 */
