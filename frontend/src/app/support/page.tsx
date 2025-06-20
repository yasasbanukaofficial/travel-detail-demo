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
          <SimpleVoiceAssistant />
        </LiveKitRoom>
      </div>
    </div>
  );
}