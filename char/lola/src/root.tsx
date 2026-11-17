import { Composition, Sequence } from "remotion";
import { ScientistAlya } from "./components/ScientistAlya";

export const Root = () => {
  return (
    <Composition
      id="AlyaScientistAnimation"
      component={MainScene}
      durationInFrames={300} // Durasi 10 detik pada 30 fps
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

const MainScene = () => {
  return (
    <div style={{
      flex: 1,
      backgroundColor: "#f3f4f6",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      width: "100%",
      height: "100%"
    }}>
      {/* Detik ke-0 s.d. 3: Alya Menyapa (Waving) dengan ekspresi Smiling */}
      <Sequence from={0} durationInFrames={90}>
        <div style={{ transform: "scale(1.5)" }}>
          <ScientistAlya pose="waving" expression="smiling" />
        </div>
      </Sequence>

      {/* Detik ke-3 s.d. 7: Alya Menunjuk Papan/Alat (Pointing) dengan ekspresi Confident */}
      <Sequence from={90} durationInFrames={120}>
        <div style={{ transform: "scale(1.5)" }}>
          <ScientistAlya pose="pointing" expression="confident" />
        </div>
      </Sequence>

      {/* Detik ke-7 s.d. 10: Alya Berpikir (Thinking) dengan ekspresi Focused */}
      <Sequence from={210} durationInFrames={90}>
        <div style={{ transform: "scale(1.5)" }}>
          <ScientistAlya pose="thinking" expression="focused" />
        </div>
      </Sequence>
    </div>
  );
};