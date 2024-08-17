import type { ComponentProps } from 'react';
import Link from 'next/link';

import ViewCodeBtn from '@/components/common/view-code-btn';
import { EAppRoutes } from '@/emuns';

interface Props extends ComponentProps<'header'> {}

export const TheHeader = ({ ...props }: Props) => {
  return (
    <header
      className='flex h-[90px] items-center justify-between gap-2 border-b border-gray-700 px-4'
      {...props}
    >
      <Link href={EAppRoutes.ROOT}>
        <h4>Cat&Dog</h4>
      </Link>
      <ViewCodeBtn />
    </header>
  );
};
