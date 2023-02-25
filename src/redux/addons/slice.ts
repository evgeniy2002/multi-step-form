import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import { AddOnsType, targetCheked } from './types'

const initialState: AddOnsType  = {
  items: [
    {
      id: 1,
      title: 'Online service',
      subtitle: 'Access to multiplayer games',
      rateMo: 1,
      checked: false,
    },
    {
      id: 2,
      title: 'Larger storage',
      subtitle: 'Extra 1TB of cloud save',
      rateMo: 2,
      checked: false,
    },
    {
      id: 3,
      title: 'Customizable profile',
      subtitle: 'Custom theme on your profile',
      rateMo: 2,
      checked: false,
    },
  ],

}

export const addOnsSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    changeAddOns: (state, action: PayloadAction<targetCheked>) => {
      const findItem = state.items.find(item => item.id === action.payload.id)
      
      if(findItem){
        findItem.checked = action.payload.nextSeen
      }

    }
  }
})
export const {changeAddOns} = addOnsSlice.actions

export default addOnsSlice.reducer