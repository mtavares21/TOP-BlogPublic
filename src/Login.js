import React, { useContext, useEffect, useState } from "react";
import { logIn, createUser } from "./blog_api";
import { UserContext } from "./App";

export default function Login({ setUser }) {
  
  const [message, setMesssage] = useState(null);
  const [response, setResponse] = useState(null);
  const user = useContext(UserContext);

  const logInUser = (e) => {
    e.preventDefault()
    // Login with inserted credentials and setUser
    logIn({
      username: e.target.form[0].value,
      password: e.target.form[1].value,
    }).then((resolve, reject) => {
      if (reject) {
        setResponse( prev => "Log-in failed.")
      } else {
        setUser({
            user_id: resolve.user_id,
            username: resolve.username,
            token: resolve.token,
            password: e.target.form[1].value,
          });
        };
      })
    };

  const signUpUser = (e) => {
    e.preventDefault()
    // Login with inserted credentials and setUser
    createUser({
      username: e.target.form[0].value,
      password: e.target.form[1].value,
    }).then((resolve) => {
        if (resolve.errors){
          setResponse( prev => resolve.errors[0]);
          console.log(message);
        }
        else setResponse( prev => resolve);
    })
  };

  const logOutUser = () => {
    setUser((prev) => null);
  };

  useEffect( () => {
    setMesssage( prev => response)
    return () => setMesssage( prev => null)
  }, [response])

  return (
    <div
      className="absolute top-24 right-0 h-30 md:w-1/3 sm:w-40 w-full bg-gray-800 px-5 pb-5 z-10 font-sans text-base text-justify"
    >
      {!!user ? (
        <div>
          <p className="text-red-400 font-bold text-center mt-4">
            {user.username}
          </p>
          <button
            type="button"
            onClick={(e) => logOutUser(e)}
            className="text-red-400 w-full mb-2"
          >
            Log-out
          </button>
        </div>
      ) : (
        <form className="container flex flex-wrap w-full justify-center items-between">
          <input
            name="username"
            type="email"
            placeholder="username/mail"
            className="w-full my-3"
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            className="w-full mb-3"
          />
          <p>{message}</p>
          <button
            type="button"
            onClick={(e) => logInUser(e)}
            className="text-red-400 w-full mb-2"
          >
            Log-in
          </button>
          <button
            type="button"
            onClick={(e) => signUpUser(e)}
            className="text-red-400 w-full"
          >
            Sign-up
          </button>
        </form>
      )}
    </div>
  );
}
