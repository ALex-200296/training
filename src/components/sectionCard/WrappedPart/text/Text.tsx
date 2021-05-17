import React, { useEffect } from 'react'
import styles from './text.module.scss';

interface IText {
  text: string[],
  numStyle: number,
  children?: React.ReactNode
}

const Text = ({text, numStyle}: IText) => {

  return (
    <>
    {text.map( (str, index) => (
      <span key={index} className={
        `
        text
        ${index === numStyle && styles.current_text} 
        ${index < numStyle && styles.passed_text}
        `
        }>
        {str}
      </span>
    )) 
    }
    </>
  )
}

export default Text
