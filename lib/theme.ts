import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

export const themeConfig: ThemeConfig = {
  token: {
    // Colores principales
    colorPrimary: '#0ea5e9', // Un azul que combina bien con Tailwind
    colorSuccess: '#22c55e',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    colorInfo: '#3b82f6',
    
    // Bordes y radios
    borderRadius: 6,
    
    // Tipografía
    fontFamily: 'inherit', // Usar la fuente de Tailwind
    
    // Espaciado
    padding: 16,
    margin: 16,
  },
  components: {
    Table: {
      borderRadius: 6,
      padding: 16,
      headerBg: '#f9fafb',
    },
    Layout: {
      bodyBg: '#f3f4f6',
      headerBg: '#ffffff',
      siderBg: '#ffffff',
    },
    Menu: {
      itemBg: 'transparent',
      itemSelectedBg: '#e5e7eb',
      itemHoverBg: '#f3f4f6',
    },
  },
  algorithm: theme.defaultAlgorithm,
}; 