import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, showRegister } from "../store/actions";
import { FaTimes } from "react-icons/fa";

export default function register() {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    cep: '',
    address1: '',
    address2: '',
    birthday: '',
    cpf: '',
    monthlyIncome: '',
  });
  const { show } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handleChange = (target, key) => {
    setNewUser({...newUser, [key]: target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = page < 3 ? page + 1 : 1;
    setPage(value);
    if (page === 3) {
      dispatch(setUser(newUser));
      handleRegister();
    }
  }
  const handleRegister = () => {
    dispatch(showRegister(!show));
    setPage(1);
  }

  return (
    <>
      <div className="flex justify-center items-center" >
        <div className={show ? "bg-black cursor-pointer fixed inset-0 opacity-70 visible" : "hidden opacity-0"} onClick={handleRegister}></div>
        <div className={show ? "bg-gray-800 duration-300 fixed inset-y-10 py-0 transition-bottom w-1/3 rounded-xl" : "bg-gray-800 duration-500 fixed inset-y-10 py-0 -left-full transition-left w-1/3 rounded-xl"}>
          <div className="py-5 bg-purple-700 rounded-t-xl">
            <h3 className="text-center font-bold text-5x1">Register</h3>
          </div>
          <button className="absolute -right-8 p-1 rounded-full text-gray-500 top-4 transition hover:bg-red-400" onClick={handleRegister}>
            <FaTimes />
          </button>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {page === 1 ?
              <div className="flex flex-col p-5">
                <label>Nome</label>
                <input onChange={({ target }) => handleChange(target, 'firstName')} required className="rounded-lg bg-gray-900 border-2 h-9 mb-5" />

                <label>Sobrenome</label>
                <input onChange={({ target }) => handleChange(target, 'lastName')} required className="rounded-lg bg-gray-900 border-2 h-9 mb-5" />

                <label>E-mail</label>
                <input onChange={({ target }) => handleChange(target, 'email')} required type="email" className="rounded-lg bg-gray-900 border-2 h-9 mb-5" />

                <label>Telefone</label>
                <input onChange={({ target }) => handleChange(target, 'tel')} required pattern="[0-9]{10,}" type="tel" className="rounded-lg bg-gray-900 border-2 h-9 mb-5" />
                <button 
                  className="bg-purple-700 py-5 font-bold rounded-lg mt-28 hover:bg-purple-500"
                  onSubmit={handleSubmit}
                >
                  Próximo
                </button>
              </div>
            : ''}
            {page === 2 ?
              <div className="flex flex-col p-5">
                <label>CEP</label>
                <input onChange={({ target }) => handleChange(target, 'cep')} required pattern="[0-9]{8}" className="rounded-lg bg-gray-900 border-2 h-9 mb-5" />

                <label>Endereço 1</label>
                <input onChange={({ target }) => handleChange(target, 'address1')} required className="rounded-lg bg-gray-900 border-2 h-9 mb-5" />

                <label>Endereço 2</label>
                <input onChange={({ target }) => handleChange(target, 'address2')} className="rounded-lg bg-gray-900 border-2 h-9 mb-5" />
                <button 
                  className="bg-purple-700 py-5 font-bold rounded-lg mt-48 hover:bg-purple-500"
                  onSubmit={handleSubmit}
                >
                  Próximo
                </button>
              </div>
            : ''}
            {page === 3 ?
              <div className="flex flex-col p-5">
                <label>Data de nascimento</label>
                <input onChange={({ target }) => handleChange(target, 'birthday')} required type="date" className="rounded-lg bg-gray-900 border-2 h-9 mb-5" />

                <label>CPF</label>
                <input onChange={({ target }) => handleChange(target, 'cpf')} required pattern="[0-9]{11}" className="rounded-lg bg-gray-900 border-2 h-9 mb-5" />

                <label>Renda Mensal</label>
                <input onChange={({ target }) => handleChange(target, 'monthlyIncome')} required type="number" min="0" step="any" className="rounded-lg bg-gray-900 border-2 h-9 mb-5" />
                <button 
                  className="bg-purple-700 py-5 font-bold rounded-lg mt-48 hover:bg-purple-500"
                  onSubmit={handleSubmit}
                >
                  Salvar
                </button>
              </div>
            : ''}
          </form>
        </div>
      </div>
    </>
  )
}