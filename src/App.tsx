import Skeleton from "./Skeleton";
import Sweep from "./Sweep";
import TestImage from './assets/image.jpg';

function App() {
  return (
    <div>
      <Sweep>
        <Skeleton />
      </Sweep>

      <div style={{ marginTop: 16 }}>
        <Sweep lightDegree="45deg" lightBg="rgba(255, 255, 255, 0.2)" lightWidth={20} duration="5s">
          <img src={TestImage} style={{ width: '100%' }} alt=""/>
        </Sweep>
      </div>
    </div>
  )
}

export default App
