import React from "react";
import Layout from "../../Components/Layout";
import { CopyBlock, atomOneLight } from "react-code-blocks";

const Code = (props: any) => {
  return (
    <CopyBlock
      text={`const testFunction = (num: number) => { 
      let sum: number = 3
      let result: number[] = []
      for (let index = 0; index < num; index++) {
        const prefix: number = index * 2
        sum += prefix
        result.push(sum)
      }
      
      return result
    }`}
      language={"ts"}
      showLineNumbers={true}
      theme={atomOneLight}
      wrapLines
    />
  );
};

const Home = () => (
  <Layout>
    <h2>Function Test</h2>
    <Code />
  </Layout>
);

export default Home;
