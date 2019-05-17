function isDataLoaded(state) {
  if (state.meta.isFilled && state.scheduleData.length && !state.meta.isRejected) {
    return true;
  }
  return false;
}

export const isLoaded = state => state.meta.isFilled;

export const getScheduleData = state => {
  if (isDataLoaded(state)) {
    return state.scheduleData;
  }
  return [];
};
