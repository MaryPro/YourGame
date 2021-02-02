import List from '../List/List'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetTasksAC } from '../../redux/actionCreators';
import style from './Board.module.css'

function Board(props) {
  const dispatch = useDispatch();
  const { task } = useSelector(store => store)

  useEffect(() => {
    dispatch(fetchGetTasksAC())

  }, [dispatch])

  return (
    <div className={style.div}>

      <div  >
        {/* write lists with topics */}
        {task && task.map(topic => <List key={topic + Math.random()} topic={topic} />)}
      </div>
    </div>

  )
}

export default Board
