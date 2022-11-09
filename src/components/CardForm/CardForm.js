import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import "./CardForm.scss";
const CardForm=()=> {
  const {user, setUser,addUser} = useContext(UserContext);

  const handleChange=(e)=>{
    const {name,value} =e.target;
    setUser({...user,[name]:value});
  }
  return (
    <div className="card-container">      
      <form className="form-field" onSubmit={addUser}>
        <div className="card-input">
          <label>Name</label>
          <input type="text" className="item" name="userName" value={user.userName} onChange={handleChange}/>
        </div>
        <div className="card-input">
          <label>Age</label>
          <input type="number" className="item" name="age" value={user.age} onChange={handleChange}/>
        </div>
        <div className="card-input">
          <label>Ph No</label>
          <input type="number" className="item" name="phoneNo" value={user.phoneNo} onChange={handleChange}/>
        </div>
      </form>
    </div>
  )
}

export default CardForm