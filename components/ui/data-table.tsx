'use client';

import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { cn } from '@/lib/utils';

interface DataTableProps<T> {
  columns: ColumnsType<T>;
  dataSource: T[];
  loading?: boolean;
  pagination?: boolean;
  wrapperClassName?: string;
}

export function DataTable<T extends { key: string }>({
  columns,
  dataSource,
  loading = false,
  pagination = true,
  wrapperClassName,
}: DataTableProps<T>) {
  return (
    <div className={cn('rounded-md border', wrapperClassName)}>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        pagination={pagination ? { pageSize: 10 } : false}
        className="bg-white rounded-lg shadow-sm"
      />
    </div>
  );
} 