import React, { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSlector';
import Loading from '../loading/Loading';

import styles from './sectionCard.module.scss';
import WrapperdPart from './WrappedPart/WrapperdPart';

export interface ISectionCard {
  start: boolean;
  setStart?: (value: boolean) => void ;
}

const SectionCard = ({start, setStart}: ISectionCard) => {
  const { text, loading, error } = useTypedSelector( state => state.text);
  const [begin, setBegin] = useState(false);
  const { fetchText } = useActions();

  useEffect(() => {
    fetchText();
  }, [])

  if(loading && !text) {
    return (
      <section className={styles.wrap}>
        <Loading />
      </section>
    )
  }
  
  return (
    <>
    <section>
     <WrapperdPart 
      text={text.split('')} 
      start={start}
      setStart={setStart}
      />
    </section>
    </>
  )
}

export default SectionCard
