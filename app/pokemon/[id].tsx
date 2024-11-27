import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Pokemon() {
  const params = useLocalSearchParams();
  /**
   * le hook useLocalSearchParams() me permet de récupérer uniquement l'id
   * dans l'url
   */
  return (
    <View>
      <Text> pokemon {params.id}</Text>
    </View>
  );
}
