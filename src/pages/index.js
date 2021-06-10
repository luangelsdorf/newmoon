import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import ComingSoonHeading from "../components/ComingSoonHeading";
import CountDown from "../components/CountDown";
import LaunchButton from "../components/LaunchButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>NewMoon</title>
        <link rel="stylesheet" href="/css/global.css"/>
      </Head>

      <Header />
      <Main>
        <ComingSoonHeading>COMING SOON</ComingSoonHeading>
        <CountDown>Five, four, three, two, one, zero, ignition...</CountDown>
        <LaunchButton><span>LAUNCH!</span></LaunchButton>
      </Main>
    </>
  )
}
