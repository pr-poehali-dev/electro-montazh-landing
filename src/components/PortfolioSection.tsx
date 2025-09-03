import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Квартира в ЖК 'Современник'",
      type: "Полная замена проводки",
      area: "85 м²",
      duration: "5 дней",
      features: ["Умное освещение", "USB-розетки", "Диммеры"]
    },
    {
      title: "Коттедж в пос. Солнечный",
      type: "Электрика под ключ",
      area: "180 м²", 
      duration: "12 дней",
      features: ["Наружное освещение", "Теплый пол", "Система безопасности"]
    },
    {
      title: "Офис на ул. Центральная",
      type: "Коммерческая электрика",
      area: "120 м²",
      duration: "7 дней", 
      features: ["Аварийное освещение", "ИБП", "Структурированная сеть"]
    },
    {
      title: "Дача в СНТ 'Ромашка'",
      type: "Подключение электричества",
      area: "60 м²",
      duration: "3 дня",
      features: ["Ввод 380В", "Счетчик", "Распределительный щит"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Примеры успешно выполненных проектов электромонтажа
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-secondary mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-primary font-semibold text-sm">
                    {project.type}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Home" className="text-gray-400" size={16} />
                    <span className="text-gray-600 text-sm">{project.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" className="text-gray-400" size={16} />
                    <span className="text-gray-600 text-sm">{project.duration}</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Особенности:</p>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Icon name="Dot" className="text-primary" size={12} />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-primary/5 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Хотите увидеть больше работ?
              </h3>
              <p className="text-gray-600 mb-6">
                У нас есть портфолио из более чем 500 успешно завершенных проектов. 
                Каждый объект выполнен с соблюдением всех норм и стандартов.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                  <span className="text-sm font-medium">Фото до/после</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="FileText" className="text-primary" size={20} />
                  <span className="text-sm font-medium">Техническая документация</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={20} />
                  <span className="text-sm font-medium">Сертификаты качества</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-gray-600">Завершенных проектов</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-gray-600">Поддержка</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-3xl font-bold text-primary mb-1">3</div>
                <div className="text-sm text-gray-600">Года гарантии</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;