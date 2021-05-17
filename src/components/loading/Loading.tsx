import React from 'react';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <>
    <div className={styles.lds_default}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </>
  )
}

export default Loading
