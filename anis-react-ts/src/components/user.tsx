import React from 'react'

const User = (props: {
  name: string;
  email: string;
  age: number;
  isRegistered: boolean;
  languages: string[] 
}) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem" }}>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.age} years old</p>
      {props.isRegistered ? (
        <p>Registered Student</p>
      ) : (
        <p>Unregistered Student</p>
      )}
      <p>
        Speaks:{" "}
        {props.languages.map((language, index) => {
          return <span key={index}>{language} </span>;
        })}
      </p>
    </div>
  );
};

export default User;