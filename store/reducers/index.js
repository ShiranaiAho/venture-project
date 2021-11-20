import { SET_USER, SHOW_REGISTER } from "../actions"

const mockedFirstUser = {
  firstName: 'Peter',
  lastName: 'Parker',
  email: 'imnotspiderman@itstrue.com',
  tel: '17189975700',
  cep: '11367',
  address1: '6530 Kissena Blvd, Flushing',
  address2: '',
  birthday: '10/08/62',
  cpf: '12345678912',
  monthlyIncome: '1500',
}

const INITIAL_STATE = {
  users: [mockedFirstUser],
  show: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_REGISTER:
      return {...state, show: action};
    case SET_USER:
      return {...state, users: [...state.users, action.payload]};
    default:
      return state;
  }
};

export default reducer;