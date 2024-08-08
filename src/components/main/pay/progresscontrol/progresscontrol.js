import rightArrow from './rightarrow.svg'
import leftArrow from './leftarrow.svg'
import styles from './progresscontrol.module.css'
import { useContext } from 'react';
import {Step} from '../../../../stepContext';

function Button({content, arrowsrc}) {
  const step = useContext(Step).step
  const setStep = useContext(Step).setStep

  function handleNextClick() {
    if (step === 3) {
      return
    } else {
      setStep(step+1)
    }
  }
  return(
    <div className={styles.button} onClick={handleNextClick}>
      <p className={styles.buttonContent}>{content}</p>
      <img src={arrowsrc} className={styles.buttonImg}/>
    </div>
  )
}

export default function ProgressControl() {

  const step = useContext(Step).step
  const setStep = useContext(Step).setStep

  function handlePrevious() {
    if(step === 1) {
      setStep(1)
    } else {
      setStep(step-1)
    }
  }

  return(
    <div className={styles.progresscontrol}>
      <div className={styles.hr}></div>
      <div className={styles.buttonArea}>
        {step === 1? '': <div className={styles.stepBack} onClick={handlePrevious}>
          <img src={leftArrow} className={styles.stepBackArrow}/>
          <p className={styles.stepBackContent}>上一步</p>
        </div>}
        <Button content={step < 3? '下一步' : '確認下單'} arrowsrc={rightArrow} />
      </div>

    </div>
  )
}