import React from "react"
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

export default function Login() {
  const dispatch = useDispatch()

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({
              name: "LemmyMwaura",
              age: 25,
              email: "lemminton@gmail.com",
            })
          )
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  )
}
