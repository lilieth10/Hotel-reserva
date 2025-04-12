'use client';

import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import type { MenuProps } from 'antd';

const { Header, Sider, Content } = Layout;

const menuItems: MenuProps['items'] = [
  {
    key: '1',
    icon: <HomeOutlined />,
    label: 'Inicio',
  },
  {
    key: '2',
    icon: <UserOutlined />,
    label: 'Usuarios',
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: 'Configuración',
  },
];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-screen">
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        className="bg-white"
      >
        <div className="p-4">
          <h1 className="text-xl font-bold">Mi App</h1>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header className="bg-white p-4 border-b">
          <div className="flex justify-end">
            {/* Aquí puedes agregar componentes de header como notificaciones, perfil, etc. */}
          </div>
        </Header>
        <Content className="m-6 p-6 bg-white rounded-lg">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
} 