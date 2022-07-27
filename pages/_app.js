import '../styles/globals.css'
import Layout from '../components/layout'
import "../styles/nprogress.css"
import Router from "next/router";
import nProgress from "nprogress";
import { DefaultSeo } from 'next-seo';

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <>
    <DefaultSeo 
      title='Kingkin Fajar'
      titleTemplate="Kingkin Fajar"
        defaultTitle="Kingkin Fajar"
        description="Hi, I'm Kingkin Fajar Developer and UI Design Enthusiast"
        canonical="https://kingkinfajarr.my.id"
      openGraph={{
        type: "website",
        url: "https://kingkinfajarr.my.id",
        title: "Kingkin Fajar",
        description: "Hi, I'm Kingkin Fajar Developer and UI Design Enthusiast",
      }}
      twitter={{
        handle: "@kingkinfajarr",
        site: "@kingkinfajarr",
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'apple-mobile-web-app-title', content: 'Kingkin Fajar' },
        { name: 'application-name', content: 'Kingkin Fajar' },
        {
          name: 'google-site-verification',
          content: 'w0K-2LpCNTZjm0SAM9nJJ9S-tS4BZW8oB8-UwkMsrQ4',
        },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
        { name: 'theme-color', content: '#4ADE80' },
      ]}
    />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </> 
  );
}

export default MyApp
