import { useEffect, useState } from "react";
import CardForm from "./components/CardForm/CardForm";
import CardList from "./components/CardList/CardList";
import UserContext from "./contexts/UserContext";
import "./App.scss";

const initialUserState = {
  userName:"",
  age:"",
  phoneNo:""
}

function App() {
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState(initialUserState);

  const[disabled,setDisabled] = useState(true);

  

  useEffect(()=>{
    if(Object.values(user).every(item=> item !== '')){
      setDisabled(false);
    } else{
      setDisabled(true);
    }
  },[user]);

  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, user]);
    setUser(initialUserState)
  };


  const handleDelete = (index) => {
    let newUsers = users.filter((user, id) => id !== index);   
    setUsers(newUsers);  
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser, handleDelete, users, addUser}}>
        <div className="card-form">
          <div className="card-info">
            <CardForm />
          </div>
          <div className="button">
            <button
            className="button-style"
            disabled={disabled} 
            onClick={addUser}>Add</button>
          </div>
        </div>
        <CardList />
      </UserContext.Provider>
    </div>
  );
}

export default App;
