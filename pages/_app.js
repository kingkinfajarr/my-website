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
    <Layout>
      <DefaultSeo
        title='Kingkin Fajar Anifianto'
        titleTemplate="Kingkin Fajar Anifianto"
        defaultTitle="Kingkin Fajar Anifianto"
        description="Hi, I'm Kingkin Fajar Developer and UI Design Enthusiast"
        canonical="https://kingkinfajarr.space"
        openGraph={{
          type: "website",
          url: "https://kingkinfajarr.space",
          site_name: "Kingkin Fajar Anifianto",
          title: "Kingkin Fajar Anifianto",
          description: "Hi, I'm Kingkin Fajar Developer and UI Design Enthusiast",
        }}
        twitter={{
          handle: "@kingkinfajarr",
          site: "@kingkinfajarr",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
          { name: 'apple-mobile-web-app-title', content: 'Kingkin Fajar Anifianto' },
          { name: 'application-name', content: 'Kingkin Fajar Anifianto' },
          {
            name: 'google-site-verification',
            content: 'bHVig-zFWgxVxw0D-0FhPsgs88E6RiUIThiL83Mn79M',
          },
          { name: 'msapplication-TileColor', content: '#da532c' },
          { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
          { name: 'theme-color', content: '#4ADE80' },
        ]}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
