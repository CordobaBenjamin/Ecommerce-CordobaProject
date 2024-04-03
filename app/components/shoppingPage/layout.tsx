'use client'
import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './cssStyles/productsStyle.css'
import Header from './shoppingComponents/header';
import Footer from './shoppingComponents/footer';
import Main from './shoppingComponents/main';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const ShoppingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <html lang="en">
        <Header/>
        <Main/>
        <Footer/>
      </html>
    );
  };
  
  export default ShoppingLayout;

