import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/ui/layout/layout';
import NavBar from '../components/ui/navBar/navBar';

const navLinks = [
  {name: 'Home', link: '/'},
  {name: 'Learn', link: '/learn'},
]

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Layout>
      <NavBar pages={navLinks} />
      <Component {...pageProps} />
    </Layout>
  )
}