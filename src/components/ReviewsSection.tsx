import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Александр Петров",
      location: "ЖК Солнечный",
      rating: 5,
      text: "Отличная работа! Заменили всю проводку в двухкомнатной квартире за 4 дня. Работали аккуратно, убирали за собой. Все работает идеально уже полгода.",
      service: "Замена проводки",
      date: "Август 2024"
    },
    {
      name: "Елена Смирнова",
      location: "пос. Дубровка",
      rating: 5,
      text: "Подключал электричество в новом доме. Алексей приехал вовремя, все объяснил, работу выполнил качественно. Цены адекватные. Рекомендую!",
      service: "Подключение дома",
      date: "Июль 2024"
    },
    {
      name: "Дмитрий Козлов",
      location: "ул. Центральная",
      rating: 5,
      text: "Вызывал для аварийного ремонта - пропало электричество в половине квартиры. Мастер приехал в течение часа, быстро нашел и устранил проблему.",
      service: "Аварийный вызов",
      date: "Сентябрь 2024"
    },
    {
      name: "Марина Волкова",
      location: "СНТ Березка",
      rating: 5,
      text: "Делали электрику на даче под ключ. Очень довольна результатом! Теперь есть освещение участка и все современные розетки в доме.",
      service: "Электрика под ключ",
      date: "Июнь 2024"
    },
    {
      name: "Игорь Морозов",
      location: "ЖК Престиж",
      rating: 5,
      text: "Устанавливали умное освещение и автоматику. Все работает отлично, можно управлять через телефон. Мастер все настроил и показал как пользоваться.",
      service: "Умный дом",
      date: "Август 2024"
    },
    {
      name: "Ольга Федорова",
      location: "ул. Садовая",
      rating: 5,
      text: "Монтировали дополнительные розетки на кухне. Работали чисто, без пыли. Подобрали розетки под дизайн интерьера. Спасибо за профессионализм!",
      service: "Монтаж розеток",
      date: "Сентябрь 2024"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name={index < rating ? "Star" : "Star"}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
        size={16}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Отзывы реальных клиентов, которым я помог с электрикой
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-secondary">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t">
                  <span className="font-medium">{review.service}</span>
                  <span>{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Почему мне доверяют?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Опыт и профессионализм</h4>
                  <p className="text-gray-600 text-sm">8 лет успешной работы в сфере электромонтажа</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Гарантия качества</h4>
                  <p className="text-gray-600 text-sm">Даю гарантию 2 года на все виды работ</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Пунктуальность</h4>
                  <p className="text-gray-600 text-sm">Всегда приезжаю вовремя и укладываюсь в сроки</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="DollarSign" className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-1">Честные цены</h4>
                  <p className="text-gray-600 text-sm">Никаких скрытых доплат, все цены фиксированы</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-secondary mb-2">
                Рейтинг в интернете
              </h3>
              <p className="text-gray-600">Независимые отзывы на площадках</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">4.9</div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-xs text-gray-600">Яндекс.Услуги</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">4.8</div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-xs text-gray-600">2ГИС</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">5.0</div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-xs text-gray-600">Google</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-primary mb-1">4.9</div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-xs text-gray-600">Авито</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;