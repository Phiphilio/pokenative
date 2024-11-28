import { colors } from "@/constant/colors";
import { useColorScheme } from "react-native";

export function useThemeColors() {
  const theme = useColorScheme() ?? "light";
  // useColorScheme permet de détecter automatiquement si l'utilisateur de l'application utilise un thème clair (light) ou
  // sombre (dark) sur son appareil
  return colors[theme];
}
