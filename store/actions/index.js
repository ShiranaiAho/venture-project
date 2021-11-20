export const SET_USER = "SET_USER";
export const SHOW_REGISTER = "SHOW_REGISTER";

export const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});

export const showRegister = (show) => ({
  type: SHOW_REGISTER,
  show,
});