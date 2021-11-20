import { useSelector } from "react-redux";
import { useState } from "react";
import Head from 'next/head';
import Register from '../components/register'
import Sidebar from '../components/Sidebar'
import Footer from "../components/Footer";
import styles from '../styles/Home.module.css'

export default function Clients() {
  const { users } = useSelector((state) => state);
  const [expand, setExpand] = useState('id');
  const handleExpand = (id) => {
    setExpand(id);
    if(expand === id) {
      setExpand('id')
    }
  };

  return (
    <div className="bg-gray-900 text-white px-8">
      <Head>
        <title>VentureLabs - Clients</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col py-16 px-0 items-center min-h-screen">
        <Sidebar />
        <Register />

        <div className="bg-gray-900 text-white px-8 border-b border-white border-solid w-full">
          <h1 className={styles.title}>Clientes</h1>
        </div>
        <div className="px-5 py-2 w-full">
          {users.map((user, id) => (
            expand !== id ? 
            <div key={id} className="flex justify-between border rounded-xl p-4 mb-2" onClick={() => handleExpand(id)}>
              <p>{`Nome Completo: ${user.firstName} ${user.lastName}`}</p>
              <p>{`E-mail: ${user.email}`}</p>
              <p>{`Telefone: ${user.tel}`}</p>
            </div>
            :
            <div key={id} className="flex flex-col justify-between border rounded-xl p-4 mb-2" onClick={() => handleExpand(id)}>
              <p>{`Nome: ${user.firstName}`}</p>
              <p>{`Sobrenome: ${user.lastName}`}</p>
              <p>{`E-mail: ${user.email}`}</p>
              <p>{`Telefone: ${user.tel}`}</p>
              <p>{`CEP: ${user.cep}`}</p>
              <p>{`Endereço 1: ${user.address1}`}</p>
              <p>{`Endereço 2: ${user.address2}`}</p>
              <p>{`Data Nascimento: ${user.birthday}`}</p>
              <p>{`CPF: ${user.cpf}`}</p>
              <p>{`Renda Mensal: ${user.monthlyIncome}`}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}