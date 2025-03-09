import Image from "next/image";

export default function MenuHero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-white text-center bg-black">

      <Image
        src="/menu-hero.jpg" 
        alt="Menu Background"
        layout="fill"
        objectFit="cover"
        className="opacity-60"
      />


      <h1 className="text-5xl font-bold font-serif italic relative ">Menu</h1>
    </section>
  );
}
