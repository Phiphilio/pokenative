import { ViewStyle } from "react-native";

export const Shadow = {
  dp2: {
    // tout ça c'est dans le cadre de iOS
    shadowOpacity: 0.2,
    shadowColor: "#148f43",
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 1 },
    // dans le cadre de Android, on doit utiliser uniquement élevation ça :
    elevation: 2,
  },
} satisfies Record<string, ViewStyle>;
/**
 * satisfies dans ce contexte :
Le mot-clé satisfies permet de valider que l'objet suit une certaine forme ou respecte un type, sans pour autant altérer son propre type.
Dans ton exemple, cela signifie que Shadow est validé pour être un Record<string, ViewStyle>, c’est-à-dire :
Il doit contenir des clés de type string (ici, dp2).
Les valeurs associées à ces clés doivent respecter le type ViewStyle.
Cela garantit que toutes les propriétés de style dans dp2 sont valides selon les règles de React Native pour les styles applicables à un <View>.
 */
