import { createSlice, configureStore, PayloadAction } from "npm:@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: undefined,
  },
  reducers: {
    setName: ( state: any, action: PayloadAction<string> ) => {
      state.name = action.payload;
    },
  },
});

const store = configureStore({
  reducer: userSlice.reducer,
});

export const { setName } = userSlice.actions;
export default store;
