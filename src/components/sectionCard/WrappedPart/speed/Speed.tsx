import React, { useEffect, useState } from 'react';
import styles from './speed.module.scss';

export interface ISpeed {
  currentNumTxt: number;
  start: boolean;
}

const Speed = ({currentNumTxt, start }: ISpeed) => {
  const [numSpeed, setNumSpeed] = useState<number>(0); 
  const [numSymbol, setNumSymbol] = useState<number>(0);

  let handlerSetInterval: any;

  useEffect(() => {
    if(start) {
      handlerSetInterval = setInterval( () => {
        setNumSpeed(prev => prev + 1)
        if(currentNumTxt !== 0) {
          setNumSymbol(Math.ceil(currentNumTxt / (numSpeed / 60)))
        }
      }, 1000)
    }
   return () => {
     clearInterval(handlerSetInterval)
   }
  },[start, numSymbol, numSpeed])

  return (
    <div className={styles.wrap_speed}>
      <h3 className={styles.h3}>
        Скорость
      </h3>
      <div>
        <span className={styles.span}>
          <b className={styles.num_speed}>
            {numSymbol}
          </b> зн./мин
        </span>
      </div>
    </div>
  )
}

export default Speed
