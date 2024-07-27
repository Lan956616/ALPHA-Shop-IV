import styles from './pay.module.css'
import StepProgress from './stepprogress/stepprogress'
import Step1 from './step1/step1'
import ProgressControl from './progresscontrol/progresscontrol'

export default function Pay() {
  return(
    <div className={styles.mainPay}>
      <StepProgress/>
      <Step1/>
      <ProgressControl/>
    </div>
  )
}