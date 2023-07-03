import {useContext,useEffect} from 'react'
import { UserContext } from '../../context/UserContext/UserState';
import { Card, Space, Spin } from 'antd'
import './Profile.styles.scss'


const Profile = () => {
  const {getUser,user} = useContext(UserContext);

useEffect(() => {
  getUser();

}, []);

if (!user) {
  return <Spin size="large" />

}
console.log(user);

  return (


    <div className='container__profile'>
      {user.map((userData) => (
        <div key={userData.id} className='container__user'>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ))}
    </div>
  );
  
  
}

export default Profile





