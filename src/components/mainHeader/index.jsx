import { Layout } from "antd";

import MainHeaderTop from "./mainHeaderTop";
import MainHeaderCenter from "./mainHeaderCenter";
import MainHeaderBottom from "./mainHeaderBottom";

import "./main-header.css";

const { Header } = Layout;

export const MainHeader = () => {
  return (
    <Header className="main-header">
      <MainHeaderTop />
      <MainHeaderCenter />
      <MainHeaderBottom />
    </Header>
  );
};
