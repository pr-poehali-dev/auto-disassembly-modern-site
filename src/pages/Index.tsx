import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Hero from "@/components/Hero";
import CarBrandCatalog from "@/components/CarBrandCatalog";
import OnlineChat from "@/components/OnlineChat";

const Index = () => {
  const [vinCode, setVinCode] = useState("");

  const handleVinSearch = () => {
    console.log("Поиск по VIN:", vinCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />

      {/* VIN Search Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Поиск запчастей по VIN-коду
          </h2>
          <p className="text-slate-600 mb-8">
            Введите VIN-код автомобиля для точного подбора запчастей
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Введите VIN-код"
              value={vinCode}
              onChange={(e) => setVinCode(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={handleVinSearch}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Icon name="Search" size={20} className="mr-2" />
              Найти
            </Button>
          </div>
        </div>
      </section>

      <CarBrandCatalog />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Наши преимущества
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Camera"
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />
                <CardTitle className="text-lg">Фото запчастей</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Детальные фотографии состояния каждой запчасти
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="MessageCircle"
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />
                <CardTitle className="text-lg">Онлайн консультации</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Помощь в подборе и расчет доставки
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Shield"
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />
                <CardTitle className="text-lg">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Гарантии на все б/у запчасти</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon
                  name="Truck"
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />
                <CardTitle className="text-lg">Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Доставка по всей России</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <OnlineChat />
    </div>
  );
};

export default Index;
