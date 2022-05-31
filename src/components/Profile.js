import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { name, age, email } = useSelector(({ user }) => user.value)
  const themeColor  = useSelector(({theme}) => theme.value)

  return (
    <div style={{ color:themeColor}}>
      <h1>profile</h1>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <p>email:{email}</p>
    </div>
  )
}
