import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: null,
  status: "idle",

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.entities = action.payload 
    },

  }
})

export const { setUser } = userSlice.actions 

export default userSlice.reducer 