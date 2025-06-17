import ParticlesBackground from "@/components/ui/ParticlesBackground";
import SplitText from "@/components/ui/SplitText";
import RotatingText from "@/components/ui/RotatingText";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
        <ParticlesBackground
          particleColors={['#235aa9', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="fixed inset-0 flex items-center justify-center gap-12 -translate-y-12 overflow-hidden z-10 px-4 max-w-full w-full">

        <div className="flex-shrink-0 flex items-center justify-center">
          <SplitText
            text="Travel with"
            className="
              font-bold text-center while
              text-[clamp(1rem,14vw,4rem)]
              md:[font-size:clamp(4rem,10vw,8rem)]
              leading-tight
            "
          />
        </div>

        <div className="flex-shrink-0 flex items-center justify-center">
            <RotatingText
            texts={["Ease", "Style", "Confidence", "Guide", "Travelop"]}
            className="
              font-extrabold
              text-[clamp(2rem,18vw,8rem)]
              md:[font-size:clamp(3rem,8vw,8rem)]
              leading-none
              px-2 sm:px-2 md:px-3 bg-white text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg
            "
          />
        </div>
      </div>
    </>
  );
}
