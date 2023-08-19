import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";
type IntialState = {
  value: NewsState;
};
type NewsState = {
  a: String;
  newsKeyWord: String,
  useremail:String,
  newsData:Array<Object>;

};
const initialState = {
  value: { a: "ads",useremail:"", newsKeyWord: "",newsData:[] } as NewsState,
} as IntialState;
export const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    updateNewsKeyword: (state, action: PayloadAction<String>) => {
     state.value={...state.value,newsKeyWord:action.payload}
    },
    updateUserEmail: (state, action: PayloadAction<String>) => {
      state.value={...state.value,useremail:action.payload}
     },
    updateNewsData:(state,action:PayloadAction<Array<Object>>)=>{
      state.value={...state.value,newsData:action.payload}
    }
  },
});
export const { updateNewsKeyword,updateNewsData,updateUserEmail } = newsSlice.actions;

export default newsSlice.reducer;
