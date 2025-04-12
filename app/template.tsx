'use client';

import { MainLayout } from '@/components/antd/layout';

export default function Template({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
} 