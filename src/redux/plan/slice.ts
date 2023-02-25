import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { Plan, PlanType } from './types';

const initialState: PlanType = {
  planInfo: {
    title: '',
    rate: 0,
    yearly: false,
  }
};

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    addPlanInfo: (state, action: PayloadAction<Plan>) => {
      state.planInfo = action.payload
    }
  },
});
export const {addPlanInfo} = planSlice.actions

export default planSlice.reducer