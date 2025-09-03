import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      description: "Звоните в любое время",
      action: "tel:+79991234567"
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      value: "+7 (999) 123-45-67", 
      description: "Быстрые ответы в мессенджере",
      action: "https://wa.me/79991234567"
    },
    {
      icon: "Mail",
      title: "Email",
      value: "alexey.electro@mail.ru",
      description: "Подробные консультации",
      action: "mailto:alexey.electro@mail.ru"
    },
    {
      icon: "MapPin",
      title: "Район работы",
      value: "Москва и область",
      description: "Выезжаем в течение часа",
      action: ""
    }
  ];

  const workingHours = [
    { day: "Понедельник - Пятница", time: "8:00 - 20:00" },
    { day: "Суббота - Воскресенье", time: "9:00 - 18:00" },
    { day: "Аварийные вызовы", time: "Круглосуточно" }
  ];

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Контакты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь со мной удобным способом для получения консультации
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <h3 className="text-2xl font-bold text-secondary">
                  Заказать звонок
                </h3>
                <p className="text-gray-600">
                  Оставьте заявку и я перезвоню в течение 10 минут
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Введите ваше имя"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Номер телефона *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (999) 123-45-67"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Описание работ
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Опишите какие работы необходимо выполнить..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Заказать звонок
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-secondary">
                  Способы связи
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon as any} className="text-primary" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-secondary">{contact.title}</h4>
                      {contact.action ? (
                        <a 
                          href={contact.action}
                          className="text-primary hover:underline font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium">{contact.value}</p>
                      )}
                      <p className="text-sm text-gray-600">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-secondary">
                  Режим работы
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">{schedule.day}</span>
                    <span className="font-semibold text-secondary text-sm">{schedule.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <Icon name="Clock" className="text-primary mx-auto mb-4" size={32} />
                <h4 className="font-bold text-secondary mb-2">
                  Экстренный вызов
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  При аварийных ситуациях выезжаем в любое время суток
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <Icon name="Zap" className="mr-2" size={16} />
                  Аварийный вызов
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Готовы начать работу?
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Позвоните прямо сейчас и получите бесплатную консультацию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-xl font-bold">
              <Icon name="Phone" size={24} />
              <a href="tel:+79991234567" className="hover:underline">
                +7 (999) 123-45-67
              </a>
            </div>
            <div className="text-lg opacity-90">
              Работаем без выходных
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;