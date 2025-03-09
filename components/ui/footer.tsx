import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border border-t border-t-red-800 ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold">Contact</h3>
          <p className="flex items-center justify-center md:justify-start mt-2">
            <Phone className="w-5 h-5 mr-2" />
            <Link href="tel:+40770713871" className="hover:text-yellow-400">
              +40 770 713 871
            </Link>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Address</h3>
          <p className="flex items-center justify-center md:justify-start mt-2">
            <MapPin className="w-5 h-5 mr-2" />
            <Link
              href="https://maps.app.goo.gl/DpYzv4QZJRLBQ1rL6"
              target="_blank"
              className="hover:text-yellow-400"
            >
              Str. Soveja 104, Constanța, Romania
            </Link>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Hours</h3>
          <p className="mt-2">MON – SUN: 8AM – 10PM</p>
        </div>
      </div>

      <div className="mt-6 flex justify-center space-x-6">
        <Link
          href="https://facebook.com"
          target="_blank"
          className="text-yellow-400"
        >
          <Facebook className="w-7 h-7" />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          className="text-yellow-400"
        >
          <Instagram className="w-7 h-7" />
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} ENGITECH
      </p>
    </footer>
  );
}
