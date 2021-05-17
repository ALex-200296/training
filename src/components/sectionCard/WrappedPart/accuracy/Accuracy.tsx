import React, { useEffect, useState } from 'react'
import styles from './accuracy.module.scss'

export interface IAccuracy {
  accNum: number;
  textLength: number;
}

const Accuracy = ({accNum, textLength}: IAccuracy) => {
  const [acc, setAcc] = useState<number>(100);

  useEffect(() => {
    setAcc( prev => {
      return +((100 - ((accNum * 100) / 386)).toFixed(2))
    })
  }, [accNum])

  return (
    <div className={styles.wrap_accuracy}>
      <h3 className={styles.h3}>
        Точность
      </h3>
      <div>
        <span className={styles.span}>
          <b className={styles.num_accuracy}>
            {accNum === 0
              ? 100
              : acc
            }
          </b> %
        </span>
      </div>
    </div>
  )
}


export default Accuracy
