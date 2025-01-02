import { colors } from "@/constant/colors";
import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, Text } from "react-native";
import { TextProps } from "react-native/Libraries/Text/Text";

// on crée un composant qui nous permettra de gérer les themes de texte

/**
 * On a créer un type en typescript, de la même manière qu'on fait en go.
 * Tout élément de type props sera donc un objet ayant les 2 propriétés varaint et color.
 * le "?" est là pour spécifier que la propriété est optionnelle. ça veut dire qu'on peut ne pas la préciser
 *
 *En typescript, pour donner un type, on écrit :
 * const phrase: string . là on donne à la constante element le type props
 * phrase = "ma phrase"
 * Si on veut lui donner un type puis la définir,
 *const element: props = { variant: "primary", color: "red" };
 *dans ce cas, après avoir donné le type props, on affecte les valeurs pour chaque propriété
 *
 *
 * TextProps est un style existant qui vient de react-native. quand j'écris TextProps & {...},
 * je suis entrain de créer un élément qui est à la fois de type TextProps et un objet.
 * ça veut dire que tout ce qui sera du type props sera à la fois un un TextProps et l'objet
 *
 *
 */

type props = TextProps & {
  /** "typeof quelqueChose" dis juste à typescript de créer un type qui a la même structure que quelqueChose */

  variant?: keyof typeof styles; // récupère la proprété d'un objet de type styles

  color?: keyof (typeof colors)["light"]; // récupère la propriété d'un objet nommé light qui est lui même une propriété d'un objet nommé colors
};
export function ThemedText({ variant, color, style, ...rest }: props) {
  /**
   * si je ne destructurais pas props pour récupérer variant, color, style et ...rest; je ne pourrais pas faire en sorte
   * de transmettre les valeurs au composant Text qui est renvoyé
   */
  const colors = useThemeColors();
  return (
    <Text
      style={[
        styles[variant ?? "body3"],
        { color: colors[color ?? "grayDark"] },
        style,
      ]}
      {...rest}
    />
  );
}
const styles = StyleSheet.create({
  body3: {
    fontSize: 10,
    lineHeight: 16,
  },

  body2: {
    fontSize: 12,
    lineHeight: 16,
  },

  body1: {
    fontSize: 14,
    lineHeight: 16,
  },

  caption: {
    fontSize: 8,
    lineHeight: 12,
  },

  headline: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },

  subtitle3: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: "bold",
  },

  subtitle2: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "bold",
  },

  subtitle1: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "bold",
  },
});
