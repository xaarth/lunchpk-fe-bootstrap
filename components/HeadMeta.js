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
    </Head>
  );
};

export default HeadMeta;
