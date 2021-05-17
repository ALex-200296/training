import { useState } from "react"

export const useKeyPress = () => {
  const [start, setStart] = useState<boolean>(true);
  const [end, setEnd] = useState<boolean>(false);
  const [currentNumTxt, setCurrentNumTxt] = useState<number>(0);
  const [mainTxt, setMainTxt] = useState<string[]>([]);
  const [error, setError] = useState<number>(0);
  const [accNum, setAccNum] = useState<number>(0);
  const [accBol, setAccBol] = useState<boolean>(true);

  const handlerChange = (event: React.KeyboardEvent) => {
     if(mainTxt.length === currentNumTxt) {
       setEnd(true);
     }
    if(mainTxt[currentNumTxt] === event.key) {
      setCurrentNumTxt(prev => prev + 1 );
      setAccBol(true)
    } else {
      setError(prev => prev +1 );
      if(accBol) {
        console.log(accBol)
        setAccNum(prev => prev + 1);
        setAccBol(false);
      }
    }
  }

  return {
    end,
    currentNumTxt,
    error,
    accNum,
    setStart,
    setMainTxt,
    handlerChange
  }
} 