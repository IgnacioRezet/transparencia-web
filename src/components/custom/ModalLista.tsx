import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';

interface ContentItem {
  textError: string;
}

interface ModalInput {
  headerTitle: string;
  title: string;
  icon: string;
  content: ContentItem[];
  onHide: () => void;
  show: boolean;
}

const ModalLista: React.FC<ModalInput> = ({ headerTitle, content, onHide, show }) => {
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
       
        <Container>
          {content.map((c, index) => (
            <Row key={index}className='py-2'>
              <Col >
                {c.textError}
              </Col>
            </Row>
          ))}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalLista;
