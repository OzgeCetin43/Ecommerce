import { Layout } from "antd";

import {
  BannerList,
  BlackFridayBanner,
  BlogList,
  CategoryList,
  FeaturedProductList,
  FreeShipping,
  HomeBannerSlider,
  HomeSlider,
  LatestProductList,
  PopularProductList,
  ServicesList,
  WatchBanner,
} from "../../components";

const { Content } = Layout;

import "./home.css";

export const Home = () => {
  return (
    <>
      <FreeShipping />
      <Content className="home-inner-container">
        <HomeSlider />
        <BannerList />
      </Content>
      <CategoryList />
      <PopularProductList />
      <WatchBanner />
      <LatestProductList type="fashion" />
      <BlackFridayBanner />
      <FeaturedProductList type="fashion" />
      <HomeBannerSlider />
      <BlogList />
      <ServicesList />
    </>
  );
};
