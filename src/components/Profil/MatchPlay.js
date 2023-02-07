import React, { useState } from "react";

import PlayerInputComponent from './PlayerInput'

const MatchPlay = () => {
  const [ rdv, setRdv] = useState('')
  const [ lieu, setLieu] = useState('')
  const [ joueur1, setJoueur1] = useState('')
  const [ joueur2, setJoueur2] = useState('')
  const [ joueur3, setJoueur3] = useState('')
  const [ joueur4, setJoueur4] = useState('')

  const submit = (e) => {
    e.preventDefault();
    console.log('joueur1', joueur1)
    console.log('joueur2', joueur2)
    console.log('joueur3', joueur3)
    console.log('joueur4', joueur4)
    if(<PlayerInputComponent />) {
      console.log('Ok')
    }
    
  }

  return (
    <div className="trend-content">
      <br />
      <form action="" onSubmit={submit} id="sign-up-form">
        <label htmlFor="rdv">Date & Heure</label>
        <br />
        <input type="date" name="rdv" id="rdv" onChange="{ e => setRdv(e.target.value) }" />
        <div className="error"></div>
        <br />
        <label htmlFor="golf">Lieu</label>
        <br />
        <input type="text" name="searchgolf" id="lieu" onChange="{ e => setLieu(e.target.value) }" />
        <div className="error"></div>
        <br />
        <PlayerInputComponent playerLabel="joueur1" onChange={setJoueur1} />
        <PlayerInputComponent playerLabel="joueur2" onChange={setJoueur2} />
        <PlayerInputComponent playerLabel="joueur3" onChange={setJoueur3} />
        <PlayerInputComponent playerLabel="joueur4" onChange={setJoueur4} />

        <input type="submit" value="Inviter" />
      </form>
    </div>
  );
};

export default MatchPlay;
