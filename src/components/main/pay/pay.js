import styles from './pay.module.css'
import StepProgress from './stepprogress/stepprogress'
import Step1 from './step1/step1'
import Step2 from './step2/step2'
import Step3 from './step3/step3'
import ProgressControl from './progresscontrol/progresscontrol'
import { Step } from '../../../stepContext'
import { useContext } from 'react'


export default function Pay() {
  const step = useContext(Step).step
  let element;
  if (step === 1) {
    element = <Step1/>
  } else if (step === 2) {
    element = <Step2/>
  }else if (step === 3) {
    element = <Step3/>
  }
  return(
    <div className={styles.mainPay}>
      <StepProgress />
      {element}
      <ProgressControl />
    </div>
  )
}