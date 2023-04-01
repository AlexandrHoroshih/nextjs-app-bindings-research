import { Layout } from '#/ui/page-directory/layout';
import { AppProps } from 'next/app';
import 'styles/globals.css';
import { EffectorSsr } from '#/lib/effector-next';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <EffectorSsr values={pageProps.values}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </EffectorSsr>
    </main>
  );
}
