import React, { useState } from "react";
import axios from "axios";
import SignInform from "./SignInForm";
import config from '../../config'

const SignUpform = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [handicap, setHandicap] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlePassword, setControlePassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const pseudoError = document.querySelector(".pseudo.error");
    const handicapError = document.querySelector(".handicap.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const termsError = document.querySelector(".terms.error");
    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";
    

    if (password !== controlePassword || !terms.checked) {
      if (password !== controlePassword)
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";

      if (!terms.checked)
        termsError.innerHTML = "Veuillez valider les conditions générales";
    } else {
      await axios({
        method: "post",
        url: `${config.backend.host}api/user/register`,
        data: {
          pseudo,
          handicap,
          email,
          password,
        },
      })
        .then((res) => {
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.pseudo;
            handicapError.innerHTML = res.data.errors.handicap;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <SignInform />
          <span></span>
          <h4 className="success">
            Enregistrement réussi, veuillez vous connecter
          </h4>
        </>
      ) : (
        <form aciton="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="pseudo">Pseudo</label>
          <br />
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            onChange={(e) => setPseudo(e.target.value)}
            value={pseudo}
          />
          <div className="pseudo error"></div>
          <br />
          <label htmlFor="handicap">Votre Handicap</label>
          <br />
          <input
            type="number"
            name="handicap"
            id="handicap"
            onChange={(e) => setHandicap(e.target.value)}
            value={handicap}
          />
          <div className="handicap error"></div>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
          <br />
          <label htmlFor="password-conf">Confirmer mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password-conf"
            onChange={(e) => setControlePassword(e.target.value)}
            value={controlePassword}
          />
          <div className="password-confirm error"></div>
          <br />
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            J'accepte les{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              conditions générales
            </a>{" "}
          </label>
          <div className="terms error"></div>
          <br />
          <input type="submit" value="Valider inscription" />
        </form>
        
      )}
    </>
  );
};

export default SignUpform;
