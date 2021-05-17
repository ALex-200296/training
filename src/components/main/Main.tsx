import React, { useState } from 'react'
import Container from '../container/Container'
import SectionCard from '../sectionCard/SectionCard'
import SectionModal from '../sectionModal/SectionModal'
import './main.module.scss'

const Main: React.FC = () => {
  const [start, setStart] = useState(false);

  return (
    <main className="main">
      <Container>
        {start 
          ? <SectionCard start={start} setStart={setStart}/>
          : <SectionModal setStart={setStart}/>
        }
      </Container>
    </main>
  )
}

export default Main
