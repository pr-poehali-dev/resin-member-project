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
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  size: string;
  rating: number;
  reviews: number;
  inStock: boolean;
};

type CartItem = Product & { quantity: number };

const Index = () => {
  const [onlineCount, setOnlineCount] = useState(39383);
  const [showCatalog, setShowCatalog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

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

  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Classic',
      price: 3990,
      oldPrice: 5990,
      image: 'https://cdn.poehali.dev/projects/03c54094-04df-4f80-9ac9-faf7aba0e7dd/files/8f5a0459-8ad5-411d-870b-b4fe804a3d8e.jpg',
      category: 'classic',
      size: 'M',
      rating: 5,
      reviews: 234,
      inStock: true
    },
    {
      id: 2,
      name: 'Elite Pro Series',
      price: 5990,
      oldPrice: 7990,
      image: 'https://cdn.poehali.dev/projects/03c54094-04df-4f80-9ac9-faf7aba0e7dd/files/aa54726e-ecd7-4507-9b89-51ac81f97b7a.jpg',
      category: 'premium',
      size: 'L',
      rating: 5,
      reviews: 456,
      inStock: true
    },
    {
      id: 3,
      name: 'Starter Kit',
      price: 2990,
      image: 'https://cdn.poehali.dev/projects/03c54094-04df-4f80-9ac9-faf7aba0e7dd/files/c00bca73-6dc7-45ba-a1d3-bf48e2e758ad.jpg',
      category: 'beginner',
      size: 'S',
      rating: 5,
      reviews: 189,
      inStock: true
    },
    {
      id: 4,
      name: 'Professional XL',
      price: 6990,
      image: 'https://cdn.poehali.dev/projects/03c54094-04df-4f80-9ac9-faf7aba0e7dd/files/8f5a0459-8ad5-411d-870b-b4fe804a3d8e.jpg',
      category: 'premium',
      size: 'XL',
      rating: 5,
      reviews: 312,
      inStock: true
    },
    {
      id: 5,
      name: 'Comfort Medium',
      price: 4490,
      oldPrice: 5990,
      image: 'https://cdn.poehali.dev/projects/03c54094-04df-4f80-9ac9-faf7aba0e7dd/files/aa54726e-ecd7-4507-9b89-51ac81f97b7a.jpg',
      category: 'classic',
      size: 'M',
      rating: 5,
      reviews: 278,
      inStock: true
    },
    {
      id: 6,
      name: 'Deluxe Collection',
      price: 8990,
      image: 'https://cdn.poehali.dev/projects/03c54094-04df-4f80-9ac9-faf7aba0e7dd/files/c00bca73-6dc7-45ba-a1d3-bf48e2e758ad.jpg',
      category: 'premium',
      size: 'L',
      rating: 5,
      reviews: 523,
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedSize !== 'all' && product.size !== selectedSize) return false;
    return true;
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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
            <Button onClick={() => setShowCatalog(true)}>Каталог</Button>
            <Sheet open={cartOpen} onOpenChange={setCartOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Корзина</SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">Корзина пуста</p>
                  ) : (
                    <>
                      {cart.map(item => (
                        <div key={item.id} className="flex gap-4 pb-4 border-b">
                          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                          <div className="flex-1">
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">{item.price.toLocaleString()} ₽</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </Button>
                              <span className="text-sm">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeFromCart(item.id)}
                                className="ml-auto"
                              >
                                <Icon name="Trash2" size={16} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="pt-4 space-y-4">
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Итого:</span>
                          <span>{cartTotal.toLocaleString()} ₽</span>
                        </div>
                        <Button className="w-full" size="lg">
                          Оформить заказ
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
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
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => setShowCatalog(true)}>
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

      {showCatalog && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-4xl font-bold mb-2">Каталог продукции</h2>
                  <p className="text-muted-foreground">Выберите подходящий вариант из {products.length} товаров</p>
                </div>
                <Button variant="outline" onClick={() => setShowCatalog(false)}>
                  <Icon name="X" className="mr-2" size={20} />
                  Закрыть
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Категория" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все категории</SelectItem>
                    <SelectItem value="beginner">Для начинающих</SelectItem>
                    <SelectItem value="classic">Классика</SelectItem>
                    <SelectItem value="premium">Премиум</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Размер" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все размеры</SelectItem>
                    <SelectItem value="S">S - Маленький</SelectItem>
                    <SelectItem value="M">M - Средний</SelectItem>
                    <SelectItem value="L">L - Большой</SelectItem>
                    <SelectItem value="XL">XL - Очень большой</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <Card key={product.id} className="overflow-hidden hover-scale transition-all">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <Badge variant="secondary">{product.size}</Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {[...Array(product.rating)].map((_, i) => (
                            <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={14} />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold">{product.price.toLocaleString()} ₽</span>
                        {product.oldPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            {product.oldPrice.toLocaleString()} ₽
                          </span>
                        )}
                      </div>
                      <Button
                        className="w-full"
                        onClick={() => {
                          addToCart(product);
                          setCartOpen(true);
                        }}
                      >
                        <Icon name="ShoppingCart" className="mr-2" size={18} />
                        В корзину
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-muted-foreground">Товары не найдены</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedSize('all');
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

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