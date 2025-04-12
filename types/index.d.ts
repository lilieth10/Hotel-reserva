/// <reference types="next" />
/// <reference types="next/image-types/global" />

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

declare global {
  interface LayoutProps {
    children: ReactNode;
  }

  interface PageProps {
    params: Record<string, string>;
    searchParams: Record<string, string | string[] | undefined>;
  }
}

export {}; 