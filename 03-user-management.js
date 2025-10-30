// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

// Fonction whoIsAdmin
function whoIsAdmin(utilisateurs) {
  
  let admins = [];

  for (let i = 0; i < utilisateurs.length; i++) {
    if (utilisateurs[i].estAdmin === true) {
      admins.push(utilisateurs[i].nom);
    }
  }

  return admins;
}

let utilisateurs = [
  { nom: "Carmel", age: 25, estAdmin: true },
  { nom: "Exaucé", age: 21, estAdmin: true },
  { nom: "Archange", age: 12, estAdmin: false },
  { nom: "Gabriel", age: 10, estAdmin: false }
];

console.log(whoIsAdmin(utilisateurs));

module.exports = {
	whoIsAdmin,
};


