import Head from 'next/head';

const HeadMeta = ({ name, title, desc, currentUrl }) => {
  const domain_url = 'https://www.lunch.pk';
  const header_logo = '/assets/img/logo.png';

  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>

      <meta name='description' content={desc} />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='robots'
        content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
      />

      <meta property='og:type' content={name} />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={desc} />
      <meta property='og:url' content={domain_url} />
      <meta property='og:site_name' content={title} />
      <meta property='og:image' content={header_logo} />
      <meta property='og:image:secure_url' content={header_logo} />
      <meta name='twitter:card' content={name} />
      <meta name='twitter:site' content={name} />
      <meta name='twitter:domain' content={domain_url} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={desc} />
      <meta name='twitter:image' content={header_logo} />

      <link rel='canonical' href={currentUrl} />

      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=UA-34395334-1'
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-34395334-1');
        `,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1672788266293461');
          fbq('track', 'PageView');
        `,
        }}
      />

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1672788266293461&ev=PageView&noscript=1"
          />`,
        }}
      />
    </Head>
  );
};

export default HeadMeta;
