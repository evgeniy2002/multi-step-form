import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
type PropsType = {
  step: number
  activePlan: null | number
  confirm: boolean
}

const initialState: PropsType = {
  step: 1,
  activePlan: 1,
  confirm: false
}

export const stepInfo = createSlice({
  name: 'step',
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.step += 1
    },
    decrementStep: (state)=>{
      state.step -= 1
    },
    decrementStepValue: (state, action: PayloadAction<number>)=>{
      state.step -= action.payload
    },
    choosePlan: (state, action: PayloadAction<null | number>) => {
      state.activePlan = action.payload
    },
    confirmAll: (state) => {
      state.confirm = true
    }
  }
})

export const {incrementStep, decrementStep,decrementStepValue,choosePlan,confirmAll} = stepInfo.actions

export default stepInfo.reducer