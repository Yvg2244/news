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
  currentNews:Object,
  newsData:Array<Object>;

};
const initialState = {
  value: { a: "ads",useremail:"", newsKeyWord: "",newsData:[],currentNews:{} } as NewsState,
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
    },
    updateCurrentNews:(state,action:PayloadAction<Object>)=>{
      state.value={...state.value,currentNews:action.payload}
    }
  },
});
export const { updateNewsKeyword,updateNewsData,updateUserEmail,updateCurrentNews } = newsSlice.actions;

export default newsSlice.reducer;
