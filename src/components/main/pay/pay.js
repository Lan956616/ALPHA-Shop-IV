import styles from './pay.module.css'
import StepProgress from './stepprogress/stepprogress'
import Step1 from './step1/step1'
import Step2 from './step2/step2'
import Step3 from './step3/step3'
import ProgressControl from './progresscontrol/progresscontrol'

export default function Pay({step, setStep}) {
  return(
    <div className={styles.mainPay}>
      <StepProgress/>
      <Step1/>
      <ProgressControl step={step} setStep={setStep}/>
    </div>
  )
}