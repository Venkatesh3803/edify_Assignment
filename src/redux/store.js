import { configureStore } from '@reduxjs/toolkit'
import authReducer from './AuthReducer'


export default configureStore({
  reducer: {
    user: authReducer
  },
})

