import {FC} from "react";
import styles from './styles.module.scss';

const Skeleton:FC = ()=> {
  return (
    <div>
      {/* 头部 */}
      <div className={styles.row}>
        <div className={styles.col} style={{ height: 20 }}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.col} style={{ height: 20 }}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.col} style={{ height: 20 }}></div>
      </div>

      {/*内容*/}
      <div className={styles.row}>
        <div className={styles.col} style={{ height: 300 }}></div>
        <div className={styles.col} style={{ height: 300 }}></div>
      </div>

      <div className={styles.row}>
        <div className={styles.col} style={{ height: 300 }}></div>
        <div className={styles.col} style={{ height: 300 }}></div>
      </div>

      {/* 底部 */}
      <div className={styles.row}>
        <div className={styles.col} style={{ height: 20 }}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.col} style={{ height: 20 }}></div>
      </div>
    </div>
  )
}

export default Skeleton;
