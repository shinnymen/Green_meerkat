import React, { useState } from "react";
import axios from "axios";
import config from '../../config'


const SignInform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    
    // const authObject = { 'Project': "4202d95f-4705-4dcd-9637-8685ffc872b1", 'User-Name': useReducer.pseudo, 'User-Secret': password };

    // try {
    //   // username / password => chatengine -> give messages
    //    await axios.get('https://api.chatengine.io/chats', { headers: authObject});

    //    // works out loggin
    //    localStorage.setItem('username', email);
    //    localStorage.setItem('password', password);

    //    window.location.reload();

    // } catch (error) {
    //   // error -> try with the username ...
    // }

    axios({
      method: "post",
      url: `${config.backend.host}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        // console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          localStorage.setItem('token', res.data.user)
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
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
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInform;
