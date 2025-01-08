export function getPokemonId(url: string): number {
  return parseInt(url.split("/").at(-2)!, 10);
}

// dès le moment où la même ligne de code risqait de se répéter, plus précisément dans plusieurs fichiers, il a crée ne fonction pour faire la tâche
export function getPokemonArtwork(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

// fonction pour slice ma string
export function getStringSliced(s: string): string {
  if (s.length === 2) {
    s = s.slice(0, 1) + "," + s.slice(1);
  } else if (s.length === 3) {
    s = s.slice(1, 2) + "," + s.slice(2);
  } else if (s.length === 1) {
    s = "0" + "," + s.slice(0);
  }
  return s;
}
