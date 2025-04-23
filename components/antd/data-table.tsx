'use client';

import { Table } from 'antd';
import type { TableProps } from 'antd';
import { cn } from '@/lib/utils';
import React from 'react';

export interface DataTableProps<T extends object> extends Omit<TableProps<T>, 'className'> {
  wrapperClassName?: string;
  className?: string;
}

export function DataTable<T extends object>({ 
  wrapperClassName,
  className,
  pagination = { 
    pageSize: 10,
    showSizeChanger: true,
    showTotal: (total: number, range: [number, number]) => `${range[0]}-${range[1]} de ${total} items`
  },
  ...props 
}: DataTableProps<T>) {
  return (
    <div className={cn('rounded-md border', wrapperClassName)}>
      <Table<T>
        {...props}
        pagination={pagination}
        className={cn(
          '[&_.ant-table]:!bg-transparent',
          '[&_.ant-table-cell]:!p-4',
          '[&_.ant-table-thead_.ant-table-cell]:!bg-gray-50',
          className
        )}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
} 