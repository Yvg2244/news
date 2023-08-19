import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type IntialState = {
  value: UserState;
};
type UserState = {
 fav: Array<String>,
 email: String,uid: String,
  
};
const initialState = {
  value: {fav: [], email: "",uid:"" } as UserState,
} as IntialState;
export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {

    updateUserEmail: (state, action: PayloadAction<String>) => {
      state.value.email=action.payload
     },
     updateUserFav:(state,action:PayloadAction<Array<String>>)=>{
       state.value.fav=action.payload
     },  updateUid:(state,action:PayloadAction<String>)=>{
      state.value.uid=action.payload
    }

  },
});
export const { updateUserEmail,updateUserFav,updateUid } = userSlice.actions;

export default userSlice.reducer;
