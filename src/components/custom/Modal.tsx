import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface ModalInput {
  headerTitle: string;
  title: string;
  content: string;
  onHide: () => void;
  show: boolean;
}

const ModalComponent: React.FC<ModalInput> = ({ headerTitle, title, content, onHide, show }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {headerTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{title}</h4>
        <p>{content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
