import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    {
      icon: "Home",
      number: "400+",
      title: "Квартир и домов",
      description: "Выполнил электромонтаж"
    },
    {
      icon: "Users",
      number: "350+",
      title: "Довольных клиентов",
      description: "Которые рекомендуют меня друзьям"
    },
    {
      icon: "Calendar",
      number: "8",
      title: "Лет опыта",
      description: "В сфере электромонтажных работ"
    },
    {
      icon: "Award",
      number: "100%",
      title: "Качество работ",
      description: "Гарантирую результат"
    }
  ];

  const specializations = [
    {
      icon: "Home",
      title: "Квартиры",
      items: [
        "Замена проводки в старых квартирах",
        "Электрика в новостройках",
        "Установка розеток и выключателей",
        "Подключение освещения"
      ]
    },
    {
      icon: "Building",
      title: "Частные дома",
      items: [
        "Ввод электричества в дом",
        "Разводка по всему дому",
        "Уличное освещение",
        "Подключение бань и гаражей"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Обо мне
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Алексей Михайлов — профессиональный электрик с многолетним опытом работы
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Привет! Меня зовут Алексей 👋
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Я работаю электриком уже 8 лет. Начинал помощником в строительной компании, 
                  а теперь выполняю работы самостоятельно и несу полную ответственность за качество.
                </p>
                <p>
                  Специализируюсь на электромонтаже в квартирах и частных домах. 
                  Работаю честно — сначала осматриваю объект, составляю смету, 
                  и только потом начинаю работы. Никаких скрытых доплат.
                </p>
                <p>
                  За годы работы накопил большой опыт и собрал все необходимые инструменты. 
                  Это позволяет мне работать быстро и качественно, без лишних затрат времени.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#contacts')}
                className="bg-primary hover:bg-primary/90"
                size="lg"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться со мной
              </Button>
              <Button 
                onClick={() => scrollToSection('#portfolio')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                size="lg"
              >
                <Icon name="Eye" className="mr-2" size={20} />
                Посмотреть работы
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={achievement.icon as any} className="text-primary" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <h4 className="font-semibold text-secondary mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {specializations.map((spec, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={spec.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">
                    {spec.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Почему клиенты выбирают меня
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-primary" size={32} />
              </div>
              <h4 className="font-bold text-secondary mb-2">Честная работа</h4>
              <p className="text-sm text-gray-600">
                Озвучиваю реальные сроки и цены. Никаких неожиданных доплат
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" className="text-primary" size={32} />
              </div>
              <h4 className="font-bold text-secondary mb-2">Свой инструмент</h4>
              <p className="text-sm text-gray-600">
                Полный комплект профессионального оборудования
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-primary" size={32} />
              </div>
              <h4 className="font-bold text-secondary mb-2">Соблюдаю сроки</h4>
              <p className="text-sm text-gray-600">
                Планирую работы реально и укладываюсь в договоренности
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="text-primary" size={32} />
              </div>
              <h4 className="font-bold text-secondary mb-2">Забочусь о качестве</h4>
              <p className="text-sm text-gray-600">
                Делаю работу для себя. Даю гарантию и всегда на связи
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;