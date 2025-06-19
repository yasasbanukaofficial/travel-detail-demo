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
          serverUrl=""
          token=""
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
