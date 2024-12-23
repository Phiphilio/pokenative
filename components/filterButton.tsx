import { useThemeColors } from "@/hooks/useThemeColors";
import { useState } from "react";
import { StyleSheet, View, Image, Pressable, Modal, Text } from "react-native";
import { ThemedText } from "./ThemedText";
import { Card } from "./card";

type props = {
  valeur: "id" | "name";
  onChange: (v: "id" | "name") => void;
};
export function FilterButton({ valeur, onChange }: props) {
  const colors = useThemeColors();
  const [modalVisibility, modalVisible] = useState(false);

  const modalActiver = () => {
    modalVisible(true);
  };
  const modalDesactiver = () => {
    modalVisible(false);
  };
  return (
    <>
      <Pressable onPress={modalActiver}>
        <View style={[styles.forme, { backgroundColor: colors.grayWhite }]}>
          <Image
            source={
              valeur === "id"
                ? require("@/assets/images/number.png")
                : require("@/assets/images/alpha.png")
            }
            style={{ width: 24, height: 24, tintColor: colors.identity }}
          />
        </View>
      </Pressable>
      <Modal
        visible={modalVisibility}
        transparent={true}
        animationType="fade"
        onRequestClose={modalDesactiver}
        //backdropColor="white"
      >
        <View style={styles.modalContainer}>
          <View
            style={[styles.modalView, { backgroundColor: colors.identity }]}
          >
            <ThemedText
              variant="subtitle2"
              color="grayWhite"
              style={styles.modalTextSyle}
            >
              Sort by :
            </ThemedText>
            <Card style={styles.modalCardStyle}>
              <Text>test</Text>
            </Card>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  forme: {
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  modalView: {
    borderRadius: 8,
    alignItems: "center",
    width: 113,
    height: 132,
    padding: 4,
    paddingBottom: 8,
  },
  modalTextSyle: {
    padding: 16,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 8,
  },
  modalCardStyle: {
    padding: 16,
    paddingLeft: 12,
    paddingRight: 12,
    height: 80,
    width: 105,
  },
});
