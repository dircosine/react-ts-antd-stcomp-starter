import React, { ReactNode } from 'react';
import Header, { HeaderType } from '../components/Header';
import Footer from '../components/Footer';

interface BaseTemeplateProps {
  headerType?: HeaderType;
  children: ReactNode | HTMLElement;
}

function BaseTemplate({ headerType, children }: BaseTemeplateProps) {
  return (
    <div>
      <Header type={headerType} />
      {children}
      <Footer />
    </div>
  );
}

export default BaseTemplate;
