import { useThemeColors } from "@/hooks/useThemeColors";
import { Image, StyleSheet, TextInput } from "react-native";
import { Row } from "./row";

type props = {
  text: string;
  changeText: (s: string) => void;
};

export function SearchBar({ text, changeText }: props) {
  // le but de ce composant sera de récupérer la variable d'état et la fonction qui modifie cette variable d'état
  const colors = useThemeColors();
  return (
    <Row style={[styles.searchBar, { backgroundColor: colors.grayWhite }]}>
      <Image
        source={require("@/assets/images/icon/search.png")}
        style={{ height: 16, width: 16, tintColor: colors.identity }}
      />
      <TextInput
        style={styles.input}
        onChangeText={changeText} /**
  onChangeText appelle automatique la fonction qui lui est donné en lui donnant en paramètre ce que l'utilisateur a entrée dans le champ de text
  */
        value={text} // affiche dans le champ de texte la valeur qui lui est donné
        placeholder="search"
      />
    </Row>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    width: 280,
    height: 32,
    borderRadius: 20,
    padding: 8,
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    height: 40, // la heute posait problème
    lineHeight: 16,
    // color: "black",
  },
});
