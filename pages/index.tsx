import Head from 'next/head'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react';
import styles from '../styles/Home.module.css';
import close from './assets/close-icon.png';
import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function Home() {
  const [list, setList] = useState<string[]>([])
  const [todo, setTodo] = useState<string>('')

  function addList() {
    setList((prev) => [...prev, todo])
    setTodo('');
  }

  function removeList(index: number) {
    const arr = list.filter((item, i) => i !== index);
    setList(arr);
  }

  return (
    <div className='bg-slate-200 min-h-screen h-100 text-black'>
    <h1 className='p-5 pb-0 text-3xl font-bold'>TODO LIST</h1>
    <div className='flex gap-2 px-5 py-3 flex-wrap'>
      <input
        type="text"
        placeholder="Add Task..."
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
        value={todo}
        className="px-3 py-2 rounded-lg bg-white text-black border shadow-sm lg:w-80"
      />
      <input value="Add Task" type="button" onClick={() => addList()} className="bg-[#5F7BE1] text-white px-5 rounded-lg py-2 shadow-sm" />
    </div>
    <div className='h-100 w-100 p-5'>
      <ul className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5'>
        {/* map over and print items */}
        {
          list.map((val: string, index: number) => (
            <li key={index}>
             
              <div className="bg-white shadow-sm p-3 border w-50 h-48 rounded-lg cursor-pointer hover:bg-blue-500/10 transition-all ease-in duration-200 overflow-hidden">
                <div className='flex justify-end items-center'>
                  <span onClick={() => removeList(index)}><AiOutlineCloseCircle size={29} color="red" /></span>
                </div>
                <div className='grid place-content-center place-items-center grid-rows-1 h-[8rem]'>
                  <span className='font-semibold text-xl'>{val}</span>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
  );
}
