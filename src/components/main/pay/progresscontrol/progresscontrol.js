import rightArrow from './rightarrow.svg'
import leftArrow from './leftarrow.svg'
import styles from './progresscontrol.module.css'

function Button({content, arrowsrc}) {

  return(
    <div className={styles.button}>
      <p className={styles.buttonContent}>{content}</p>
      <img src={arrowsrc} className={styles.buttonImg}/>
    </div>
  )
}

export default function ProgressControl() {
  return(
    <div className={styles.progresscontrol}>
      <div className={styles.hr}></div>
      <div className={styles.buttonArea}>
        <div className={styles.stepBack}>
          <img src={leftArrow} className={styles.stepBackArrow}/>
          <p className={styles.stepBackContent}>下一步</p>
        </div>
        <Button content='下一步' arrowsrc={rightArrow}/>
      </div>

    </div>
  )
}