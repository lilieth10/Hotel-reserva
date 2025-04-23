'use client';

import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { HomeOutlined, BankOutlined, CustomerServiceOutlined, PhoneOutlined, InfoCircleOutlined, GlobalOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { translations, toggleLanguage, language } = useLanguage();

  return (
    <Layout className="min-h-screen bg-[#FAF6F1]">
      <Header className="w-full bg-[#FAF6F1] shadow-sm p-0">
        <div className="container mx-auto flex justify-between items-center h-full px-4">
          <Link href="/" className="text-xl font-bold text-[#9C8B7A] hover:text-[#8A796A]">
            Hotel Boutique Mendoza
          </Link>
          <div className="flex items-center">
            <Menu mode="horizontal" className="border-0 text-[#9C8B7A] bg-[#FAF6F1] mr-4">
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link href="/" className="text-[#9C8B7A] hover:text-[#8A796A]">{translations.menu.home}</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<BankOutlined />}>
                <Link href="/rooms" className="text-[#9C8B7A] hover:text-[#8A796A]">{translations.menu.rooms}</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<CustomerServiceOutlined />}>
                <Link href="/services" className="text-[#9C8B7A] hover:text-[#8A796A]">{translations.menu.services}</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<PhoneOutlined />}>
                <Link href="/contact" className="text-[#9C8B7A] hover:text-[#8A796A]">{translations.menu.contact}</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<InfoCircleOutlined />}>
                <Link href="/about" className="text-[#9C8B7A] hover:text-[#8A796A]">{translations.menu.about}</Link>
              </Menu.Item>
            </Menu>
            <Button 
              icon={<GlobalOutlined />}
              onClick={toggleLanguage}
              className="bg-[#FAF6F1] text-[#9C8B7A] hover:text-[#8A796A] border border-[#9C8B7A] hover:border-[#8A796A]"
            >
              {language.toUpperCase()}
            </Button>
          </div>
        </div>
      </Header>
      <Content className="bg-[#FAF6F1]">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </Content>
      <Footer className="text-center bg-[#F5F0E9]">
        <p>{translations.footer.copyright}</p>
        <p>{translations.footer.address}</p>
        <p>{translations.footer.contact}</p>
      </Footer>
    </Layout>
  );
};

export default MainLayout; 