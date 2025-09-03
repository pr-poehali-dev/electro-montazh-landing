import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-16">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Профессиональный 
                <span className="text-primary block">электромонтаж</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Качественные электромонтажные работы в квартирах и частных домах. 
                Гарантия качества и безопасности на все виды работ.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <Icon name="Shield" className="text-primary" size={24} />
                <span className="text-gray-700 font-medium">Лицензия и сертификаты</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="text-primary" size={24} />
                <span className="text-gray-700 font-medium">Работаем 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Award" className="text-primary" size={24} />
                <span className="text-gray-700 font-medium">Гарантия 3 года</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#contacts')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Вызвать мастера
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#pricing')}
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg"
              >
                <Icon name="Calculator" className="mr-2" size={20} />
                Узнать цены
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-gray-600">Объектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8</div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-gray-600">Гарантия</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Zap" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">Быстрый выезд</h3>
                      <p className="text-gray-600">В течение 30 минут</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon name="Wrench" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">Все виды работ</h3>
                      <p className="text-gray-600">От розетки до щитка</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">Качество</h3>
                      <p className="text-gray-600">Европейские стандарты</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;