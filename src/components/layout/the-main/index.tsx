import type { ComponentProps, PropsWithChildren } from 'react';

interface Props extends ComponentProps<'main'> {}

export const TheMain = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between p-24'
      {...props}
    >
      {children}
    </main>
  );
};
