import { mockCategories } from "@/utils/const";

export default function MenuList() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      {mockCategories.map((category) => (
        <div key={category.id} className="mb-12">
          <h2 className="text-4xl italic font-serif text-center mb-6">
            {category.name}
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border-b border-gray-300 pb-2"
              >
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.quantity}</p>
                </div>
                <span className="text-lg font-bold">{product.price} LEI</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
