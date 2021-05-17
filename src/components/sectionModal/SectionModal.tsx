import React from 'react';
import styles from './sectionModal.module.scss';

export interface ISectionModal {
  setStart?: (value: boolean) => void ;
}

const SectionModal = ({setStart}: ISectionModal) => {

  const handlerStart = () => {
    if(setStart) {
      setStart(true);
    }
  }
  return (
    <section className={styles.section}>
      <div className={styles.wrap_modal}>
        <h1 className={styles.h1}>
          Поехали?
        </h1>
        <button className={styles.btn} onClick={handlerStart}>
          Начать печатать
        </button>
      </div>
    </section>
  )
}

export default SectionModal
