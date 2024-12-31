// l'idée c'est de créer une constante qui contient déjà toutes les couleurs
// les couleurs sont réparties dans des propriétés light et dark pour les modes du même non,
// c'est une bonne pratique à conserver
export const colors = {
  light: {
    identity: "#DC0A2D",
    grayDark: "#212121",
    grayMedium: "#666666",
    grayLight: "#E0E0E0",
    grayBackground: "#EFEFEF",
    grayWhite: "#FFFFFF",
  },
  dark: {
    identity: "#185336",
    grayDark: "#212121",
    grayMedium: "#666666",
    grayLight: "#E0E0E0",
    grayBackground: "#EFEFEF",
    grayWhite: "#FFFFFF",
  },
  // couleur pour les types de pokemon, c'est propre à ce projet
  pokeType: {
    bug: "#A7B723",
    dark: "#75574C",
    dragon: "#7037FF",
    electric: "#F9CF30",
    fairy: "#E69EAC",
    fighting: "#C12239",
    fire: "#F57D31",
    flying: "#A891EC",
    ghost: "#70559B",
    normal: "#AAA67F",
    grass: "#74CB48",
    ground: "#DEC16B",
    ice: "#9AD6DF",
    poison: "#A43E9E",
    psychic: "#FB5584",
    rock: "#B69E31",
    steel: "#B7B9D0",
    water: "#6493EB",
  },
};
