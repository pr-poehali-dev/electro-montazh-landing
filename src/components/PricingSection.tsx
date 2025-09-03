import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const PricingSection = () => {
  const services = [
    {
      category: "Розетки и выключатели",
      items: [
        { service: "Установка розетки", price: "от 800", unit: "шт" },
        { service: "Установка выключателя", price: "от 600", unit: "шт" },
        { service: "Замена розетки", price: "от 500", unit: "шт" },
        { service: "USB-розетка", price: "от 1200", unit: "шт" }
      ]
    },
    {
      category: "Освещение",
      items: [
        { service: "Подключение люстры", price: "от 1500", unit: "шт" },
        { service: "Монтаж точечных светильников", price: "от 400", unit: "шт" },
        { service: "LED-подсветка", price: "от 300", unit: "п.м" },
        { service: "Установка датчика движения", price: "от 1000", unit: "шт" }
      ]
    },
    {
      category: "Электропроводка",
      items: [
        { service: "Прокладка кабеля в штробе", price: "от 200", unit: "п.м" },
        { service: "Прокладка кабеля в гофре", price: "от 150", unit: "п.м" },
        { service: "Замена проводки (1-комн.)", price: "от 25000", unit: "кв" },
        { service: "Замена проводки (2-комн.)", price: "от 35000", unit: "кв" }
      ]
    },
    {
      category: "Электрощитовые работы",
      items: [
        { service: "Сборка электрощита", price: "от 5000", unit: "шт" },
        { service: "Установка автомата", price: "от 800", unit: "шт" },
        { service: "Установка УЗО", price: "от 1200", unit: "шт" },
        { service: "Подключение счетчика", price: "от 3000", unit: "шт" }
      ]
    }
  ];

  const packages = [
    {
      title: "Базовый",
      price: "от 15000",
      description: "Для небольших объектов",
      features: [
        "Диагностика электросети",
        "Замена 5 розеток",
        "Замена 3 выключателей",
        "Подключение 2 светильников",
        "Гарантия 1 год"
      ],
      popular: false
    },
    {
      title: "Стандартный", 
      price: "от 35000",
      description: "Оптимальное решение",
      features: [
        "Частичная замена проводки",
        "Установка 10 розеток",
        "Установка 6 выключателей", 
        "Подключение освещения",
        "Сборка щитка",
        "Гарантия 2 года"
      ],
      popular: true
    },
    {
      title: "Премиум",
      price: "от 60000", 
      description: "Полный комплекс работ",
      features: [
        "Полная замена проводки",
        "Умное освещение",
        "USB-розетки", 
        "Система безопасности",
        "Молниезащита",
        "Гарантия 3 года"
      ],
      popular: false
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Цены на услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Честные и прозрачные цены на все виды электромонтажных работ
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold text-secondary">{pkg.title}</h3>
                <div className="text-3xl font-bold text-primary mt-2">
                  {pkg.price} ₽
                </div>
                <p className="text-gray-600 text-sm">{pkg.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => scrollToSection('#contacts')}
                  className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
                >
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <h3 className="text-lg font-bold text-secondary text-center">
                  {category.category}
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-start gap-2">
                      <span className="text-sm text-gray-700 flex-1">{item.service}</span>
                      <span className="text-sm font-semibold text-primary whitespace-nowrap">
                        {item.price} ₽/{item.unit}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Нужна точная смета?
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Вызовите мастера для бесплатного расчета стоимости работ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('#contacts')}
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;