import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          FIDEM PARS
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Профессиональный автомобильный разбор. Качественные б/у запчасти с
          гарантией. Быстрый поиск по VIN-коду и доставка по всей России.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Icon name="Search" size={20} className="mr-2" />
            Найти запчасти
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-slate-900"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Связаться с нами
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-slate-300">лет на рынке</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
            <div className="text-slate-300">довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
            <div className="text-slate-300">запчастей в наличии</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-slate-300">онлайн поддержка</div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
