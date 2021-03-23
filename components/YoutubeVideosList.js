import { Container, Row } from 'react-bootstrap';

const VideosList = ({ title, videos }) => {
  return (
    <section
      className='text-white'
      style={{
        padding: '4.375rem 0 3.125rem',
        background: 'linear-gradient(45deg,#00a4bd,#00bda5)',
      }}
    >
      <Container>
        {title.length ? (
          <h2 className='h1 text-center font-weight-bold mb-5'>{title}</h2>
        ) : (
          ''
        )}

        <Row className='justify-content-center'>
          {videos.map((video, index) => (
            <iframe
              key={index}
              className={video.classes || 'p-3'}
              title={video.title}
              src={video.url}
              width={video.width || '560'}
              height={video.height || '315'}
              frameBorder='0'
              allowFullScreen
            ></iframe>
          ))}
        </Row>
      </Container>
    </section>
  );
};

VideosList.defaultProps = {
  title: '',
  videos: [],
};

export default VideosList;
