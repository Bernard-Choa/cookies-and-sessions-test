import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const App = () => {
   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');
   const [cookies, setCookie] = useCookies(['user']);

   async function handle() {
    const response = await fetch('http://localhost:8000/create_session/' + name, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    // then( response => console.log(response) )
    // const test = response.json();
    console.log(response);
    // setCookie('Name', name, { path: '/' });
    // setCookie('Password', pwd, { path: '/' });
   };
   return (
      <div className="App">
      <h1>Name of the user:</h1>
      <input
         placeholder="name"
         value={name}
         onChange={(e) => setName(e.target.value)}
      />
      <h1>Password of the user:</h1>
      <input
         type="password"
         placeholder="name"
         value={pwd}
         onChange={(e) => setPwd(e.target.value)}
      />
      <div>
         <button onClick={handle}>Set Cookie</button>
      </div>
   </div>
   );
};
export default App;
