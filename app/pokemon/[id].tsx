import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useThemeColors } from "@/hooks/useThemeColors";
import { ThemedText } from "@/components/ThemedText";
import { Row } from "@/components/row";

export default function Pokemon() {
  const params = useLocalSearchParams();
  const colors = useThemeColors();
  console.log(params);
  /**
   * le hook useLocalSearchParams() me permet de récupérer uniquement l'id
   * dans l'url
   */
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.identity }]}
    >
      <Row style={styles.header} gap={8}>
        <Image
          source={require("@/assets/images/icon/arrow_back.png")}
          style={[styles.arrowBack, { tintColor: colors.grayWhite }]}
        />
        <ThemedText variant="headline" style={{ color: colors.grayWhite }}>
          {params.name}
        </ThemedText>
      </Row>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /**
     * en react-native, la propriété flex affecte aussi la position de l'élément sur lequel elle est appliqué, pas juste les enfants
     * d'où la confusion
     */
  },
  header: {
    padding: 20,
    paddingBottom: 24,
  },
  arrowBack: {
    height: 32,
    width: 32,
  },
});
