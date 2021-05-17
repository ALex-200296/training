import React from 'react';
import styles from './error.module.scss';

export interface IError {
  error: number;
}

const Error = ({error}: IError) => {
  return (
    <div className={styles.wrap_error}>
      <h3 className={styles.h3}>
        Ошибки
      </h3>
      <div>
        <span className={styles.span}>
          <b className={styles.num_error}>
            {error}
          </b> ошибок
        </span>
      </div>
    </div>
  )
}

export default Error
