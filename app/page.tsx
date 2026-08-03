import Image from "next/image";

export default function Home() {
  return (
    <main className="home">
      <p className="overline">Fraternitatis Universalis</p>

      <div className="emblem">
        <Image
          src="/emblema-fraternitatis.png"
          alt="Emblema de Fraternitatis Universalis, Ouroboros et Lucis Filli No. 433"
          width={1254}
          height={1254}
          priority
        />
      </div>

      <h1>Ouroboros et Lucis Filli</h1>
      <p className="number">No. 433</p>
      <p className="subtitle">
        Jurisdiccionada a la Muy Respetable Gran Logia Valle de México
      </p>
      <div className="line" />
      <p className="status">Sitio oficial en desarrollo</p>
    </main>
  );
}
