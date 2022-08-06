import React from 'react';
import ScrollView from 'src/component/ScrollView';

function Main({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element {
  return (
    <ScrollView className="os-host-flexbox max-h-512" verticalGap="md">
      <main className="p-16" {...props} />
    </ScrollView>
  );
}

export default Main;
