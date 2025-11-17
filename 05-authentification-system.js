 
let baseDeDonnees = [];


function signUp(nom, email, password, confirmPassword) {

  let utilisateurExistant = baseDeDonnees.find((user) => user.email === email);
  if (utilisateurExistant) {
    return "Erreur : cet email est déjà utilisé.";
  }

  if (password !== confirmPassword) {
    return "Erreur : les mots de passe ne correspondent pas.";
  }

  let nouvelUtilisateur = {
    id: baseDeDonnees.length + 1, 
    email: email,
    password: password,
    estConnecte: false,
    estBloque: false
  };

 
  baseDeDonnees.push(nouvelUtilisateur);

  return nouvelUtilisateur;
}
function login(email, password) {
  
  let utilisateur = baseDeDonnees.find((user) => user.email === email);

  if (!utilisateur) {
    return "Erreur : cet utilisateur n'existe pas.";
  }

  if (utilisateur.password !== password) {
    return "Erreur : mot de passe incorrect.";
  }

  if (utilisateur.estBloque) {
    return "Erreur : cet utilisateur est bloqué.";
  }

  utilisateur.estConnecte = true;
  return utilisateur;
}

console.log(signUp("Paul", "paul@example.com", "1234", "1234"));
console.log(signUp("Marie", "marie@example.com", "abcd", "abcd")); 
console.log(signUp("Paul", "paul@example.com", "test", "test"));
console.log(signUp("Claire", "claire@example.com", "1234", "4321")); 

// 🔹 Connexion
console.log(login("paul@example.com", "1234"));
console.log(login("paul@example.com", "0000"));
console.log(login("inconnu@example.com", "1234"));

module.exports = { baseDeDonnees, signUp, login };
