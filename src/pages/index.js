import Head from "next/head";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import MainHeading from "../components/MainHeading";
import CountDown from "../components/CountDown";
import LaunchButton from "../components/LaunchButton";
import GetInTouch from "../components/SecondHeading";
import SecondHeading from "../components/SecondHeading";
import Form from "../components/Form";

export default function Home() {
  return (
    <>
      <Head>
        <title>NewMoon</title>
        <link rel="stylesheet" href="/css/global.css"/>
      </Head>

      <Header />

      <MainSection>
        <MainHeading>COMING SOON</MainHeading>
        <CountDown>Five, four, three, two, one, zero, ignition...</CountDown>
        <LaunchButton><span>LAUNCH!</span></LaunchButton>
      </MainSection>

      <MainSection form>
        <SecondHeading>GET IN TOUCH</SecondHeading>
        <Form />
      </MainSection>

      {/*<img src="/img/nave.png" alt="Nave" id="nave" />*/}
    </>
  )
}
