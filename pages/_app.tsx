import { Layout } from '#/ui/page-directory/layout';
import { AppProps } from 'next/app';
import 'styles/globals.css';
import { EffectorNext } from '@effector/next';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <EffectorNext values={pageProps.values}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </EffectorNext>
    </main>
  );
}
