export function getPokemonId(url: string): number {
  return parseInt(url.split("/").at(-2)!, 10);
}

// dès le moment où la même ligne de code risqait de se répéter, plus précisément dans plusieurs fichiers, il a crée ne fonction pour faire la tâche
export function getPokemonArtwork(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}
