import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increamentByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  //call async functions
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, () => {
        console.log("incremntAsync.pending");
        
    }).addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    });
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increament, decrement, increamentByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
