import {FC, PropsWithChildren} from "react";
import styles from './styles.module.scss';

interface Props extends PropsWithChildren {
}

const SweepLoading: FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      {children}

      <div className={styles.mask}>
        <div className={styles.sweepLight}></div>
      </div>
    </div>
  )
}

export default SweepLoading;
