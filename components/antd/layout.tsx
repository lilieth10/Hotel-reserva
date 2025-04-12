'use client';

import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, BankOutlined, CustomerServiceOutlined, ContactsOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useLanguage } from '@/lib/language-context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Header, Content, Footer } = Layout;

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { translations } = useLanguage();
  const pathname = usePathname();

  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: <Link href="/">{translations.menu.home}</Link>,
    },
    {
      key: 'rooms',
      icon: <BankOutlined />,
      label: <Link href="/rooms">{translations.menu.rooms}</Link>,
    },
    {
      key: 'services',
      icon: <CustomerServiceOutlined />,
      label: <Link href="/services">{translations.menu.services}</Link>,
    },
    {
      key: 'contact',
      icon: <ContactsOutlined />,
      label: <Link href="/contact">{translations.menu.contact}</Link>,
    },
    {
      key: 'about',
      icon: <InfoCircleOutlined />,
      label: <Link href="/about">{translations.menu.about}</Link>,
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Header className="flex items-center bg-white shadow-sm fixed w-full z-10">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
          <div className="text-xl font-bold">Hotel Boutique Mendoza</div>
          <Menu 
            mode="horizontal" 
            className="border-0" 
            selectedKeys={[pathname === '/' ? 'home' : pathname.split('/')[1]]}
            items={menuItems}
          />
        </div>
      </Header>
      <Content className="flex-1 pt-16">
        {children}
      </Content>
      <Footer className="text-center bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">{translations.footer.copyright}</p>
          <p className="mb-2">{translations.footer.address}</p>
          <p>{translations.footer.contact}</p>
        </div>
      </Footer>
    </Layout>
  );
} 