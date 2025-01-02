import { Image, ImageProps } from "react-native";

type props = ImageProps;
export function PokeBallImage({ style, ...rest }: props) {
  return (
    <Image
      source={require("@/assets/images/icon/pokeball.png")}
      style={style}
    />
  );
}
