import  type { ComponentProps } from 'react'
import Link from 'next/link'

import ViewCodeBtn from '@/components/common/view-code-btn'
import { EAppRoutes } from '@/emuns'

interface Props extends ComponentProps<'header'> {
}

export const TheHeader = ({...props}: Props) => {
  return (
    <header
        className='h-[90px] border-b border-gray-700 flex items-center justify-between gap-2 px-4'
        {...props}
    >
      <Link href={EAppRoutes.ROOT}>
      <h4>Cat&Dog</h4>
      </Link>
      <ViewCodeBtn />
    </header>
  )
}
