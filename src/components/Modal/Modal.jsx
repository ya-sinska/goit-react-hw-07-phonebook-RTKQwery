import { useEffect} from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalBox } from "./Modal.styled"
import { createPortal } from 'react-dom';
import { Forma } from 'components/Form/Form';
import { useEditorForm } from 'hooks/UseEditorForm';


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, id}) => {
 
  useEffect(() => {
   const handleKeyDown = e => {
     if (e.code === 'Escape') {
    onClose();
    }};
    window.addEventListener('keydown', handleKeyDown);
    return () => {window.removeEventListener('keydown', handleKeyDown)} ;
  },[onClose])

 const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
 };
  return createPortal(      
      (<Overlay  onClick={handleBackdropClick}>
            <ModalBox >         
        <Forma btnText='Save chahges' formSettings={useEditorForm} id={id}/>
          </ModalBox>
        </Overlay>), modalRoot )
}

Modal.propTypes = {
  onClose: PropTypes.func,
  id: PropTypes.string,
  isModalOpen: PropTypes.bool,
}