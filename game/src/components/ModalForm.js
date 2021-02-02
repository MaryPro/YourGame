import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { updateTasksAC } from '../redux/actionCreators'

import style from './ModalForm.module.css'

const ModalForm = ({ card }) => {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  let answer, rightAnswer
  const handleClose = () => {

    answer = document.querySelector('.answer').value.toLowerCase()
    rightAnswer = card.answer.toLowerCase()
    if (answer === rightAnswer) {
      console.log('RIGHT');
    } else {
      console.log('Wrong');
    }

    setShow(false);
    card.statusVis = false
    dispatch(updateTasksAC(card))
  }
  const handleShow = () => {
    setShow(true)
  }

  return (
    <div className={style.div}>
      { card.statusVis ? <Button variant="primary" onClick={handleShow}>
        {card.point}
      </Button> : <div className={style.answer}> {card.answer} </div>}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Вопрос на {card.point} очков</Modal.Title>
        </Modal.Header>
        <Modal.Body>{card.question}</Modal.Body>

        <Form.Control type='text' placeholder='answer here' className='answer' />

        <Modal.Footer>

          <Button variant="primary" onClick={handleClose}>
            SAVE ANSWER
                    </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalForm;
