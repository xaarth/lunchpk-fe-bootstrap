import { Container } from 'react-bootstrap';
import TosPoint from '../components/TosPoint';
import HeadMeta from '../components/HeadMeta';
import { useRouter } from 'next/router';

const PrivacyPolicy = () => {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        name='Privacy Policy'
        title='Privacy Policy | Lunch.pk Homemade Food Delivery'
        desc={`LUNCH.PK PRIVACY POLICY This policy explains how we, lunch.pk, use your personal information which you provide to us when using our service, including but not limited to our website and mobile applications (apps). &nbsp; What information we collect about you? &nbsp; We collect personal information from you when you order goods or services from us`}
        currentUrl={router.pathname}
      />
      <section style={{ padding: '5rem 0' }}>
        <Container>
          <div className='mb-5'>
            <h1 className='display-4 font-weight-bold mb-4'>Privacy policy</h1>
            <p className='mb-0'>
              This policy explains how we, lunch.pk, use your personal
              information which you provide to us when using our service,
              including but not limited to our website and mobile applications
              (apps).
            </p>
          </div>
          <TosPoint title='What information we collect about you?'>
            <p>
              We collect personal information from you when you order goods or
              services from us or use our website. We also collect information
              when you complete any customer survey. Website usage information
              may also be collected using cookies.
            </p>
          </TosPoint>

          <TosPoint title='Cookies and Google Analytics'>
            <p>
              Cookies are small text files that are placed on your computer by
              websites that you visit. They are widely used in order to make
              websites work, or work more efficiently, as well as to provide
              information to the owners of the site.
            </p>
            <p>
              This website uses Google Analytics, a web analytics service
              provided by Google, Inc. (“Google”). Google Analytics uses
              “cookies”, which are text files saved on your computer, to help
              the website analyze how you use the site. The information
              generated by the cookie about your use of the website will be
              transmitted to and stored by Google on servers in the United
              States. If this website anonymizes IP addresses, your IP address
              will be truncated by Google within a EU member state or other EEA
              state before being transmitted to the US. Only in exceptional
              situations will your full IP address be transmitted to Google
              servers in the United States and truncated there. Google will use
              this information for the purpose of evaluating your use of the
              website, compiling reports on website activity for website
              operators and providing other services relating to website
              activity and internet usage. Google will not associate your IP
              address with any other data held by Google. You may refuse the use
              of cookies by selecting the appropriate settings on your browser,
              however please note that if you do this you may not be able to use
              the full functionality of this website. By using this website, you
              consent to the processing of data about you by Google in the
              manner and for the purposes set out above. You can also prevent
              Google from collecting information (including your IP address) via
              cookies and processing this information by downloading this
              browser plugin and installing it:
              https://tools.google.com/dlpage/gaoptout
            </p>
            <p>
              Most web browsers allow some control of most cookies through the
              browser settings. To find out more about cookies, including how to
              see what cookies have been set and how to manage and delete them,
              visit www.allaboutcookies.org.
            </p>
          </TosPoint>

          <TosPoint title='How will we use the information we collect from you?'>
            <p>
              Information that we collect from you is used to process your order
              and to manage your account. We may also use your information to
              email you about other products or services that we think may be of
              interest to you.
            </p>
            <p>
              In processing your order we may send your information to credit
              reference and fraud prevention agencies.
            </p>
            <p>
              From time to time we may send your information to third parties
              which we consider may have goods or services which are of interest
              to you. If you do not wish to be contacted by third parties please
              email us at info@lunch.pk
            </p>
          </TosPoint>

          <TosPoint title='Access to your information'>
            <p>
              You have a right to request a copy of the information we hold on
              you at any time. Please email us if you would like to receive a
              copy of this information – info@lunch.pk. There will be a small
              charge for processing this request.
            </p>
          </TosPoint>

          <TosPoint title='Other Websites'>
            <p>
              Our website may have links to other websites. This privacy policy
              only applies to this website. You should therefore read the
              privacy policies of the other websites when you are using those
              sites.
            </p>
          </TosPoint>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;
