'use client';

import {
  LiveKitRoom,
  RoomAudioRenderer
} from "@livekit/components-react";
import { useRouter } from "next/navigation";
import styles from '../styles/SupportPage.module.css';
import {SimpleVoiceAssistant} from "@/components/livekit/SimpleVoiceAssistant";

export default function Page() {
  const router = useRouter();

  const serverUrl = process.env.NEXT_PUBLIC_LIVEKIT_SERVER_URL;
  const token = process.env.NEXT_PUBLIC_LIVEKIT_TOKEN;

  return (
    <div className={styles.main}>
      <div className={styles.controlSection}>
        <LiveKitRoom
          serverUrl={serverUrl}
          token={token}
          connect={true}
          video={false}
          audio={false}
          onDisconnected={() => router.push('/')}
        >
          <RoomAudioRenderer />
          <SimpleVoiceAssistant />
        </LiveKitRoom>
      </div>
    </div>
  );
}