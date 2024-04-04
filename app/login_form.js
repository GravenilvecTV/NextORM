"use client"
import { useForm, SubmitHandler } from "react-hook-form";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
      signInWithEmailAndPassword(auth, data.email, data.password)
          .then((user) => {
            alert("Connexion ok")
          })
          .catch((error) => {
            console.log("Une erreur est survenue")
          })
  }

  return (
    <main>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" {...register('email')}/>

          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" {...register('password')}/>

          <button type="submit">Valider</button>
      </form>
    </main>
  );
}
