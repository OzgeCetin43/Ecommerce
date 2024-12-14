import { Modal, Layout, Typography, Rate } from "antd";

import { Zoom } from "../zoom";

import "./product-detail-modal.css";

const { Content } = Layout;
const { Title, Text } = Typography;

export const ProductDetailModal = ({
  product,
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <Modal
      title=""
      centered
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
      width={1100}
      className="product-detail-modal"
    >
      <Content className="product-detail-modal-left-container">
        <Zoom />
      </Content>
      <Content className="product-detail-modal-right-container">
        <Title level={2}>{product?.name}</Title>
        <Rate disabled defaultValue={product?.rate} />
        <Text className="product-detail-brand-text">
          Brand: <b>{product?.brand}</b>
        </Text>
        <Text className="product-detail-available-size-text">
          Available Sizes: <b>{product?.size}</b>
        </Text>
        <Text className="product-detail-available-color-text">
          Available Colors: <b>{product?.color}</b>
        </Text>
        <Content className="product-detail-modal-price-container">
          <Text className="product-detail-modal-old-price-text">
            {product?.oldPrice}
          </Text>
          <Text className="product-detail-modal-new-price-text">
            {product?.newPrice}
          </Text>
        </Content>
      </Content>
    </Modal>
  );
};
