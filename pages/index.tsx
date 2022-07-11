import HomePage from "../components/landingpage/HomePage";
import Head from "next/head";
import { NextPage } from "next";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Netflix Indonesia - Watch TV Shows Online, Watch
          Movies Online
        </title>
        <meta
          name="description"
          content="Unlimited movies, TV shows, and more."
        />
      </Head>
      <HomePage />
    </Fragment>
  );
};

export default Home;
