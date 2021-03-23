import { useField } from 'formik';

export const CheckboxInput = ({ label, ...props }) => {
  const [field, meta] = useField(props, 'checkbox');

  return (
    <div className='mb-3'>
      <label className='checkbox-label' htmlFor={props.id || props.name}>
        {label}
        <input type='checkbox' {...props} {...field} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <small className='text-danger d-block'>{meta.error}</small>
      ) : null}
    </div>
  );
};

export const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='mb-3'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className='form-control shadow-none'
        {...field}
        {...props}
      ></select>
      {meta.touched && meta.error ? (
        <small className='text-danger d-block'>{meta.error}</small>
      ) : null}
    </div>
  );
};

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='mb-3'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='form-control shadow-none' {...field} {...props} />
      {meta.touched && meta.error ? (
        <small className='text-danger d-block'>{meta.error}</small>
      ) : null}
    </div>
  );
};

export const TextareaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='mb-3'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className='form-control shadow-none' {...field} {...props} />
      {meta.touched && meta.error ? (
        <small className='text-danger d-block'>{meta.error}</small>
      ) : null}
    </div>
  );
};
