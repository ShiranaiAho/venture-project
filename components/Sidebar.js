import { useState } from "react";
import NextLink from "next/link";
import { FaBars, FaHome, FaTimes, FaEdit, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { showRegister } from "../store/actions";

export default function Sidebar() {
  const { show } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const [sideBar, setSideBar] = useState(false);
  const handleSideBar = () => {
    setSideBar(!sideBar);
  }
  const handleDispatch = () => {
    handleSideBar();
    dispatch(showRegister(!show));
  }
  
  return (
    <>
      <div className="bg-gray-800 fixed flex h-14 inset-x-0 items-center justify-between px-4 shadow-lg text-white top-0">
        <button className="p-2 rounded-full transition hover:bg-purple-600" onClick={handleSideBar}>
          <FaBars />
        </button>
      </div>

      <div>
        <div className={sideBar ? "bg-black cursor-pointer fixed inset-0 opacity-70 visible" : "hidden opacity-0"} onClick={handleSideBar}></div>
          <div className={sideBar ? "bg-gray-800 duration-300 fixed inset-y-0 py-4 left-0 transition-left w-64" : "bg-gray-800 duration-500 fixed inset-y-0 py-4 -left-full transition-left w-64"}>
          <button className="absolute -right-8 p-1 rounded-full text-gray-500 top-4 transition hover:bg-red-400" onClick={handleSideBar}>
            <FaTimes />
          </button>

          <ul className="font-normal text-white">
            <li onClick={handleSideBar}>
              <NextLink href="/">
                <a className="bg-gray-700 font-medium inline-flex items-center px-4 py-2 transition w-full hover:bg-purple-600">
                  <FaHome className="mr-3" />
                  Home
                </a>
              </NextLink>
            </li>
            <li onClick={handleSideBar, handleDispatch}>
              <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-purple-600">
                <FaEdit className="mr-3" />
                Register
              </a>
            </li>
            <li onClick={handleSideBar}>
              <NextLink href="/clients">
                <a className="inline-flex items-center px-4 py-2 transition w-full hover:bg-purple-600">
                  <FaUser className="mr-3" />
                  Clients
                </a>
              </NextLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}