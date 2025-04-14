'use client';

import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, BankOutlined, CustomerServiceOutlined, PhoneOutlined, InfoCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { translations } = useLanguage();

  return (
    <Layout>
      <Header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center h-full">
          <Link href="/" className="text-xl font-bold text-primary">
            Hotel Boutique Mendoza
          </Link>
          <Menu mode="horizontal" className="border-0 flex-1 justify-end">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link href="/">{translations.menu.home}</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BankOutlined />}>
              <Link href="/rooms">{translations.menu.rooms}</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CustomerServiceOutlined />}>
              <Link href="/services">{translations.menu.services}</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<PhoneOutlined />}>
              <Link href="/contact">{translations.menu.contact}</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<InfoCircleOutlined />}>
              <Link href="/about">{translations.menu.about}</Link>
            </Menu.Item>
          </Menu>
        </div>
        </Header>
      <Content>
        <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </Content>
      <Footer className="text-center bg-gray-100">
        <p>{translations.footer.copyright}</p>
        <p>{translations.footer.address}</p>
        <p>{translations.footer.contact}</p>
      </Footer>
    </Layout>
  );
};

export default MainLayout; 