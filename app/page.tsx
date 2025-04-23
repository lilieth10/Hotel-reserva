"use client";

import React from 'react';
import { Button, Typography, Row, Col, Card, DatePicker, Modal, Statistic, Form, Input, message } from 'antd';
import { WifiOutlined, EnvironmentOutlined, StarOutlined, PhoneOutlined, UserOutlined, ShoppingCartOutlined, DollarOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import dayjs from "dayjs";

const { Title, Paragraph } = Typography;

export default function Home() {
  const { translations } = useLanguage();
  const [date, setDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isContactModalVisible, setIsContactModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleCheckAvailability = () => {
    message.info('Verificando disponibilidad...');
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
    <div className="space-y-12">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-4">
          <h1 className="text-5xl font-bold">{translations.hero.title}</h1>
          <p className="text-xl">{translations.hero.subtitle}</p>
          <Button type="primary" size="large">
            {translations.hero.bookNow}
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">{translations.features.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title={translations.features.amenities.title}>
            <p>{translations.features.amenities.description}</p>
          </Card>
          <Card title={translations.features.location.title}>
            <p>{translations.features.location.description}</p>
          </Card>
          <Card title={translations.features.service.title}>
            <p>{translations.features.service.description}</p>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-lg text-gray-600">Huéspedes Satisfechos</h3>
          <p className="text-3xl font-bold">1,128</p>
        </div>
        <div>
          <h3 className="text-lg text-gray-600">Reservas Exitosas</h3>
          <p className="text-3xl font-bold">93</p>
        </div>
        <div>
          <h3 className="text-lg text-gray-600">Experiencias</h3>
          <p className="text-3xl font-bold">156</p>
        </div>
      </section>

      {/* Booking Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">{translations.booking.title}</h2>
        <Card>
          <Form layout="vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item label={translations.booking.checkIn}>
                <DatePicker className="w-full" />
              </Form.Item>
              <Form.Item label={translations.booking.checkOut}>
                <DatePicker className="w-full" />
              </Form.Item>
            </div>
            <Button type="primary" onClick={handleCheckAvailability}>
              {translations.booking.checkAvailability}
            </Button>
          </Form>
        </Card>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">{translations.contact.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Form layout="vertical" className="mx-auto w-full max-w-lg">
            <Form.Item label={translations.contact.name}>
              <Input />
            </Form.Item>
            <Form.Item label={translations.contact.email}>
              <Input type="email" />
            </Form.Item>
            <Form.Item label={translations.contact.message}>
              <Input.TextArea rows={4} />
            </Form.Item>
            <Button type="primary">{translations.booking.sendMessage}</Button>
          </Form>
        </div>
      </section>
    </div>
  );
}