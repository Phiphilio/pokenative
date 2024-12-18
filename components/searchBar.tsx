import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, TextInput } from "react-native";

type props = {
  text: string;
  changeText: (s: string) => void;
};

export function SearchBar({ text, changeText }: props) {
  // le but de ce composant sera de récupérer la variable d'état et la fonction qui modifie cette variable d'état
  const colors = useThemeColors();
  return (
    <TextInput
      style={[styles.searchBar, { backgroundColor: colors.grayWhite }]}
      onChangeText={changeText} /**
  onChangeText appelle automatique la fonction qui lui est donné en lui donnant en paramètre ce que l'utilisateur a entrée dans le champ de text
  */
      value={text} // affiche dans le champ de texte la valeur qui lui est donné
      placeholder="search"
    />
  );
}

const styles = StyleSheet.create({
  searchBar: {
    width: 280,
    height: 32,
    borderRadius: 20,
    padding: 8,
  },
});
