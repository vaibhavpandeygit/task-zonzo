import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';
import User from '../components/User';

const Home = () => {
  
  const users = useSelector((state)=> state.auth);
  const dispatch = useDispatch()

  useEffect(()=>{
    // dispatch(fetchUsers())
    console.log(users)
  },[])
  

  return (
    <div>
      <p style={{"fontSize":"70px","fontFamily":"playfairDisplay"}} className='text-center text-white mt-2'>Your Feed</p>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5'>
        {/* {users && users.data.map((user)=>(
          <User key={user.id} user = {user}/>
         ))} */}
      </div>
    </div>
  );
};

export default Home;