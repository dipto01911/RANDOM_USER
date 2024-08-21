


import { useEffect,useState } from "react";
import User from "./Component/User";
import'./Component/User.css';

function App() {
  const[users,setuser]=useState([]);
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(data => setuser(data.results))
  },[])
  const[team,setteam]=useState([]);
const addname=(Name)=>{
let newteam=[...team,Name];
setteam(newteam);
}

return (
    <div className="App">
      <header className="App-header">
        <div className="font-portion">
       <h3>Team builder</h3>
       {
        team.map(x => <li>{x}</li>)
       }
       </div>
      {
      users.map(user => <User x={user} addname={addname}></User>)
      }
       </header>
    </div>
  );
}


export default App;
