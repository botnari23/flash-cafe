import Link from "next/link";

const categories = [
  "Coffee",
  "Cafein Signature",
  "Hot Chocolate & Tea",
  "Milkshake & Smoothie",
  "Fresh Juice",
  "Sweets",
];

export default function MenuCategories() {
  return (
    <section className="text-center py-16">
      <h2 className="text-4xl italic font-serif">MENU</h2>

      <div className="mt-8 space-y-4">
        {categories.map((category) => (
          <div key={category} className="text-xl font-semibold">
            <Link href={`/menu#${category}`} className="relative group">
              {category}
              <span className="block w-0 group-hover:w-full transition-all h-[2px] bg-black"></span>
            </Link>
          </div>
        ))}
      </div>

      {/* Buton "Full Menu" */}
      <Link 
        href="/menu"
        className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-400 transition"
      >
        FULL MENU
      </Link>
    </section>
  );
}
