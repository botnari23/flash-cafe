import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative w-full h-[100vh] flex flex-col justify-center items-center text-white text-center bg-black">
      <Image
        src="/FlashCafe.jpg"
        alt="Cafe Background"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />

      <h1 className="text-4xl md:text-6xl font-serif relative z-10">
        FLASH ⚡ CAFE
      </h1>
      <div className="relative z-10 flex flex-col items-center space-y-2 mt-6">
        <p className="text-3xl md:text-5xl font-bold uppercase bg-gray-700/80 text-white px-4 py-1 rounded-md">
          What time is it?
        </p>
        <p className="text-3xl md:text-5xl font-bold uppercase bg-gray-700/80 text-white px-4 py-1 rounded-md">
          It&apos;s coffee time.
        </p>
      </div>

      <Link
        href="/menu"
        className="relative z-10 mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-400 transition"
      >
        SEE MENU
      </Link>
    </section>
  );
}
