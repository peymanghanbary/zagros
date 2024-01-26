import { createSlice } from '@reduxjs/toolkit'
import { userDataInit } from '../../constant'
import { storeData } from '../../helpers'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: userDataInit
  },
  reducers: {
    setUser: (state, action) => {
        let user=action.payload
        user.loggedIn=true
        storeData("@user", user);
        state.user = user
    },
    logout: (state) => {
        let user={...userDataInit}
        user.loggedIn=false
        storeData("@user", null);
        state.user = user
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser,logout } = userSlice.actions

export default userSlice.reducer