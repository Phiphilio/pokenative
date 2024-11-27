// on crée un composant qui nous permettra de gérer les themes de texte

/**
 * On a créer un type en typescript, de la même manière qu'on fait en go.
 * Tout élément de type props sera donc un objet ayant les 2 propriétés varaint et color.
 * le "?" est là pour spécifier que la propriété est optionnelle. ça veut dire qu'on peut ne pas la préciser
 *
 *En typescript, pour donner un type, on écrit :
 * const phrase: string . là on donne à la constante element le type props
 * phrase = "ma phrase"
 * Si on veut lui donner un type puis la définir,
 *const element: props = { variant: "primary", color: "red" };
 *dans ce cas, après avoir donné le type props, on affecte les valeurs pour chaque propriété
 *
 *
 */
type props = {
  variant?: string;
  color?: string;
};
