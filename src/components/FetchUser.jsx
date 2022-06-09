import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../features/userSlice"

const FetchUser = () => {
  const userdata = useSelector(({ fetchUser }) => fetchUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
      <div>ListOfUsers</div>
      {userdata.loading && (
        <div>Loading...</div>
      )}

      {!userdata.loading && userdata.error ? (
        <div>Error: {userdata.error}</div>
      ) : null}

      {!userdata.loading && userdata.users.length ? (
        <ul>
          {userdata.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export default FetchUser
