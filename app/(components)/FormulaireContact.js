"use client";

import emailjs from "emailjs-com";
import React, { useRef } from "react";
/* import { Button, Form, Input, InputNumber } from "antd"; */

const FormulaireContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_17pyr9r",
      "template_9kxfpvs",
      form.current,
      "XqT6PBNLhbBRW2ZYO"
    );

    e.target.reset();
  };

  return (
    <form
      className="flex flex-col  w-4/5 lg:w-1/2 mx-auto border-2 border-sky-100 shadow-md rounded-md p-5"
      ref={form}
      onSubmit={sendEmail}
    >
      <label>* Nom</label>
      <input
        className="lg:w-1/3 border-2 rounded-md m-2 p-1"
        type="text"
        name="name"
        required
      />
      <label>* Prénom</label>

      <input
        className="lg:w-1/3 border-2 rounded-md m-2 p-1"
        type="text"
        name="firstname"
        required
      />
      <label>Email</label>

      <input
        className="lg:w-1/3 border-2 rounded-md m-2 p-1"
        type="email"
        name="email"
        required
      />
      <label>Ville</label>

      <input
        className="lg:w-1/3 border-2 rounded-md m-2 p-1"
        type="text"
        name="firstname"
        required
      />
      <label>Message</label>

      <textarea
        className="border-2 rounded-md m-2 p-1"
        name="message"
        rows="7"
        required
      ></textarea>
      <button
        className="w-1/2 lg:w-1/6 mx-auto border-2 bg-sky-400 text-white p-2 m-2 rounded-md hover:bg-sky-300"
        type="submit"
      >
        Envoyez
      </button>
    </form>
  );
};

/* const FormulaireContact = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

 
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
  

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      className="w-4/5 mx-auto lg:w-1/2"
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "nom"]}
        label="Nom"
        rules={[{ required: true }]}
      >
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
}; */

export default FormulaireContact;
