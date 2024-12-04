import { Layout } from "antd";

import { Outlet } from "react-router-dom";

import { MainFooter, MainHeader } from "../../components";

const { Content } = Layout;

export const MainLayout = () => {
  return (
    <>
      <Layout>
        <MainHeader />
        <Content style={{ backgroundColor: "#fff" }}>
          <Outlet />
        </Content>
        <MainFooter />
      </Layout>
    </>
  );
};
