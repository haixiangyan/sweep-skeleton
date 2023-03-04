import {CSSProperties, FC, HTMLAttributes, useMemo} from "react";
import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  lightDegree?: string; // 倾斜角度
  lightWidth?: CSSProperties['width']; // 扫光的宽度
  lightBg?: string; // 扫光的背景
  duration?: string; // 扫光动画时间
}

const Sweep: FC<Props> = (props) => {
  const {
    children,
    lightWidth = 80,
    lightDegree = '22.5deg',
    lightBg = 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .24) 50.04%, rgba(255, 255, 255, 0) 99.37%)',
    duration = '2s',
  } = props;

  const sweepLightStyle = useMemo(() => {
    return {
      width: lightWidth,
      background: lightBg,
      transform: `rotate(${lightDegree}) scaleY(2)`,
    }
  }, [lightBg, lightWidth, lightDegree])

  return (
    <div className={styles.container}>
      {children}

      <div className={styles.mask} style={{ animationDuration: duration }}>
        <div className={styles.sweepLight} style={sweepLightStyle}></div>
      </div>
    </div>
  )
}

export default Sweep;
