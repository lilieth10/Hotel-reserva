'use client';

import React, { useState } from 'react';
import { Form, Input, Button, message, Card, Row, Col, Typography } from 'antd';
import { useLanguage } from '@/lib/language-context';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export default function ContactPage() {
  const { translations } = useLanguage();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      // Aquí iría la lógica para enviar el formulario
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulación de envío
      message.success(translations.contact.success);
      form.resetFields();
    } catch (error) {
      message.error(translations.contact.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Title level={2} className="text-center mb-8">{translations.contact.title}</Title>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
            >
              <Form.Item
                name="name"
                label="Nombre"
                rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Por favor ingrese su email' },
                  { type: 'email', message: 'Ingrese un email válido' }
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Teléfono"
                rules={[{ required: true, message: 'Por favor ingrese su teléfono' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="message"
                label="Mensaje"
                rules={[{ required: true, message: 'Por favor ingrese su mensaje' }]}
              >
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading} block>
                  Enviar Mensaje
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card>
            <Title level={4}>Información de Contacto</Title>
            <Paragraph>
              <strong>Dirección:</strong><br />
              {translations.contact.address}
            </Paragraph>
            <Paragraph>
              <strong>Teléfono:</strong><br />
              {translations.contact.phone}
            </Paragraph>
            <Paragraph>
              <strong>Email:</strong><br />
              {translations.contact.email}
            </Paragraph>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.448239660371!2d-68.8472!3d-32.8908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e093ec45179bf%3A0x205a78f6d20b3e0!2sMendoza%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1645567890123!5m2!1ses!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
} 