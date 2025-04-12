"use client";

import React from 'react';
import { ConfigProvider, theme } from 'antd';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9C8B7A',
          borderRadius: 8,
          colorBgContainer: '#ffffff',
          fontFamily: 'Inter, sans-serif',
        },
        components: {
          Button: {
            controlHeight: 40,
            paddingContentHorizontal: 24,
          },
          Card: {
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            borderRadiusLG: 12,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}