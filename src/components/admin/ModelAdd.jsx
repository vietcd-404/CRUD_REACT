import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";

const ModelAdd = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Thêm
      </Button>
      <Modal
        title="Thêm sản phẩm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item
            label="Tên"
            name="tenLoai"
            style={{ width: "360px", marginLeft: "40px" }}
          >
            <Input placeholder="Tên" />
          </Form.Item>
          <Form.Item label="Trạng thái" style={{ width: "400px" }}>
            <Input placeholder="Trạng thái" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModelAdd;
