import { Link } from "react-router-dom";
import { Layout, Typography, Card, Image, Button } from "antd";
import { FaRegClock } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

import { Blogs } from "../../assets/data/blogs";

import "./blog-list.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const BlogList = () => {
  return (
    <Content className="blog-list-container">
      <Title level={4} className="blog-list-title">
        From Our Blog
      </Title>
      <Content className="blogs-container">
        {Blogs.map((blog) => (
          <Card hoverable className="blog-list-card" key={blog.id}>
            <Content className="blog-list-image-container">
              <Image src={blog.image} alt={blog.title} preview={false} />
              <Text className="blog-list-date-text">
                <FaRegClock />
                {blog.date}
              </Text>
            </Content>
            <Content className="blog-list-info-container">
              <Link to="/">
                <Title level={5} className="blog-title">
                  {blog.title}
                </Title>
              </Link>
              <Text className="blog-description">
                {`${blog.content.slice(0, 200)}...`}
              </Text>
              <Button
                icon={<FaLongArrowAltRight />}
                iconPosition="end"
                className="blog-list-read-more-button"
              >
                Read More
              </Button>
            </Content>
          </Card>
        ))}
      </Content>
    </Content>
  );
};
