import { ImageResponse } from "next/og";
import { clientConfig } from "@/config/client.config";

export const alt = `${clientConfig.company.name} — ${clientConfig.company.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { design } = clientConfig;
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, color: design.backgroundColor, background: design.secondaryColor, fontFamily: "serif", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -60, bottom: -120, fontFamily: "sans-serif", fontSize: 330, lineHeight: 1, fontWeight: 900, letterSpacing: "-26px", color: "rgba(255,255,255,.035)" }}>BRAVO</div>
      <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", fontFamily: "sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: "4px" }}>
        <span>BRAVO / BARBER CLUB</span><span style={{ color: design.accentColor }}>TIMBÓ · SC</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
        <div style={{ color: design.accentColor, fontFamily: "sans-serif", fontSize: 18, letterSpacing: "5px", fontWeight: 800 }}>CORTE · BARBA · GROOMING</div>
        <div style={{ marginTop: 22, fontSize: 100, lineHeight: .86, letterSpacing: "-6px" }}>Precisão é um ritual.</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.22)", fontFamily: "sans-serif", fontSize: 16, color: "rgba(241,236,228,.65)" }}>
        <span>BARBEARIA CONTEMPORÂNEA</span><span>BRV / 26</span>
      </div>
    </div>,
    size,
  );
}
