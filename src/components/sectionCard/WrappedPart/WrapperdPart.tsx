import React, { useEffect, useRef, useState } from 'react';
import styles from './wrapperrdtPart.module.scss';
import { useKeyPress } from '../../../hooks/useKeyPress';

import Text from './text/Text';
import Speed from './speed/Speed';
import Error from './error/Error';
import Accuracy from './accuracy/Accuracy';
import End from './end/End';

export interface IWrapperPart {
  text: string[];
  start: boolean;
  children?: React.ReactNode;
  setStart?: (value: boolean) => void ;
}


const WrapperPart = ({ text, start, setStart }: IWrapperPart) => {
  const [begin, setBegin] = useState(start)
  const {
    end,
     currentNumTxt, 
     accNum,
     handlerChange,
     setMainTxt,
     error,
  } = useKeyPress();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMainTxt(text);
  },[])

  useEffect(() => {
    if(end) {
      setBegin(false)
    }
  }, [end])

  const handlerBlur = () => {
    inputRef.current?.focus()
  }

  const handlerStart = () => {
    if(setStart) {
      setStart(false);
    }
  }

  return (
    <><input 
    type="text" 
    ref={inputRef}
    autoFocus
    onKeyPress={handlerChange}
    onBlur={handlerBlur}
    className={styles.input}
    />
    <div className={styles.wrap}>
      <div>
        {end 
          ? <End />
          : <Text text={text} numStyle={currentNumTxt}/>
        }
      </div>
      <div className={styles.mainStat}>
        <Speed start={begin} currentNumTxt={currentNumTxt} />
        <Error error={error}/>
        <Accuracy accNum={accNum} textLength={text.length}/>
        <button 
          className={styles.btn_again}
          onClick={handlerStart}
        >
          Заново
        </button>
      </div>
    </div>
    </>
  )
}

export default WrapperPart
