import Layout from '../components/Layout'

import SEO from '/next-seo.config'
import { DefaultSeo } from 'next-seo'

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
