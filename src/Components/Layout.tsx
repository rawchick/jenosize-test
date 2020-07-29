import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./Header";
import Footer from "./Footer";

const { Content } = Layout;

const MainLayout = (props: any) => {
  console.log(props)
  return (
    <Layout>
      <HeaderComponent getResult={props.searchResultSet}/>
      <Content style={{ padding: "50px 50px", marginBottom: "50px", backgroundColor: '#F4F6F6' }}>{props.children}</Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
