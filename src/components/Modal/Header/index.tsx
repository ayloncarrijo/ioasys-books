import clsx from 'clsx';
import React from 'react';
import Divider from 'src/component/Divider';
import IconButton from 'src/component/IconButton';

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {
  onDismiss: () => void;
  title?: string;
}

function Header({
  onDismiss,
  className,
  title,
  ...props
}: HeaderProps): JSX.Element {
  return (
    <>
      <header
        className={clsx('min-h-72 p-16 flex items-center', className)}
        {...props}
      >
        {title && <h3 className="mr-8 word-clamp typography-h4">{title}</h3>}

        <div className="ml-auto -mr-8 -my-8">
          <IconButton icon="close" onClick={onDismiss} />
        </div>
      </header>

      <Divider />
    </>
  );
}

export default Header;
