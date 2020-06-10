export const RESET = 'RESET';
export const STOP = 'STOP';
export const DECREASE = 'DECREASE';
export const STORE_ID = 'STORE_ID';

export const rTimer = () => ({ type: RESET });
export const sTimer = () => ({ type: STOP });
export const dTimer = () => ({ type: DECREASE });
export const storeID = (id) => ({ type: STORE_ID, id });
