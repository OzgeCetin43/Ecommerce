import { Layout, Image } from "antd";

import { Banners } from "../../assets/data/banners";

import "./banner-list.css";

const { Content } = Layout;

export const BannerList = () => {
  return (
    <Content className="banner-list-container">
      {Banners.map((banner) => (
        <Image src={banner.image} key={banner.id} alt="banner" />
      ))}
    </Content>
  );
};
