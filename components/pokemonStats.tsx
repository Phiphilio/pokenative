import { StyleSheet, View, ViewProps } from "react-native";
import { Row } from "./row";
import { ThemedText } from "./ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";

type props = ViewProps & {
  name: string;
  stats: number;
  color: string;
};

function statShortName(name: string): string {
  return name
    .replaceAll("special", "s")
    .replaceAll("-", "")
    .replaceAll("attack", "ATK")
    .replaceAll("defense", "DEF")
    .replaceAll("special", "s")
    .replaceAll("speed", "spd")
    .toUpperCase();
}
export function PokemonStats({ name, stats, color, ...rest }: props) {
  const colors = useThemeColors();
  return (
    <Row {...rest}>
      <ThemedText
        variant="subtitle3"
        style={[
          styles.nameSection,
          { color: color, borderRightColor: colors.grayLight },
        ]}
      >
        {statShortName(name)}
      </ThemedText>
      <ThemedText style={styles.statsSection}>
        {stats.toString().padStart(3, "0")}
      </ThemedText>
      <View style={styles.barStats}>
        <View
          style={[
            styles.jaugeBarStats,
            { width: stats, backgroundColor: color },
          ]}
        >
          <View
            style={[styles.backgroundBarStats, { backgroundColor: color }]}
          ></View>
        </View>
      </View>
    </Row>
  );
}

const styles = StyleSheet.create({
  nameSection: {
    borderRightWidth: 1,
    paddingRight: 5,
  },
  statsSection: {
    paddingLeft: 5,
  },
  barStats: {
    marginLeft: 10,
    borderRadius: 20,
    height: 4,
    width: 233,
  },
  backgroundBarStats: {
    borderRadius: 40,
    height: 4,
    width: 233,
    opacity: 0.24,
  },
  jaugeBarStats: {
    borderRadius: 40,
    height: 4,
  },
});
