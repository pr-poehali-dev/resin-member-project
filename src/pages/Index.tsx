import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [onlineCount, setOnlineCount] = useState(39383);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => prev + Math.floor(Math.random() * 20) - 10);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: 'Shield',
      title: 'Надежность',
      description: 'Сертифицированные материалы высшего качества с гарантией 5 лет'
    },
    {
      icon: 'CheckCircle',
      title: 'Безопасность',
      description: 'Гипоаллергенные компоненты, одобренные международными стандартами'
    },
    {
      icon: 'Award',
      title: 'Качество',
      description: 'Многоступенчатый контроль качества на каждом этапе производства'
    },
    {
      icon: 'Truck',
      title: 'Доставка',
      description: 'Быстрая доставка по всей России в дискретной упаковке'
    }
  ];

  const reviews = [
    {
      name: 'Анастасия К.',
      rating: 5,
      text: 'Отличное качество! Превзошло все ожидания. Рекомендую всем подругам.',
      avatar: 'https://cdn.poehali.dev/projects/03c54094-04df-4f80-9ac9-faf7aba0e7dd/files/6ec96768-d9eb-48e7-9633-c50ce503f3b8.jpg'
    },
    {
      name: 'Мария С.',
      rating: 5,
      text: 'Надежный продукт от проверенного производителя. Буду заказывать ещё.',
      avatar: 'https://cdn.poehali.dev/projects/03c54094-04df-4f80-9ac9-faf7aba0e7dd/files/6ec96768-d9eb-48e7-9633-c50ce503f3b8.jpg'
    },
    {
      name: 'Елена В.',
      rating: 5,
      text: 'Качество на высоте! Доставка быстрая, упаковка дискретная. Всё отлично!',
      avatar: 'https://cdn.poehali.dev/projects/03c54094-04df-4f80-9ac9-faf7aba0e7dd/files/6ec96768-d9eb-48e7-9633-c50ce503f3b8.jpg'
    }
  ];

  const faqs = [
    {
      question: 'Какие гарантии качества вы предоставляете?',
      answer: 'Мы предоставляем 5-летнюю гарантию на всю продукцию. Все изделия проходят строгий контроль качества и имеют сертификаты соответствия международным стандартам.'
    },
    {
      question: 'Как осуществляется доставка?',
      answer: 'Доставка осуществляется по всей России в течение 2-5 рабочих дней. Упаковка полностью дискретная, без указания содержимого.'
    },
    {
      question: 'Из какого материала изготовлена продукция?',
      answer: 'Используется медицинский силикон высшего качества, гипоаллергенный и полностью безопасный для здоровья. Материал сертифицирован и одобрен международными организациями здравоохранения.'
    },
    {
      question: 'Можно ли вернуть товар?',
      answer: 'Согласно законодательству РФ, товары интимного назначения надлежащего качества возврату и обмену не подлежат. Однако мы гарантируем замену при производственном браке.'
    },
    {
      question: 'Как ухаживать за изделиями?',
      answer: 'Рекомендуется очистка специальными средствами до и после каждого использования. Хранить в сухом месте при комнатной температуре, избегая прямых солнечных лучей.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Package" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-primary">PREMIUM STORE</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="flex items-center gap-2 px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">{onlineCount.toLocaleString()} онлайн</span>
            </Badge>
            <Button>Каталог</Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-secondary to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 text-base px-4 py-2">
                🏆 Самые лучшие члены 2024
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                У нас самые надёжные<br />резиновые члены
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Профессиональная продукция премиум-класса с гарантией качества
              </p>
              <Button size="lg" className="text-lg px-8 py-6">
                Перейти в каталог
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <Card className="p-8 hover-scale transition-all bg-white">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src="https://cdn.poehali.dev/projects/03c54094-04df-4f80-9ac9-faf7aba0e7dd/files/aa93f654-0e50-4305-b055-0e72f5407727.jpg"
                    alt="Профессионал"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Для профессионалов</h3>
                <p className="text-muted-foreground">
                  Широкий ассортимент для самых взыскательных клиентов
                </p>
              </Card>

              <Card className="p-8 hover-scale transition-all bg-white">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src="https://cdn.poehali.dev/projects/03c54094-04df-4f80-9ac9-faf7aba0e7dd/files/6ec96768-d9eb-48e7-9633-c50ce503f3b8.jpg"
                    alt="Качество"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Гарантия качества</h3>
                <p className="text-muted-foreground">
                  Сертифицированная продукция с международными стандартами
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Надёжность и функции наших резиновых членов</h2>
              <p className="text-xl text-muted-foreground">
                Почему более 50 000 клиентов выбирают нас
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 text-center hover-scale transition-all">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
              <p className="text-xl text-muted-foreground">
                Что говорят покупатели о нашей продукции
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card key={index} className="p-6 animate-fade-in">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-xl text-muted-foreground">
                Ответы на популярные вопросы наших клиентов
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Icon name="Package" className="text-primary" size={24} />
              </div>
              <span className="text-xl font-bold">PREMIUM STORE</span>
            </div>
            <p className="text-white/70 mb-6">
              Профессиональная продукция премиум-класса
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">О компании</a>
              <a href="#" className="hover:text-white transition-colors">Доставка</a>
              <a href="#" className="hover:text-white transition-colors">Контакты</a>
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-white/70 text-sm">
              © 2024 PREMIUM STORE. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
