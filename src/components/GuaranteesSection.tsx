import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const GuaranteesSection = () => {
  const guarantees = [
    {
      icon: "Shield",
      title: "Гарантия 3 года",
      description: "На все виды электромонтажных работ",
      details: [
        "Письменная гарантия на работы",
        "Бесплатное устранение дефектов",
        "Замена материалов за наш счет",
        "24/7 поддержка в течение гарантийного срока"
      ]
    },
    {
      icon: "FileCheck",
      title: "Все документы",
      description: "Официальное оформление работ",
      details: [
        "Договор на оказание услуг",
        "Акт выполненных работ",
        "Гарантийный талон",
        "Сертификаты на материалы"
      ]
    },
    {
      icon: "UserCheck",
      title: "Лицензии и допуски",
      description: "Работаем полностью официально",
      details: [
        "Лицензия на электромонтажные работы",
        "Допуск СРО",
        "Сертификаты специалистов",
        "Страхование ответственности"
      ]
    },
    {
      icon: "Wrench",
      title: "Качественные материалы",
      description: "Используем только проверенные бренды",
      details: [
        "Schneider Electric, Legrand, ABB",
        "Сертификаты соответствия ГОСТ",
        "Заводская гарантия на материалы",
        "Возможность выбора производителя"
      ]
    }
  ];

  const workSteps = [
    {
      step: "01",
      title: "Вызов мастера",
      description: "Бесплатный выезд и диагностика",
      icon: "Phone"
    },
    {
      step: "02", 
      title: "Составление сметы",
      description: "Точный расчет стоимости работ",
      icon: "Calculator"
    },
    {
      step: "03",
      title: "Заключение договора",
      description: "Фиксируем условия и сроки",
      icon: "FileText"
    },
    {
      step: "04",
      title: "Выполнение работ",
      description: "Качественный монтаж с соблюдением норм",
      icon: "Wrench"
    },
    {
      step: "05",
      title: "Сдача объекта",
      description: "Проверка, тестирование, документы",
      icon: "CheckCircle"
    }
  ];

  return (
    <section id="guarantees" className="py-20 bg-gradient-to-br from-gray-50 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Наши гарантии
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы уверены в качестве своей работы и даем максимальные гарантии
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={guarantee.icon as any} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {guarantee.description}
                </p>
                <ul className="space-y-2 text-sm">
                  {guarantee.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary flex-shrink-0" size={14} />
                      <span className="text-gray-700 text-left">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary text-center mb-12">
            Как мы работаем
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {workSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon as any} className="text-primary" size={20} />
                  </div>
                  <h4 className="font-bold text-secondary mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < workSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-3" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Дополнительные преимущества
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-secondary">Соблюдение сроков</h4>
                    <p className="text-gray-600 text-sm">Штраф за каждый день просрочки - 1% от стоимости работ</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Home" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-secondary">Чистота</h4>
                    <p className="text-gray-600 text-sm">Защитим мебель пленкой и уберем весь мусор после работы</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="CreditCard" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-secondary">Удобная оплата</h4>
                    <p className="text-gray-600 text-sm">Наличные, карта, безналичный расчет. Оплата после приемки</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Headphones" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-secondary">Поддержка 24/7</h4>
                    <p className="text-gray-600 text-sm">Консультации и помощь в любое время в течение гарантии</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6">
              <div className="text-center mb-6">
                <Icon name="Award" className="text-primary mx-auto mb-4" size={48} />
                <h4 className="text-xl font-bold text-secondary mb-2">
                  Сертифицированный мастер
                </h4>
                <p className="text-gray-600">
                  8 лет опыта, постоянное обучение новым технологиям
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-gray-600">Объектов</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary">0</div>
                  <div className="text-xs text-gray-600">Жалоб</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-xs text-gray-600">Года гарантии</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-gray-600">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;