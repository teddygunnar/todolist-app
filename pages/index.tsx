import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <h1>TODO LIST</h1>
    <div>
      <input
        type="text"
        placeholder="add item... "
      />
      <input value="ADD" type="button" />
    </div>
    <div>
      <ul>
        {/* map over and print items */}
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  </>
  );
}
