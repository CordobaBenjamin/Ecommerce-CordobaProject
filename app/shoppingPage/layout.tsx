import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const ShoppingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <html lang="en">
      <h1>Hola Mundo</h1>
      </html>
    );
  };
  
  export default ShoppingLayout;


