'use client';

import React from 'react';
import { Card, Row, Col, Typography, Image } from 'antd';
import { useLanguage } from '@/lib/language-context';

const { Title, Paragraph } = Typography;

const rooms = [
  {
    id: 1,
    name: 'Suite Premium',
    description: 'Amplia suite con vista a los Andes, jacuzzi privado y terraza',
    price: 'ARS 45.000',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Jacuzzi privado', 'Terraza con vista', 'Minibar', 'WiFi de alta velocidad']
  },
  {
    id: 2,
    name: 'Habitación Deluxe',
    description: 'Habitación espaciosa con vista al jardín y baño de mármol',
    price: 'ARS 35.000',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Baño de mármol', 'Vista al jardín', 'Smart TV', 'Caja fuerte']
  },
  {
    id: 3,
    name: 'Habitación Standard',
    description: 'Habitación confortable con todas las comodidades necesarias',
    price: 'ARS 25.000',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['WiFi', 'TV LED', 'Aire acondicionado', 'Servicio de habitación']
  }
];

export default function RoomsPage() {
  const { translations } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Title level={2} className="text-center mb-8">Nuestras Habitaciones</Title>
      <Row gutter={[16, 16]}>
        {rooms.map(room => (
          <Col xs={24} sm={12} lg={8} key={room.id}>
            <Card
              hoverable
              cover={
                <div style={{ height: '300px', overflow: 'hidden' }}>
                  <Image
                    alt={room.name}
                    src={room.image}
                    className="object-cover w-full h-full"
                    preview={true}
                  />
                </div>
              }
            >
              <Card.Meta
                title={room.name}
                description={
                  <>
                    <Paragraph>{room.description}</Paragraph>
                    <Paragraph strong>Precio por noche: {room.price}</Paragraph>
                    <ul className="list-disc pl-4">
                      {room.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
} 