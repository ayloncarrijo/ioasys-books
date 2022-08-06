import clsx from 'clsx';
import React from 'react';
import Divider from 'src/component/Divider';

function Footer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'footer'>): JSX.Element {
  return (
    <>
      <Divider />

      <footer className={clsx('min-h-72 p-16', className)} {...props} />
    </>
  );
}

export default Footer;
