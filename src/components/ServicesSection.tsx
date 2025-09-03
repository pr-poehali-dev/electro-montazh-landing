import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: "Home",
      title: "Электрика в квартирах",
      description: "Полный спектр электромонтажных работ в квартирах",
      features: [
        "Замена проводки",
        "Установка розеток и выключателей", 
        "Подключение люстр и светильников",
        "Монтаж электрощитков"
      ]
    },
    {
      icon: "Building",
      title: "Электрика в частных домах",
      description: "Профессиональный электромонтаж в коттеджах",
      features: [
        "Проектирование электросети",
        "Наружные электролинии",
        "Заземление и молниезащита",
        "Автоматизация освещения"
      ]
    },
    {
      icon: "Zap",
      title: "Аварийные работы",
      description: "Круглосуточное устранение неисправностей",
      features: [
        "Поиск неисправностей",
        "Восстановление питания",
        "Замена автоматов",
        "Устранение коротких замыканий"
      ]
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Обеспечение электробезопасности объектов",
      features: [
        "УЗО и дифавтоматы",
        "Проверка изоляции",
        "Измерения сопротивления",
        "Протоколы испытаний"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Предоставляем полный спектр электромонтажных работ 
            для квартир и частных домов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Нужна консультация?
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Свяжитесь с нами для бесплатной оценки стоимости работ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={20} />
              <span className="text-lg font-semibold">+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} />
              <span>Работаем 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;