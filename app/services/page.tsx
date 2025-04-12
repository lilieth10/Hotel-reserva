'use client';

import React from 'react';
import { Card, Row, Col, Typography, Image } from 'antd';
import { useLanguage } from '@/lib/language-context';

const { Title, Paragraph } = Typography;

const services = [
  {
    id: 1,
    name: 'Tour de Viñedos',
    description: 'Recorrido por las mejores bodegas de Mendoza con degustación de vinos premium',
    price: 'ARS 15.000',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '4 horas'
  },
  {
    id: 2,
    name: 'Spa & Bienestar',
    description: 'Tratamientos de spa con productos naturales y masajes relajantes',
    price: 'ARS 8.000',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '2 horas'
  },
  {
    id: 3,
    name: 'Cena Gourmet',
    description: 'Experiencia gastronómica con platos típicos de la región y maridaje de vinos',
    price: 'ARS 12.000',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '3 horas'
  },
  {
    id: 4,
    name: 'Excursión a los Andes',
    description: 'Tour guiado por la cordillera de los Andes con almuerzo incluido',
    price: 'ARS 20.000',
    image: 'https://images.unsplash.com/photo-1518546305927-5a695f19b7b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: 'Día completo'
  }
];

export default function ServicesPage() {
  const { translations } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Title level={2} className="text-center mb-8">Nuestros Servicios</Title>
      <Row gutter={[16, 16]}>
        {services.map(service => (
          <Col xs={24} sm={12} lg={6} key={service.id}>
            <Card
              hoverable
              cover={<Image alt={service.name} src={service.image} height={200} />}
            >
              <Card.Meta
                title={service.name}
                description={
                  <>
                    <Paragraph>{service.description}</Paragraph>
                    <Paragraph strong>Precio: {service.price}</Paragraph>
                    <Paragraph>Duración: {service.duration}</Paragraph>
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