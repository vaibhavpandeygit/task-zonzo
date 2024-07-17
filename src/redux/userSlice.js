import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('/jsonData.json')
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState:{
      data: []
  },
  reducers: {
    incrementLikes: (state, action) => {
      const user = state.data.find(user => user.id === action.payload);
      if(user) {
        user.likes += 1;
      }
    },
    incrementDislikes: (state, action)=>{
      const user = state.data.find(user=>user.id === action.payload)
      if(user){
        user.dislikes += 1;
      }
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchUsers.fulfilled,(state,action)=>{
      state.data = action.payload
    })
  }
});

export const { incrementLikes, incrementDislikes } = usersSlice.actions;

export default usersSlice.reducer;