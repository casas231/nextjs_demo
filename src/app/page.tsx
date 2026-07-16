'use client';

import {EmptyState} from '@astryxdesign/core/EmptyState';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <EmptyState
      icon={<Icon icon={MagnifyingGlassIcon} size="lg" />}
      title="Không có kết quả"
      description="Thử thay đổi từ khóa hoặc xóa bộ lọc để xem kết quả."
      actions={
        <>
          <Button label="Trở lại" variant="secondary" />
          <Button label="Xóa bộ lọc" variant="primary" />
        </>
      }
    />
  );
}
