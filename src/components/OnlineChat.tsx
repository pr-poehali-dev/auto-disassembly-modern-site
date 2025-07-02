import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const OnlineChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (message.trim()) {
      console.log("Отправка сообщения:", message);
      setMessage("");
    }
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-80 z-50">
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-blue-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} />
                  </div>
                  <div>
                    <CardTitle className="text-sm">Консультант Анна</CardTitle>
                    <p className="text-xs text-blue-100">Онлайн</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="text-white hover:bg-blue-700"
                >
                  <Icon name="X" size={16} />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-4 max-h-64 overflow-y-auto">
              <div className="space-y-3">
                <div className="bg-gray-100 p-3 rounded-lg text-sm">
                  <p>
                    Здравствуйте! Я помогу подобрать запчасти для вашего
                    автомобиля. Какая запчасть вас интересует?
                  </p>
                </div>

                <div className="bg-blue-100 p-3 rounded-lg text-sm ml-8">
                  <p>Также могу рассчитать стоимость доставки в ваш город 🚛</p>
                </div>
              </div>
            </CardContent>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Напишите сообщение..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={sendMessage}
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Chat Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <Button
          onClick={toggleChat}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          size="sm"
        >
          {isOpen ? (
            <Icon name="X" size={24} />
          ) : (
            <Icon name="MessageCircle" size={24} />
          )}
        </Button>

        {!isOpen && (
          <div className="absolute -top-12 right-0 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
            Нужна помощь?
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default OnlineChat;
