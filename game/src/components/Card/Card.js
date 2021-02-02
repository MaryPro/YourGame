import React from 'react';
import ModalForm from "../ModalForm";
import style from './Card.module.css'

function Card({ card }) {
  const [show, setShow] = React.useState(false);

  const handleShow = () => {
    setShow(true);
  }

  return (
    <div className={style.div} onClick={handleShow}>
      <ModalForm card={card} />
    </div>
  )
}

export default Card
