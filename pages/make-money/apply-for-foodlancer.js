import { Formik, Form } from 'formik';
import { TextInput } from '../../components/Inputs';
import { Row, Col } from 'react-bootstrap';
import YoutubeVideosList from '../../components/YoutubeVideosList';
import Message from '../../components/Message';
import * as Yup from 'yup';
import { useState } from 'react';
import axios from 'axios';

const ApplyForFoodlancer = () => {
  const videos = [
    {
      title: 'Foodlaner 1',
      url: 'https://www.youtube.com/embed/1DtpVa9sYP4',
      width: 480,
      height: 280,
    },
    {
      title: 'Foodlaner 2',
      url: 'https://www.youtube.com/embed/-9CPDNJpGMw',
      width: 480,
      height: 280,
    },
    {
      title: 'Foodlaner 3',
      url: 'https://www.youtube.com/embed/zL9C6LEyIUM',
      width: 480,
      height: 280,
    },
    {
      title: 'Foodlaner 4',
      url: 'https://www.youtube.com/embed/JQ_oDYD3ybk',
      width: 480,
      height: 280,
    },
  ];

  const [activeStep, setActiveStep] = useState(1);
  const [message, setMessage] = useState({});

  const validateStepOne = (props) => {
    const stepOneValid =
      props.values.name !== '' &&
      props.values.kitchenName !== '' &&
      props.values.phone !== '' &&
      props.values.email !== '' &&
      !props.errors.name &&
      !props.errors.kitchenName &&
      !props.errors.phone &&
      !props.errors.email;

    if (stepOneValid) {
      setActiveStep(2);
    }
  };

  return (
    <Row style={{ minHeight: '100vh' }}>
      <Col lg={5} xl={3} className='p-5 mt-4'>
        <h3 className='font-weight-bold mb-4'>Apply for foodlancer</h3>

        {Object.keys(message).length ? (
          <Message variant={message.variant}>{message.text}</Message>
        ) : null}

        <Formik
          initialValues={{
            name: '',
            kitchenName: '',
            phone: '',
            email: '',
            street: '',
            city: '',
            postalCode: '',
            country: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().min(3).max(30).required(),
            kitchenName: Yup.string().min(3).max(40).required(),
            phone: Yup.string().min(10).max(13).required(),
            email: Yup.string().email().required(),
            street: Yup.string().required(),
            city: Yup.string().required(),
            postalCode: Yup.number().required(),
            country: Yup.string().required(),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const foodlancer = {
              name: values.name,
              kitchenName: values.kitchenName,
              phone: values.phone,
              email: values.email,
              address: {
                street: values.street,
                city: values.city,
                postalCode: values.postalCode,
                country: values.country,
              },
            };

            axios
              .post(
                `${process.env.NEXT_PUBLIC_RAPI_HOST}/api/foodlancers`,
                foodlancer
              )
              .then((res) => {
                if (res.status === 201) {
                  setMessage({
                    variant: 'success',
                    text: 'Your kitchen has been registered',
                  });

                  setTimeout(() => {
                    setMessage({});
                  }, 3000);

                  setActiveStep(1);

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
                const msg =
                  err.response && err.response.data
                    ? err.response.data.error
                    : err.message;

                setSubmitting(false);
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
              <div className={`step-1 ${activeStep === 1 ? null : 'd-none'}`}>
                <TextInput label='Your Name' type='text' name='name' />
                <TextInput
                  label='Kitchen Name'
                  type='text'
                  name='kitchenName'
                />
                <TextInput label='Phone or Whatsapp' type='text' name='phone' />
                <TextInput label='Email Address' type='text' name='email' />
                <button
                  type='button'
                  onClick={() => validateStepOne(props)}
                  className='cta-btn cta-btn-primary'
                >
                  Next
                </button>
              </div>
              <div className={`step-2 ${activeStep === 2 ? null : 'd-none'}`}>
                <TextInput label='Street Address' type='text' name='street' />
                <TextInput label='City' type='text' name='city' />
                <TextInput label='Postal Code' type='text' name='postalCode' />
                <TextInput label='Country' type='text' name='country' />
                <button
                  type='button'
                  onClick={() => setActiveStep(1)}
                  className='btn btn-dark px-3 shadow-none mr-3'
                >
                  Back
                </button>
                <button
                  type='submit'
                  disabled={props.isSubmitting}
                  className='cta-btn cta-btn-primary'
                >
                  {props.isSubmitting ? 'Applying...' : 'Apply'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Col>
      <Col
        lg={7}
        xl={9}
        style={{
          background: 'linear-gradient(45deg,#00a4bd,#00bda5)',
        }}
      >
        <YoutubeVideosList videos={videos} />
      </Col>
    </Row>
  );
};

export default ApplyForFoodlancer;
