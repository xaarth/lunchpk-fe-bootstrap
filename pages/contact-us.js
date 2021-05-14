import axios from 'axios';
import * as Yup from 'yup';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const FaqsList = dynamic(() => import('../components/FaqsList'));
const Message = dynamic(() => import('../components/Message'));
const HeadMeta = dynamic(() => import('../components/HeadMeta'));
const TextInput = dynamic(() =>
  import('../components/Inputs').then((mod) => mod.TextInput)
);
const TextareaInput = dynamic(() =>
  import('../components/Inputs').then((mod) => mod.TextareaInput)
);

const faqs = [
  {
    question: 'Which Cities Are You Available?',
    answer: `We are available in 4 cities and expanding. Lahore, Karachi, Islamabad and Rawalpindi. We will be available in more cities soon.`,
  },
  {
    question: 'Are You Availabe In My Area or Street?',
    answer: `You can simply send us your location on whatsapp at +92 333 5189005 and we'll share details and menus for your area`,
  },
  {
    question: 'What Makes Lunch.pk Different From Other Food Portals?',
    answer: `Almost 98% of the food apps and portals connect you with the restaurants and hotels near you. On the other hand, Lunch.pk connects you with our verified foodie families living near you. We accept only homemade food and kitchens backed by expert women chef well known for their quality food to give you a real taste of homemade food and healthy meals at your doorstep. Moreover, we have quality assurance processes and regular checks to make sure that you get clean, hygienic and healthy food via home kitchens. We do not accept poor kitchen environments, bad taste or any hotels or restaurant food.`,
  },
  {
    question: 'What Is Minimum Order For Daily Deals?',
    answer: `We need order of minimum 5 persons for daily deals. However, if you are a single subscriber, you can check out our monthly or weekly packages here.`,
  },
  {
    question: 'What If I Want Food For 6 or 7 Days A Week?',
    answer: `If you want food for 6 days or 7 days a week, all you need is to pay extra amount for those additional days and let us know while filling out the form.`,
  },
  {
    question: 'How Much Food Is Served In A Meal Plan?',
    answer: `We offer 1 serving in our weekly monthly meal plan. the food is more than enough for 1 person but we do not recommend 2 persons to use single meal plan. Each meal includes 1 dish, 2 chapati, salad or raita. Our 5 serving deals are more than enough for 5 persons with drink, salad, raita and roti.`,
  },
  {
    question: 'What Payments Methods Do You Accept?',
    answer: `All of our payments are advance. You can pay us on your first order via Bank Transfer or Cash on Delivery`,
  },
  {
    question: 'What If I Am Not Available?',
    answer: `You will receive 5 meals a week. If you are not available at your address for any reasons, just inform us 1 day ahead on our phone +92 333 5189005 Your days will be adjusted when you are back and available.`,
  },
];

const Contact = () => {
  const router = useRouter();

  const [message, setMessage] = useState({});

  return (
    <>
      <HeadMeta
        name='Contact'
        title='Contact | Lunch.pk Homemade Healthy Food'
        desc='Lunch.pk, for any queries please send us a message, an email or give us a call.'
        currentUrl={router.pathname}
      />

      <section
        className=''
        style={{
          background: '#f5f8fa',
          padding: '4.375rem 0 3.125rem',
        }}
      >
        <Container>
          <Row>
            <Col className='contact-details-section mb-4' md={4} lg={6}>
              <h1 className='title mb-4' style={{ fontWeight: '600' }}>
                Contact Us
              </h1>
              <div className='detail'>
                <h5>Phone / Whatsapp</h5>
                <p className='mb-0'>+92 333 5189005</p>
                <p>+92 335 5517720</p>
              </div>
              <div className='detail'>
                <h5>Email</h5>
                <p>info@lunch.pk</p>
              </div>
              <div className='detail'>
                <h5>Locations</h5>
                <p>
                  Available in Lahore, Karachi, <br /> Islamabad and Rawalpindi
                </p>
              </div>
            </Col>
            <Col md={8} lg={6}>
              <Card>
                <Card.Body
                  className='contact-form-card'
                  style={{ padding: '40px 60px' }}
                >
                  <h4
                    className='contact-form-title'
                    style={{
                      fontSize: '18px',
                      marginBottom: '24px',
                      fontWeight: '400',
                      lineHeight: '1.5',
                    }}
                  >
                    Leave us a message and someone will <br /> get back to you
                    shortly.
                  </h4>

                  {Object.keys(message).length ? (
                    <Message variant={message.variant}>{message.text}</Message>
                  ) : null}

                  <Formik
                    initialValues={{
                      name: '',
                      phone: '',
                      message: '',
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string().min(3).max(30).required(),
                      phone: Yup.string()
                        .min(10, 'Invalid phone number')
                        .max(13, 'Invalid phone number')
                        .required(),
                      message: Yup.string().min(8).max(2500).required(),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      axios
                        .post(
                          `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/contact-queries`,
                          values
                        )
                        .then((res) => {
                          if (res.status === 201) {
                            setMessage({
                              variant: 'success',
                              text: 'Your message has been sent',
                            });

                            setTimeout(() => {
                              setMessage({});
                            }, 3000);

                            resetForm();
                            setSubmitting(false);
                          } else {
                            setSubmitting(false);

                            setMessage({
                              variant: 'danger',
                              text: 'An internal error occured',
                            });

                            setTimeout(() => {
                              setMessage({});
                            }, 3000);
                          }
                        })
                        .catch((err) => {
                          setSubmitting(false);

                          const msg =
                            err.response && err.response.data
                              ? err.response.data.error
                              : err.message;

                          setMessage({
                            variant: 'warning',
                            text: msg,
                          });

                          setTimeout(() => {
                            setMessage({});
                          }, 3000);
                        });
                    }}
                  >
                    {(props) => (
                      <Form>
                        <TextInput type='text' label='Your name' name='name' />
                        <TextInput type='text' label='Phone' name='phone' />
                        <TextareaInput
                          label='Message'
                          name='message'
                          style={{ height: '150px' }}
                        />
                        <button
                          type='submit'
                          className='cta-btn cta-btn-primary'
                          disabled={props.isSubmitting}
                        >
                          {props.isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <FaqsList title='Got Questions? We Have Got Answers' items={faqs} />
    </>
  );
};

export default Contact;
