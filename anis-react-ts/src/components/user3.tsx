import React from 'react'

type UserProps = {
  user: {
    name: string;
    email: string;
    age: number;
    isRegistered: boolean;
    languages: string[];
  };
};
const User3 = ({ user }: UserProps) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem" }}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.age} years old</p>
      {user.isRegistered ? (
        <p>Registered Student</p>
      ) : (
        <p>Unregistered Student</p>
      )}
      <p>
        Speaks:{" "}
        {user.languages.map((language, index) => {
          return <span key={index}>{language} </span>;
        })}
      </p>
    </div>
  );
};
export default User3;