import clsx from 'clsx';
import React from 'react';

function Body({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element {
  return (
    <div
      className={clsx(
        'overflow-auto max-h-full bg-surface-raised-1 rounded-xl relative flex flex-col',
        className
      )}
      {...props}
    />
  );
}

export default Body;
