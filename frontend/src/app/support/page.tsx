'use client';

import {
  BarVisualizer,
  Chat,
  DisconnectButton,
  LiveKitRoom,
  RoomAudioRenderer,
  TrackToggle,
  useVoiceAssistant
} from "@livekit/components-react";
import { useRouter } from "next/navigation";
import styles from '../styles/SupportPage.module.css';
import { Track } from "livekit-client";
import { useState } from "react";

export function Page() {
  const router = useRouter();
  const [micActive, setMicActive] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.controlSection}>
        <LiveKitRoom
          serverUrl="wss://travelop-08yu97jy.livekit.cloud"
          token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTA2OTE1MTUsImlzcyI6IkFQSUNtaGtDanZuRlFUVCIsIm5iZiI6MTc1MDM1MTUxNSwic3ViIjoieWFzYXMiLCJ2aWRlbyI6eyJjYW5QdWJsaXNoIjp0cnVlLCJjYW5QdWJsaXNoRGF0YSI6dHJ1ZSwiY2FuU3Vic2NyaWJlIjp0cnVlLCJyb29tIjoieWFzYXMiLCJyb29tSm9pbiI6dHJ1ZX19.SoiPpacvM2D9NoPfh1SqcxDjfrNh5TCX-VkDLB9iu6s"
          connect={true}
          video={false}
          audio={false}
          onDisconnected={() => router.push('/')}
        >
          <RoomAudioRenderer />

          <RoomContent />

          <div className={styles.bar}>
            <TrackToggle
              source={Track.Source.Camera}
              className={`${styles.toggleBtn} ${!cameraActive ? styles.toggleBtnActive : ''}`}
              id={styles.button}
              onClick={() => setCameraActive(!cameraActive)}
            />
            <TrackToggle
              source={Track.Source.Microphone}
              className={`${styles.toggleBtn} ${!micActive ? styles.toggleBtnActive : ''}`}
              id={styles.button}
              onClick={() => setMicActive(!micActive)}
            />
            <DisconnectButton
              className={styles.disconnectBtn}
              id={styles.button}
            >
              Disconnect
            </DisconnectButton>
          </div>

        </LiveKitRoom>
      </div>
    </div>
  );
}

function RoomContent() {
  const { state, audioTrack } = useVoiceAssistant();
  return <BarVisualizer state={state} barCount={5} trackRef={audioTrack} options={{minHeight: 24}} color="lime"/>;
}

export default Page;
