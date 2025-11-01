import React from "react";

function LoginForm() {
  return (
    <div>
      <h2>Connexion</h2>
      <form>
        <div>
          <label>Email :</label><br />
          <input type="email" placeholder="Entrez votre email" />
        </div>

        <div>
          <label>Mot de passe :</label><br />
          <input type="password" placeholder="Entrez votre mot de passe" />
        </div>

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginForm;
