import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Form, FormType } from './types'


const initialState: FormType = {
  formInfo: {
    name: '',
    email: '',
    phone: ''
  }
}

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    addFormInfo: (state, action: PayloadAction<Form>) => {
      state.formInfo = action.payload
    }
  }
})

export const {addFormInfo} = infoSlice.actions

export default infoSlice.reducer