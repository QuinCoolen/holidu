import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html>
      <Head lang="en"/>
      <body className='flex flex-col min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}