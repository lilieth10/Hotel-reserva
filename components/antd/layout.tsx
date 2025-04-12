'use client';

import React from 'react';
import { Layout, Menu } from 'antd';
import { useLanguage } from '@/lib/language-context';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { translations } = useLanguage();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            {translations.menu.home}
          </Menu.Item>
          <Menu.Item key="2">
            {translations.menu.users}
          </Menu.Item>
          <Menu.Item key="3">
            {translations.menu.settings}
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }} />
        <Content style={{ margin: '16px' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2024 Created with ❤️
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout; 