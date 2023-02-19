import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/ui/layout/layout';
import NavBar from '../components/ui/navBar/navBar';
import NextBreadcrumbs from '../components/ui/nextBreadcrumbs/nextBreadcrumbs';

const navLinks = [
  {name: 'Home', link: '/'},
  {name: 'Learn', link: '/learn'},
  {name: 'Create', link: '/Create'}
]

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Layout>
      <NavBar pages={navLinks} />
      <Component {...pageProps} />
    </Layout>
  )
}