import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <div className="grid grid-cols-2 gap-6">
        <Image
          src="/images/mariel_kuncartcuadro1.jpg"
          alt="Painting 1"
          width={600}
          height={400}
          className="rounded shadow"
        />
        <Image
          src="/images/mariel_kuncartcuadro2.jpg"
          alt="Painting 2"
          width={600}
          height={400}
          className="rounded shadow"
        />
        <Image
          src="/images/mariel_kuncartcuadro3.jpg"
          alt="Painting 2"
          width={600}
          height={400}
          className="rounded shadow"
        />
      </div>
    </div>
  );
}
