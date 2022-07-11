import Main from "../../components/browse-page/Main";
import Head from "next/head";
import { NextPage } from "next";
import { Fragment } from "react";

const Browse: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home - Netflix</title>
        <meta
          name="description"
          content="All movies you can watch"
        />
      </Head>
      <Main />
    </Fragment>
  );
};

export default Browse;
