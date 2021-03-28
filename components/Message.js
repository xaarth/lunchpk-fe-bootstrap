import Alert from 'react-bootstrap/Alert';

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'warning',
};

export default Message;
