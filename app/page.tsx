"use client";

import React from 'react';
import { Button, Typography, Row, Col, Card, DatePicker, Modal, Statistic, Form, Input, message } from 'antd';
import { GlobalOutlined, WifiOutlined, EnvironmentOutlined, StarOutlined, PhoneOutlined, UserOutlined, ShoppingCartOutlined, DollarOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import dayjs from "dayjs";

const { Title, Paragraph } = Typography;

export default function HomePage() {
  const { translations, toggleLanguage, language } = useLanguage();
  const [date, setDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isContactModalVisible, setIsContactModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleCheckAvailability = () => {
    setIsCheckingAvailability(true);
    // Simulate availability check
    setTimeout(() => {
      setIsAvailable(Math.random() > 0.5);
    }, 1000);
  };

  const handleContactSubmit = async (values: any) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      message.success('Mensaje enviado con éxito');
      setIsContactModalVisible(false);
      form.resetFields();
    } catch (error) {
      message.error('Error al enviar el mensaje');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <Button 
          icon={<GlobalOutlined />}
          onClick={toggleLanguage}
          className="bg-white/80 hover:bg-white"
        >
          {language.toUpperCase()}
        </Button>
      </div>

      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <Title className="text-white text-center mb-4" level={1}>
            {translations.hero.title}
          </Title>
          <Paragraph className="text-white text-center text-lg mb-8">
            {translations.hero.subtitle}
          </Paragraph>
          <Button type="primary" size="large">
            {translations.hero.bookNow}
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <Title className="text-center mb-12" level={2}>
          {translations.features.title}
        </Title>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <Card className="h-full">
              <Title level={3}>{translations.features.amenities.title}</Title>
              <Paragraph>{translations.features.amenities.description}</Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="h-full">
              <Title level={3}>{translations.features.location.title}</Title>
              <Paragraph>{translations.features.location.description}</Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="h-full">
              <Title level={3}>{translations.features.service.title}</Title>
              <Paragraph>{translations.features.service.description}</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Card>
                <Statistic
                  title="Huéspedes Satisfechos"
                  value={1128}
                  prefix={<UserOutlined />}
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Statistic
                  title="Reservas Exitosas"
                  value={93}
                  prefix={<ShoppingCartOutlined />}
                />
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Statistic
                  title="Experiencias"
                  value={156}
                  prefix={<StarOutlined />}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">{translations.booking.title}</h2>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <DatePicker
                value={date}
                onChange={(date) => setDate(date)}
                className="w-[240px]"
              />

              <Button 
                type="primary"
                onClick={handleCheckAvailability}
                className="w-[240px]"
              >
                {translations.booking.checkAvailability}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{translations.contact.title}</h2>
          <div className="flex items-center justify-center gap-2 text-lg mb-4">
            <PhoneOutlined />
            <span>{translations.contact.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg mb-4">
            <MailOutlined />
            <span>{translations.contact.email}</span>
          </div>
          <p className="mt-4 text-gray-600 mb-8">
            {translations.contact.address}
          </p>
          <Button 
            type="primary" 
            onClick={() => setIsContactModalVisible(true)}
          >
            Envíanos un mensaje
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>{translations.footer.copyright}</p>
          <p className="mt-2">{translations.footer.address}</p>
          <p className="mt-2">{translations.footer.contact}</p>
        </div>
      </footer>

      {/* Availability Check Modal */}
      <Modal
        open={isCheckingAvailability}
        onCancel={() => setIsCheckingAvailability(false)}
        footer={null}
        centered
      >
        <div className="text-center py-4">
          <h3 className="text-xl mb-4">
            {isAvailable === null ? (
              "Verificando disponibilidad..."
            ) : isAvailable ? (
              translations.booking.available
            ) : (
              translations.booking.notAvailable
            )}
          </h3>
          {isAvailable !== null && (
            <Button onClick={() => setIsCheckingAvailability(false)}>
              {translations.booking.close}
            </Button>
          )}
        </div>
      </Modal>

      {/* Contact Form Modal */}
      <Modal
        title="Envíanos un mensaje"
        open={isContactModalVisible}
        onCancel={() => setIsContactModalVisible(false)}
        footer={null}
        centered
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleContactSubmit}
        >
          <Form.Item
            name="name"
            label="Nombre"
            rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Por favor ingresa tu email' },
              { type: 'email', message: 'Por favor ingresa un email válido' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="message"
            label="Mensaje"
            rules={[{ required: true, message: 'Por favor ingresa tu mensaje' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}