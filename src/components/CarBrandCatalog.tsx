import { Card, CardContent } from "@/components/ui/card";

const CarBrandCatalog = () => {
  const carBrands = [
    { name: "BMW", logo: "🔷", count: "2,500+ запчастей" },
    { name: "Mercedes", logo: "⭐", count: "3,200+ запчастей" },
    { name: "Audi", logo: "🔴", count: "1,800+ запчастей" },
    { name: "Volkswagen", logo: "🔵", count: "2,100+ запчастей" },
    { name: "Toyota", logo: "🔺", count: "4,500+ запчастей" },
    { name: "Honda", logo: "⚪", count: "2,800+ запчастей" },
    { name: "Nissan", logo: "⚫", count: "2,300+ запчастей" },
    { name: "Hyundai", logo: "🔻", count: "1,900+ запчастей" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">
          Каталог по маркам автомобилей
        </h2>
        <p className="text-center text-slate-600 mb-12">
          Выберите марку вашего автомобиля для поиска запчастей
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {carBrands.map((brand) => (
            <Card
              key={brand.name}
              className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-blue-200"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {brand.logo}
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">
                  {brand.name}
                </h3>
                <p className="text-sm text-slate-600">{brand.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Не нашли свою марку?</p>
          <button className="text-blue-600 hover:text-blue-800 font-medium underline">
            Посмотреть все марки
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarBrandCatalog;
