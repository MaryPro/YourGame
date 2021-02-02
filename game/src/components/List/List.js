import Card from '../Card/Card';
import style from './List.module.css';

function List({ topic }) {
  return (

    <div >
      <div className={style.div}>
        <div className={style.topics}> {topic.topic}</div>
        
        {topic.questions && topic.questions.map(card => <Card key={card + Math.random()} card={card} />)}
      </div>
    </div>

  )
}

export default List
