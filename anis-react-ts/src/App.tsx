import React from 'react';
import './App.css';
import User from './components/user';
import User1 from './components/user1';
import User2 from './components/user2';
import User3 from './components/user3';

const users = [
  {
    id: 1,
    name: "anisul islam",
    email: "anisul2010s@yahoo.co.uk",
    age: 32,
    isRegistered: true,
    languages: ["Bangla", "English"],
  },
  {
    id: 2,
    name: "Rabeya Begum",
    email: "rabu2010s@yahoo.co.uk",
    age: 31,
    isRegistered: false,
    languages: ["Bangla", "English", "Finnish"],
  },
];
function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <User name="sadia" email="sadianawrin93@gmail.com" age={32} isRegistered={true} languages={["Bangla", "English", "Finnish"]}/>
      <User1 name="sadia" email="sadianawrin93@gmail.com" age={32} isRegistered={true}/>
      <User2 name="sadia" email="sadianawrin93@gmail.com" age={32} isRegistered={true}/>
      {users.map((user) => (
        <User3 key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
