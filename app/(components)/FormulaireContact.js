"use client";

import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import emailjs from "emailjs-com";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_17pyr9r",
    "template_1m8zakk",
    form.current,
    "XqT6PBNLhbBRW2ZYO"
  );

  e.target.reset();
};

const FormulaireContact = () => (
  <Form
    className="w-4/5 mx-auto lg:w-1/2"
    {...layout}
    name="nest-messages"
    onFinish={sendEmail}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item name={["user", "nom"]} label="Nom" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item
      name={["user", "prenom"]}
      label="Prenom"
      rules={[{ required: true }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={["user", "email"]}
      label="Email"
      rules={[{ type: "email" }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={["user", "age"]}
      label="Age"
      rules={[{ type: "number", min: 0, max: 99 }]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item name={["user", "ville"]} label="Ville">
      <Input />
    </Form.Item>
    <Form.Item name={["user", "message"]} label="Message">
      <Input.TextArea />
    </Form.Item>
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button className="bg-sky-300 text-white" htmlType="submit">
        Envoyez
      </Button>
    </Form.Item>
  </Form>
);

export default FormulaireContact;
