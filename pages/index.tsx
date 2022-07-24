import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import CreateAccount from "../components/CreateAccount";
import RestoreAccount from "../components/RestoreAccount";
import styled from "styled-components";
import * as Web3 from "@solana/web3.js";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title>Wallet Tutorial</title>
        <meta name="description" content="Web3 tutorial for Solana crypto wallet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTitle>
        A simple, non-custodial crypto wallet for managing{" "}
        <a href="https://solana.com/">Solana</a> digital assets.
      </HomeTitle>

      <HomeGrid>
        <CreateAccount />
        <RestoreAccount />
      </HomeGrid>
    </>
  );
};

// *Step 3*: implement a function that gets an account's balance
const refreshBalance = async (network: Web3.Cluster, account: Web3.Keypair | null) => {
  // This line ensures the function returns before running if no account has been set
  if (!account) return 0;

  try {
    // (a) review the import guidance on line 1
    // (b) instantiate a connection using clusterApiUrl with the active network passed in as an argument
    // Documentation References:
    //   https://solana-labs.github.io/solana-web3.js/classes/Connection.html
    //   https://solana-labs.github.io/solana-web3.js/modules.html#clusterApiUrl
    console.log("Balance functionality not implemented yet!");
    const connection = new Web3.Connection(Web3.clusterApiUrl(network), "confirmed");
    console.log(connection)

    // (c) get the key using one of the accessors on the account passed in as an argument
    // Documentation Reference: https://solana-labs.github.io/solana-web3.js/classes/Keypair.html
    const publicKey = account.publicKey;

    // (d) get the account's balance using the connection instance
    // Documentation Reference: https://solana-labs.github.io/solana-web3.js/classes/Connection.html
    const balance = await connection.getBalance(publicKey);
    console.log(balance);

    return balance;
    // (e) You can now delete the console.log statement since the function is implemented!
  } catch (error) {
    console.log(error);
    return 0;
  }
};

const HomeTitle = styled.h1`
  padding: 0 3rem;
  margin: 3rem 1rem;
  line-height: 1.25;
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;

  & > a {
    color: #0070f3;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

const HomeGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  width: 100%;
`;

export default Home;
