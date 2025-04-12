'use client';

import React from 'react';
import { Card, Row, Col, Typography, Image } from 'antd';
import { useLanguage } from '@/lib/language-context';

const { Title, Paragraph } = Typography;

const team = [
  {
    id: 1,
    name: 'Juan Pérez',
    position: 'Gerente General',
    image: 'https://api.dicebear.com/7.x/personas/svg?seed=john&backgroundColor=b6e3f4',
    description: 'Con más de 15 años de experiencia en la industria hotelera, Juan lidera nuestro equipo con pasión y dedicación.'
  },
  {
    id: 2,
    name: 'María González',
    position: 'Directora de Experiencias',
    image: 'https://api.dicebear.com/7.x/personas/svg?seed=maria&backgroundColor=ffdfbf',
    description: 'Especialista en turismo enológico, María diseña experiencias únicas para nuestros huéspedes.'
  },
  {
    id: 3,
    name: 'Carlos Rodríguez',
    position: 'Chef Ejecutivo',
    image: 'https://api.dicebear.com/7.x/personas/svg?seed=carlos&backgroundColor=c0aede',
    description: 'Con una trayectoria en los mejores restaurantes de Mendoza, Carlos crea platos que combinan tradición e innovación.'
  }
];

export default function AboutPage() {
  const { translations } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Title level={2} className="text-center mb-8">Sobre Nosotros</Title>
      
      <Card className="mb-8">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Hotel Boutique Mendoza"
              className="rounded-lg"
            />
          </Col>
          <Col xs={24} md={12}>
            <Title level={3}>Nuestra Historia</Title>
            <Paragraph>
              Hotel Boutique Mendoza nació en 2010 con la visión de ofrecer una experiencia única en el corazón de la región vitivinícola más importante de Argentina. Nuestro hotel combina la elegancia de la arquitectura colonial con las comodidades modernas, creando un ambiente acogedor y sofisticado.
            </Paragraph>
            <Paragraph>
              Ubicado en una de las zonas más privilegiadas de la ciudad, nuestro establecimiento se ha convertido en un referente del turismo enológico, ofreciendo a nuestros huéspedes la oportunidad de vivir la cultura del vino en su máxima expresión.
            </Paragraph>
          </Col>
        </Row>
      </Card>

      <Title level={3} className="text-center mb-8">Nuestro Equipo</Title>
      <Row gutter={[16, 16]}>
        {team.map(member => (
          <Col xs={24} sm={12} lg={8} key={member.id}>
            <Card
              hoverable
              cover={
                <div style={{ height: '300px', overflow: 'hidden', backgroundColor: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    alt={member.name}
                    src={member.image}
                    preview={false}
                    style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                  />
                </div>
              }
            >
              <Card.Meta
                title={member.name}
                description={
                  <>
                    <Paragraph strong>{member.position}</Paragraph>
                    <Paragraph>{member.description}</Paragraph>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mt-8">
        <Title level={3} className="text-center mb-4">Nuestros Valores</Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <div className="text-center">
              <Title level={4}>Excelencia</Title>
              <Paragraph>
                Nos comprometemos a ofrecer el más alto nivel de servicio y atención a nuestros huéspedes.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="text-center">
              <Title level={4}>Autenticidad</Title>
              <Paragraph>
                Promovemos la cultura local y las tradiciones mendocinas en cada aspecto de nuestra experiencia.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="text-center">
              <Title level={4}>Sostenibilidad</Title>
              <Paragraph>
                Implementamos prácticas responsables para preservar el medio ambiente y apoyar a la comunidad local.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
} 