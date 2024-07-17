import React from 'react'
import { FaHeart } from "react-icons/fa";
import { BiDislike } from "react-icons/bi";
import { incrementDislikes, incrementLikes } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

const User = (props) => {
  const profile = props.user.profile
  const dispatch = useDispatch();

  return (
    <div className="col m-4">
      <div className="card">
        <div className="card-body">
          <img
            src={profile}
            className="rounded-circle mr-3"
            style={{ width: "60px", height: "60px" }}
          />
          <h5 className="card-title">{props.user.name}</h5>
          <p className="card-text">Email: {props.user.email}</p>
          <p className="card-text">{props.user.post}</p>
        </div>
        <div>
          <button style={{"backgroundColor":"#AA336A"}} onClick={()=>dispatch(incrementLikes(props.user.id))} className='btn btn-primary m-2'><FaHeart/></button>
          <span>{props.user.likes}</span>
          <button style={{"color":"blue"}} onClick={()=>dispatch(incrementDislikes(props.user.id))} className='btn'><BiDislike/></button>
          <span>{props.user.dislikes}</span>
        </div>
      </div>
    </div>
  );
}

export default User
