import React from 'react';


export function App() {
    console.log("#######")  
    // console.log(process.env.API_KEY)
    console.log(env.API_KEY)
    return (
        <div>
            <h1>Welcome { new Date().toDateString() }</h1>
        </div>
    );
}