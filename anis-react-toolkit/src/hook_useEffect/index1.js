import React from 'react'
import { useState, useEffect } from 'react';

export default function Hook_useEffect1() {
  const [status, setStatus] = useState("low");
  useEffect(() => {
   console.log("on mount")
  });
  useEffect(() => {
    console.log("on empty array effect")
   }, []);
  useEffect(() => {
    console.log("on specific value change")
   }, [status]);
  return (                                                              
    <div>
        <h1>{status}</h1>
        <button onClick={() => setStatus("low")}>Low</button>
        <button onClick={() => setStatus("medium")}>Medium</button>
        <button onClick={() => setStatus("high")}>High</button> 
    </div>
  )
}
