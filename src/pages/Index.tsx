import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-wave"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-wave" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Школа плавания<br />Swim Family
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold">
              больше, чем просто уроки плавания
            </p>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              От новичка до уверенного пловца за 10 занятий!
            </p>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('pricing')}
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto font-semibold shadow-2xl hover:scale-105 transition-transform"
            >
              Записаться на пробное занятие
            </Button>
          </div>
        </div>
      </section>

      <section id="marquee" className="bg-blue-600 py-4 overflow-hidden">
        <div className="whitespace-nowrap">
          <span className="inline-block animate-marquee text-white text-xl font-semibold uppercase tracking-wider">
            <span className="mx-8">🏊‍♂️ идет набор на ноябрь</span>
            <span className="mx-8">🏊‍♀️ идет набор на ноябрь</span>
            <span className="mx-8">🏊‍♂️ идет набор на ноябрь</span>
            <span className="mx-8">🏊‍♀️ идет набор на ноябрь</span>
            <span className="mx-8">🏊‍♂️ идет набор на ноябрь</span>
            <span className="mx-8">🏊‍♀️ идет набор на ноябрь</span>
          </span>
        </div>
      </section>

      <section id="methodology" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
            В Swim Family ученики учатся плавать<br />в атмосфере заботы и безопасности
          </h2>
          <p className="text-xl text-center mb-16 text-gray-600">
            С первого занятия по собственной методике поможем:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-2xl transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Icon name="Heart" className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Адаптация к воде</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Адаптироваться к водной среде и понять, что вода это не страшно
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Icon name="Smile" className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Любовь к плаванию</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Полюбить плавание и начать ходить с удовольствием
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Icon name="Target" className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Раскрытие потенциала</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Раскрыть свой потенциал и проплыть первые метры
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Icon name="TrendingUp" className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Улучшение техники</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Улучшить свои текущие показатели в плавании
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="principles" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Принципы нашей школы
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-full flex-shrink-0">
                    <Icon name="Home" className="text-cyan-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Семейная атмосфера</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Семейная атмосфера на тренировках и пристальное внимание к каждому ученику, чтобы он ощущал себя, как дома
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-full flex-shrink-0">
                    <Icon name="Users" className="text-cyan-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Поддерживающие тренеры</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Тренеры, которые верят, поддерживают и учат любить плавание, а не бояться ошибок
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-full flex-shrink-0">
                    <Icon name="User" className="text-cyan-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Индивидуальный подход</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Индивидуальные программы, внимание к психологии занимающегося, безопасная среда и видимый прогресс
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-full flex-shrink-0">
                    <Icon name="Award" className="text-cyan-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Фокус на технику</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Тренировки с акцентом на технику и уважение к каждому ученику и его прогрессу
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Стоимость групповых занятий
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-2xl transition-all hover:scale-105 border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Droplet" className="text-blue-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Стартовый</h3>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-blue-600 mb-2">4200₽</div>
                  <div className="text-gray-600">4 занятия</div>
                  <div className="text-sm text-gray-500 mt-2">1050₽ / занятие</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all hover:scale-105 border-4 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full font-semibold">
                Популярный
              </div>
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Waves" className="text-blue-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Оптимальный</h3>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-blue-600 mb-2">7800₽</div>
                  <div className="text-gray-600">8 занятий</div>
                  <div className="text-sm text-gray-500 mt-2">975₽ / занятие</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all hover:scale-105 border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Zap" className="text-blue-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Выгодный</h3>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-blue-600 mb-2">9900₽</div>
                  <div className="text-gray-600">12 занятий</div>
                  <div className="text-sm text-gray-500 mt-2">825₽ / занятие</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">После покупки абонемента вы получаете:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="flex-shrink-0" />
                  <p className="text-lg">Индивидуальный подход еще до начала занятий</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="flex-shrink-0" />
                  <p className="text-lg">Комфортные группы</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="flex-shrink-0" />
                  <p className="text-lg">Всегда чистый бассейн</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="trainers" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Тренерский состав
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-blue-200 to-cyan-200 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/cb6dac0e-c935-4278-a1d4-6f6488c5b019/files/bec3be06-0103-4a04-8017-0aec3627681a.jpg"
                    alt="Тренер"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Очагов Антон Владиславович</h3>
                <p className="text-blue-600 font-semibold mb-3">КМС по плаванию</p>
                <p className="text-gray-600 mb-4">Тренерский стаж: 10 лет</p>
                <a href="tel:89169455813" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                  <Icon name="Phone" size={20} />
                  8 (916) 945-58-13
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-cyan-200 to-blue-200 rounded-lg mb-6 flex items-center justify-center">
                  <Icon name="User" className="text-blue-600" size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Амирханов Артем</h3>
                <p className="text-blue-600 font-semibold mb-3">Профессиональный тренер</p>
                <p className="text-gray-600">Опытный специалист по обучению плаванию</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Отзывы учеников школы
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Отличная школа! Ребенок за месяц научился плавать. Тренеры очень внимательные и профессиональные."
                </p>
                <p className="font-semibold text-gray-800">Мария П.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Раньше боялся воды, а теперь с удовольствием хожу на тренировки. Спасибо за терпение и поддержку!"
                </p>
                <p className="font-semibold text-gray-800">Дмитрий С.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Семейная атмосфера, чистый бассейн, профессиональные тренеры. Всё на высшем уровне!"
                </p>
                <p className="font-semibold text-gray-800">Анна К.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white text-lg px-10 py-6 h-auto font-semibold shadow-xl hover:scale-105 transition-transform"
            >
              Попасть на занятие со скидкой
            </Button>
          </div>
        </div>
      </section>

      <section id="locations" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Адреса бассейнов
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Спортивный комплекс Яуза</h3>
                <p className="text-gray-600 mb-4">Олонецкий пр., 5, Москва</p>
                <a 
                  href="https://yandex.ru/maps/?text=Олонецкий пр., 5, Москва"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                >
                  Открыть на карте
                  <Icon name="ExternalLink" size={16} />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Голден Фитнесс</h3>
                <p className="text-gray-600 mb-4">Староватутинский пр., 14, Москва</p>
                <a 
                  href="https://yandex.ru/maps/?text=Староватутинский пр., 14, Москва"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                >
                  Открыть на карте
                  <Icon name="ExternalLink" size={16} />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">НИУ МГСУ Бассейн</h3>
                <p className="text-gray-600 mb-4">Ярославское ш., 26, стр. 4, Москва</p>
                <a 
                  href="https://yandex.ru/maps/?text=Ярославское ш., 26, стр. 4, Москва"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                >
                  Открыть на карте
                  <Icon name="ExternalLink" size={16} />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-3xl font-bold mb-4">Swim Family</h3>
          <p className="text-gray-400 mb-6">Школа плавания для всей семьи</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="tel:89169455813" className="hover:text-blue-400 transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="mailto:info@swimfamily.ru" className="hover:text-blue-400 transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Swim Family. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
