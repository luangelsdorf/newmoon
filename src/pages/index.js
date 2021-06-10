import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import ComingSoonHeading from "../components/ComingSoonHeading";

export default function Home() {
  return (
    <>
      <Head>
        <title>NewMoon</title>
        <link rel="stylesheet" href="/css/global.css"/>
      </Head>

      <Header />
      <Main>
        <ComingSoonHeading>
          COMING SOON
        </ComingSoonHeading>
      </Main>
    </>
  )
}
