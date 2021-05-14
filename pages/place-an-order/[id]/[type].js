import axios from 'axios';
import * as Yup from 'yup';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router';

import HeadMeta from '../../../components/HeadMeta';
import Testimonials from '../../../components/Testimonials';
import Message from '../../../components/Message';
import {
  TextInput,
  TextareaInput,
  SelectInput,
} from '../../../components/Inputs';

const PlaceAnOrder = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [message, setMessage] = useState({});

  const router = useRouter();

  const { id: orderId, type: orderType } = router.query;

  const validateStepOne = (props) => {
    const stepOneValid =
      props.values.name !== '' &&
      props.values.email !== '' &&
      props.values.phone !== '' &&
      props.values.noOfPersons !== '' &&
      !props.errors.name &&
      !props.errors.phone &&
      !props.errors.noOfPersons &&
      !props.errors.email;

    if (stepOneValid) {
      setActiveStep(2);
    }
  };

  return (
    <>
      <HeadMeta
        name='Place an order'
        title='Place an order | Lunch.pk'
        desc={`Lunch.pk is Pakistan's best website to Order homemade food online. Available in Lahore, Islamabad, Karachi and More`}
        currentUrl={router.pathname}
      />
      <Row style={{ minHeight: '100vh' }}>
        <Col lg={5} xl={3} className='p-5 mt-4'>
          <h3 className='font-weight-bold mb-4'>Place your order</h3>

          {Object.keys(message).length ? (
            <Message variant={message.variant}>{message.text}</Message>
          ) : null}

          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              city: '',
              noOfPersons: '',
              time: '',
              profession: '',
              address: '',
              message: '',
            }}
            validationSchema={Yup.object({
              name: Yup.string().min(3).max(30).required(),
              email: Yup.string().email().required(),
              phone: Yup.string()
                .min(10, 'Invalid Phone Number')
                .max(13, 'Invalid Phone Number')
                .required(),
              city: Yup.mixed().oneOf([
                'Islamabad',
                'Karachi',
                'Lahore',
                'Rawalpindi',
                'Other',
              ]),
              noOfPersons: Yup.number().positive().required(),
              time: Yup.mixed().oneOf(['Lunch', 'Dinner', 'Other']),
              profession: Yup.string(),
              address: Yup.string().required(),
              message: Yup.string(),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              axios
                .post(`${process.env.NEXT_PUBLIC_RAPI_HOST}/api/orders`, {
                  name: values.name,
                  email: values.email,
                  phone: values.phone,
                  city: values.city,
                  time: values.time,
                  noOfPersons: values.noOfPersons,
                  profession: values.profession,
                  address: values.address,
                  message: values.message,
                  orderType,
                  orderItem: orderId,
                })
                .then((res) => {
                  if (res.status === 201) {
                    resetForm();
                    setSubmitting(false);

                    router.push(`/thank-you/${res.data._id}`);
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
                <div className={`step-1 ${activeStep === 1 ? null : 'd-none'}`}>
                  <TextInput label='Your Name' type='text' name='name' />
                  <TextInput label='Email Address' type='text' name='email' />
                  <TextInput label='Phone' type='text' name='phone' />
                  <Row>
                    <Col lg={6}>
                      <TextInput
                        label='Profession'
                        type='text'
                        name='profession'
                      />
                    </Col>
                    <Col lg={6}>
                      <TextInput
                        label='No of Persons'
                        type='text'
                        name='noOfPersons'
                      />
                    </Col>
                  </Row>
                  <button
                    type='button'
                    onClick={() => validateStepOne(props)}
                    className='cta-btn cta-btn-primary'
                  >
                    Next
                  </button>
                </div>
                <div className={`step-2 ${activeStep === 2 ? null : 'd-none'}`}>
                  <TextInput label='Address' type='text' name='address' />
                  <SelectInput label='City' name='city'>
                    <option value=''>Select...</option>
                    <option value='Islamabad'>Islamabad</option>
                    <option value='Karachi'>Karachi</option>
                    <option value='Lahore'>Lahore</option>
                    <option value='Rawalpindi'>Rawalpindi</option>
                    <option value='Other'>Other</option>
                  </SelectInput>
                  <SelectInput label='Select a Time' name='time'>
                    <option value=''>Select...</option>
                    <option value='Lunch'>Lunch</option>
                    <option value='Dinner'>Dinner</option>
                    <option value='Other'>Other</option>
                  </SelectInput>
                  <TextareaInput label='Message?' name='message' />
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
                    {props.isSubmitting ? 'Placing your order...' : 'Order'}
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
          <div className='d-flex align-items-center h-100 order-form-testimonails'>
            <Testimonials />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PlaceAnOrder;
