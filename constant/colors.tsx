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
    Bug: "#A7B723",
    Dark: "#75574C",
    Dragon: "#7037FF",
    Electric: "#F9CF30",
    Fairy: "#E69EAC",
    Fighting: "#C12239",
    Fire: "#F57D31",
    Flying: "#A891EC",
    Ghost: "#70559B",
    Normal: "#AAA67F",
    Grass: "#74CB48",
    Ground: "#DEC16B",
    Ice: "#9AD6DF",
    Poison: "#A43E9E",
    Psychic: "#FB5584",
    Rock: "#B69E31",
    Steel: "#B7B9D0",
    Water: "#6493EB",
  },
};
