"use client";
import Head from "next/head";
import Form from "../components/Forms/Forms";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import Cart from "../components/Cart/Cart";
import { useState } from "react";

export default function Home() {
  const [usedCarts, setUsedCarts] = useState([]);
  console.log("this ", usedCarts);

  return (
    <div style={{ width: "100vw" }}>
      <Head>
        <title>Create Next App</title>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor'
          crossorigin='anonymous'
        />
      </Head>
      <div className='card'>
        <Form handler={setUsedCarts} />

        <ShoppingList />

        {usedCarts.map((item) => (
          <Cart handlerState={setUsedCarts} data={item} />
        ))}
      </div>
    </div>
  );
}
