import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const VideosList = ({ title, videos }) => (
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
        {videos.map((video) => (
          <iframe
            key={video.url}
            className={video.classes || 'p-3'}
            title={video.title}
            src={video.url}
            width={video.width || '560'}
            height={video.height || '315'}
            frameBorder='0'
            allowFullScreen
          />
        ))}
      </Row>
    </Container>
  </section>
);

VideosList.defaultProps = {
  title: '',
  videos: [],
};

export default VideosList;
