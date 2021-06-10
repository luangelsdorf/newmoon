import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>NewMoon</title>
        <link rel="stylesheet" href="/css/global.css"/>
      </Head>

      <Header />
    </>
  )
}
