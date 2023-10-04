import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: "",
    info: {
        firstName: "",
        lastName: "",
        middleName: "",
        dateOfBirth: "",
        city: "",
        state: "",
        country: "United States",
    }
}

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setInfo: (state, action) => {
            state.info[action.payload.type] = action.payload.info;
        },
        setUsername: (state, action) => {
            state.username = action.payload.info;
        },
        setPassword: (state, action) => {
            state.password = action.payload.info;
        }
    }
});

export const { setInfo, setUsername, setPassword } = accountSlice.actions;
export default accountSlice.reducer;