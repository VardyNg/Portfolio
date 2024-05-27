import { Route, Routes } from "react-router-dom";
import ThreeDAnimations from './ThreeDAnimations';
import HAL from './HAL';
import PrivateTutorPlus from './PPT/';
import SSM from './SSM';
import TCPIP from './TCPIP';
import TV from './TV/index';
import TVChecker from "./TVChecker";
import VR3D from './VR3D';
import EKK from './EKK/Project.tsx'

function ProjectRoute(props){
  console.log("ProjectRoute")
  return(
    <Routes>
      <Route path="private-tutor-plus" element={<PrivateTutorPlus />}/>
      <Route path="signal-sticker-maker" element={<SSM />}/>
      <Route path="hal-3000" element={<HAL />}/>
      <Route path="3D-animations" element={<ThreeDAnimations />}/>
      <Route path="3D-vr-game" element={<VR3D />}/>
      <Route path="tcp-ip-game" element={<TCPIP />}/>
      <Route path="techvision" element={<TV/>}/>
      <Route path="tv-checker" element={<TVChecker />}/>
      <Route path="emoji-kitchen-keyboard" element={<EKK />}/>
    </Routes>
  )
}

export default ProjectRoute