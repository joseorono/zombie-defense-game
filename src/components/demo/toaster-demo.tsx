import toast from 'react-hot-toast';

export default function ToasterDemo() {
  return (
    <>
      <h1>Game Template</h1>
      <button className="daisy-btn-primary daisy-btn" onClick={() => toast.success('Test Succesful!')}>
        Success Toast
      </button>
      <button className="daisy-btn-primary daisy-btn" onClick={() => toast.error('Error Test Succesful!')}>
        Error Toast
      </button>
      <button
        className="daisy-btn-primary daisy-btn"
        onClick={() =>
          toast.loading('Loading Modal Succesful!', {
            duration: 3000,
          })
        }
      >
        Loading Toast
      </button>
      <button className="daisy-btn-primary daisy-btn" onClick={() => toast.custom('Info Modal Succesful!')}>
        Info Toast
      </button>
    </>
  );
}
