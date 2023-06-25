import {useContext,useEffect} from 'react'

import { UserContext } from '../../context/UserContext/UserState';

const Profile = () => {
  const {getUser,user} = useContext(UserContext);

useEffect(() => {
getUser();

}, []);

if (!user) {
  return <span>Cargando...</span>;

}
return (
  <>
  <h1>Profile </h1>;
  <p>Name:{user.name}</p>
  <p>Email: {user.email}</p>
  </>
)
}

export default Profile