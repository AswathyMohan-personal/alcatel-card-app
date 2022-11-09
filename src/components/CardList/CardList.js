import React, { useContext} from 'react';
import UserContext from '../../contexts/UserContext';
import Card from '../Card/Card';
import "./CardList.scss";
const CardList=()=>{

    const {users, handleDelete} = useContext(UserContext);

    return(<div className='card-list'>
        {users.map((user, id) => {
          return (<div className='card-item' key={id}>                     
            <Card userValues={user}/>
            <div className='button-delete'>
              <button 
              className='delete'
              onClick={()=>handleDelete(id)}>X</button></div> 
          </div>)
        })}
    </div>)
}

export default CardList