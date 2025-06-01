import discount from '../images/menuIcons/discountIcon.png';
import grill from '../images/menuIcons/grillIcon.png';
import drinks from '../images/menuIcons/drinksIcon.png';
import readyMeals from '../images/menuIcons/readyMealIcon.png';
import meat from '../images/menuIcons/meatIcon.png';
import sauces from '../images/menuIcons/saucesIcon.png';
import milkEgg from '../images/menuIcons/milkEggIcon.png';
import vegetablesFruits from '../images/menuIcons/vegetablesFruitsIcon.png';
import cheese from '../images/menuIcons/cheeseIcon.png';
import bread from '../images/menuIcons/breadIcon.png';
import meatGastronomy from '../images/menuIcons/meatGastronomyIcon.png';
import seafood from '../images/menuIcons/seafood.png';
import grocery from '../images/menuIcons/groceryIcon.png';
import canned from '../images/menuIcons/cannedGoodsIcon.png';
import coffeTea from '../images/menuIcons/coffeeTeaIcon.png';
import sweets from '../images/menuIcons/sweetsIcon.png';
import chips from '../images/menuIcons/chipsIcon.png';
import frozen from '../images/menuIcons/frozenIcon.png';
import alcohol from '../images/menuIcons/alcoholIcon.png';
import baby from '../images/menuIcons/babyFoodIcon.png';
import kids from '../images/menuIcons/babyGoodsIcon.png';
import pet from '../images/menuIcons/petGoodsIcon.png';
import household from '../images/menuIcons/householdChemicalIcon.png';
import hygiene from '../images/menuIcons/hygieneIcon.png';
import healthy from '../images/menuIcons/healthyIcon.png';
import home from '../images/menuIcons/homeGoodsIcon.png';

export const MenuLinks = [
    {
        id: 1,
        name: 'Скидки по карте',
        image: discount,
        subcategories: [
            { url: '/', name: 'Бакалея' },
            { url: '/', name: 'Вода, соки, напитки' },
            { url: '/', name: 'Для здорового питания' },
            { url: '/', name: 'Замороженные продукты' },
            { url: '/', name: 'Кондитерские изделия, торты' },
            { url: '/', name: 'Консервы' },
            { url: '/', name: 'Молочные продукты, яйцо' },
            { url: '/', name: 'Мясная гастрономия' },
            { url: '/', name: 'Мясо, птица' },
            { url: '/', name: 'Овощи, фрукты' },
            { url: '/', name: 'Рыба, морепродукты, икра' },
            { url: '/', name: 'Соусы, специи' },
            { url: '/', name: 'Сыры' },
            { url: '/', name: 'Чай, кофе, какао' }
        ]
    },
    {
        id: 2,
        name: 'Все на шашлыки',
        image: grill,
        subcategories: [
            { url: '/', name: 'Вода и напитки' },
            { url: '/', name: 'Всё для гриля' },
            { url: '/', name: 'Мясо для шашлыка' },
            { url: '/', name: 'Овощи и зелень' },
            { url: '/', name: 'Соусы' },
        ]
    },
    {
        id: 3,
        name: 'Вода, соки, напитки',
        image: drinks,
        subcategories: [
            { url: '/', name: 'Вода с газом' },
            { url: '/', name: 'Вода без газа' },
            { url: '/', name: 'Напитки, лимонады' },
            { url: '/', name: 'Соки, нектары' },
            { url: '/', name: 'Квас' },
            { url: '/', name: 'Морсы, компоты' },
            { url: '/', name: 'Холодый чай, кофе' },
            { url: '/', name: 'Пиво без алкоголя' },
            { url: '/', name: 'Вино без алкоголя' },
            { url: '/', name: 'Напитки для спорта' },
            { url: '/', name: 'Энергетик' }
        ]
    },
    {
        id: 4,
        name: 'Готова еда',
        image: readyMeals,
        subcategories: [
            { url: '/', name: 'Заморозка' },
            { url: '/', name: 'Соленья' },
            { url: '/', name: 'Основные блюда' },
            { url: '/', name: 'Выпечка, сэнвичи' },
            { url: '/', name: 'Салаты, закуски' },
            { url: '/', name: 'Завтраки' },
            { url: '/', name: 'Первые блюда' },
            { url: '/', name: 'Напитки' },
            { url: '/', name: 'Суши, роллы' },
            { url: '/', name: 'Торты, десерты' }
        ]
    },
    {
        id: 5,
        name: 'Мясо, птица',
        image: meat,
        subcategories: [
            { url: '/', name: 'Мясо птицы' },
            { url: '/', name: 'Котлеты, купаты, шашлык' },
            { url: '/', name: 'Свинина' },
            { url: '/', name: 'Говядина' },
            { url: '/', name: 'Фарш' }
        ]
    },
    {
        id: 6,
        name: 'Соусы, специи',
        image: sauces,
        subcategories: [
            { url: '/', name: 'Горчица, хрен' },
            { url: '/', name: 'Майонез' },
            { url: '/', name: 'Соусы, кетчупы, пасты' },
            { url: '/', name: 'Специи, приправы' },
            { url: '/', name: 'Уксус, маринад' }
        ]
    },
    {
  id: 7,
  name: 'Молочные продукты, яйцо',
  image: milkEgg,
  subcategories: [
    { url: '/Milk/yogurt', name: 'Йогурты и творожки' },
    { url: '/Milk/milk', name: 'Молоко' },
    { url: '/Milk/eggs', name: 'Яйцо' },
    { url: '/Milk/icecream', name: 'Мороженое' },
    { url: '/Milk/cheese', name: 'Сырки и десерты' },
    { url: '/Milk/kids', name: 'Для детей' },
    { url: '/Milk/milkflakes', name: 'Творог' },
    { url: '/Milk/mayo', name: 'Майонез' },
    { url: '/Milk/butter', name: 'Масло и маргарин' },
    { url: '/Milk/drinking-yogurt', name: 'Питьевые йогурты' },
    { url: '/Milk/acidcream', name: 'Сметана' },
    { url: '/Milk/kefir', name: 'Кефир и ряженка' },
    { url: '/Milk/slivki', name: 'Сливки' },
    { url: '/Milk/condensed-milk', name: 'Сгущенное молоко' },
    { url: '/Milk/coktail', name: 'Молочные коктейли, напитки' },
    { url: '/Milk/vegan', name: 'Веганские напитки' },
  ]
},
    {
        id: 8,
        name: 'Овощи, фрукты',
        image: vegetablesFruits,
        subcategories: [
            { url: '/', name: 'Фрукты' },
            { url: '/', name: 'Овощи' },
            { url: '/', name: 'Зелень и салаты' },
            { url: '/', name: 'Грибы' },
            { url: '/', name: 'Ягоды' },
            { url: '/', name: 'Экзотика' }
        ]
    },
    {
        id: 9,
        name: 'Сыры',
        image: cheese,
        subcategories: [
            { url: '/', name: 'Твёрдые сыры' },
            { url: '/', name: 'Творожный сыр' },
            { url: '/', name: 'Мягкие, копченые сыры' },
            { url: '/', name: 'Плавленый сыр' },
            { url: '/', name: 'Сыры с плесенью' },
            { url: '/', name: 'Сырная нарезка' },
            { url: '/', name: 'Сыры' }
        ]
    },
    {
        id: 10,
        name: 'Хлеб и выпечка',
        image: bread,
        subcategories: [
            { url: '/', name: 'Белый хлеб' },
            { url: '/', name: 'Чёрный, серый хлеб' },
            { url: '/', name: 'Выпечка' },
            { url: '/', name: 'Лепешки, лаваш' },
            { url: '/', name: 'Хлебцы' },
            { url: '/', name: 'Сушки, сухари' },
            { url: '/', name: 'Куличи' }
        ]
    },
    {
        id: 11,
        name: 'Мясная гастрономия',
        image: meatGastronomy,
        subcategories: [
            { url: '/', name: 'Сосиски, шпикачки' },
            { url: '/', name: 'Колбаса варёная' },
            { url: '/', name: 'Колбаса вяленая' },
            { url: '/', name: 'Колбаса варено-копчёная' },
            { url: '/', name: 'Мясные деликатесы' },
            { url: '/', name: 'Ветчина' },
            { url: '/', name: 'Колбаса ливерная' },
            { url: '/', name: 'Мясные консервы' }
        ]
    },
    {
        id: 12,
        name: 'Рыба, морепродкуты, икра ',
        image: seafood,
        subcategories: [
            { url: '/', name: 'Быстро готовоить' },
            { url: '/', name: 'Вяленая, сушенная рыба' },
            { url: '/', name: 'Икра' },
            { url: '/', name: 'Копчёная, соленая рыба' },
            { url: '/', name: 'Крабовые палочки' },
            { url: '/', name: 'Креветки, продукты моря' },
            { url: '/', name: 'Морская капуста' },
            { url: '/', name: 'Пресервы' },
            { url: '/', name: 'Рыба заморозка' },
            { url: '/', name: 'Рыбные консервы' }
        ]
    },
    {
        id: 13,
        name: 'Бакалея',
        image: grocery,
        subcategories: [
            { url: '/', name: 'Быстро готовить' },
            { url: '/', name: 'Каши, завтраки' },
            { url: '/', name: 'Восточная кухня' },
            { url: '/', name: 'Макароны, паста' },
            { url: '/', name: 'Крупы, бобовые' },
            { url: '/', name: 'Мука, все для выпечки' },
            { url: '/', name: 'Варенье, джемы, сиропы' },
            { url: '/', name: 'Мёд' },
            { url: '/', name: 'Соль' },
            { url: '/', name: 'Масло' },
            { url: '/', name: 'Сахар' }
        ]
    },
    {
        id: 14,
        name: 'Консервы',
        image: canned,
        subcategories: [
            { url: '/', name: 'Грибные консервы' },
            { url: '/', name: 'Мясные консервы' },
            { url: '/', name: 'Рыбные консервы' },
            { url: '/', name: 'Фруктовые консервы' },
            { url: '/', name: 'Овощные консервы' }
        ]
    },
    {
        id: 15,
        name: 'Чай, кофе, какао',
        image: coffeTea,
        subcategories: [
            { url: '/', name: 'Какао, шоколад' },
            { url: '/', name: 'Кофе в зёрнах' },
            { url: '/', name: 'Кофе молотый' },
            { url: '/', name: 'Кофе растворимый' },
            { url: '/', name: 'Чай зелёный' },
            { url: '/', name: 'Чай черный' },
            { url: '/', name: 'Чай фруктовый' }
        ]
    },
    {
        id: 16,
        name: 'Кондитерские изделия, торты',
        image: sweets,
        subcategories: [
            { url: '/', name: 'Восточные сладости' },
            { url: '/', name: 'Дубайский шоколад' },
            { url: '/', name: 'Жевачка, леденцы' },
            { url: '/', name: 'Зефир, мармелад' },
            { url: '/', name: 'Конфеты в коробках' },
            { url: '/', name: 'Конфеты в упаковке' },
            { url: '/', name: 'Конфеты весовые' },
            { url: '/', name: 'Печенье, пряники' },
            { url: '/', name: 'Торты, пироги' },
            { url: '/', name: 'Шоколад, пасты' }
        ]
    },
    {
        id: 17,
        name: 'Чипсы, орехи и снеки',
        image: chips,
        subcategories: [
            { url: '/', name: 'Сухарики' },
            { url: '/', name: 'Чипсы' },
            { url: '/', name: 'Орехи и сухофрукты' },
            { url: '/', name: 'Семечки' },
            { url: '/', name: 'Крекеры и соломка' },
            { url: '/', name: 'Рыбные снеки' },
            { url: '/', name: 'Прочие снеки' }
        ]
    },
    {
        id: 18,
        name: 'Замороженные продукты',
        image: frozen,
        subcategories: [
            { url: '/', name: 'Готовая еда' },
            { url: '/', name: 'Быстро готовить' },
            { url: '/', name: 'Мороженое и десерты' },
            { url: '/', name: 'Пельмени, хинкали' },
            { url: '/', name: 'Блинчики, сырники' },
            { url: '/', name: 'Овощи, грибы' },
            { url: '/', name: 'Хлеб, выпечка, тесто' },
            { url: '/', name: 'Фрукты, ягоды' },
            { url: '/', name: 'Лёд' },
            { url: '/', name: 'Рыба' }
        ]
    },
    {
        id: 19,
        name: 'Алкоголные напитки',
        image: alcohol,
        subcategories: [
            { url: '/', name: 'Белые вина' },
            { url: '/', name: 'Аперитивы, ликёр, бальзам' },
            { url: '/', name: 'Вермут' },
            { url: '/', name: 'Виски, бурбон, джин' },
            { url: '/', name: 'Водка' },
            { url: '/', name: 'Коктейли, сидр' },
            { url: '/', name: 'Коньяк, бренди' },
            { url: '/', name: 'Красные вина' },
            { url: '/', name: 'Креплёные вина' },
            { url: '/', name: 'Пиво' },
            { url: '/', name: 'Плодовые, ягодные вина' },
            { url: '/', name: 'Розовые вина' },
            { url: '/', name: 'Ром' },
            { url: '/', name: 'Текила' },
            { url: '/', name: 'Шампанское' }
        ]
    },
    {
        id: 20,
        name: 'Детское питание',
        image: baby,
        subcategories: [
            { url: '/', name: 'Вода' },
            { url: '/', name: 'Детские смеси' },
            { url: '/', name: 'Каши' },
            { url: '/', name: 'Мясное пюре' },
            { url: '/', name: 'Напитки детские' },
            { url: '/', name: 'Овощное пюре' },
            { url: '/', name: 'Перекус' },
            { url: '/', name: 'Питьевые продукты' },
            { url: '/', name: 'Творожки и йогурты' },
            { url: '/', name: 'Фруктовое пюре' }
        ]
    },
    {
        id: 21,
        name: 'Товары для детей',
        image: kids,
        subcategories: [
            { url: '/', name: 'Гигиена и уход' },
            { url: '/', name: 'Детская одежда и обувь' },
            { url: '/', name: 'Игрушки, творчество' },
            { url: '/', name: 'Подгузники и пеленки' },
            { url: '/', name: 'Сальфетки, ватные изделия' }
        ]
    },
    {
        id: 22,
        name: 'Товары для животных',
        image: pet,
        subcategories: [
            { url: '/', name: 'Для кошек' },
            { url: '/', name: 'Для любимцев' },
            { url: '/', name: 'Для питомцев' },
            { url: '/', name: 'Для собак' },
            { url: '/', name: 'Корма' },
            { url: '/', name: 'Уход и аксессуары' }
        ]
    },
    {
        id: 23,
        name: 'Бытовая химия',
        image: household,
        subcategories: [
            { url: '/', name: 'Для мытья посуды' },
            { url: '/', name: 'Для посудомоек' },
            { url: '/', name: 'Освежители' },
            { url: '/', name: 'Стирка, уход за бельем' },
            { url: '/', name: 'Уход за обувью и одеждой' },
            { url: '/', name: 'Чистящие средства' },
        ]
    },
    {
        id: 24,
        name: 'Гигиена и косметика',
        image: hygiene,
        subcategories: [
            { url: '/', name: 'Бумажные полотенца' },
            { url: '/', name: 'Для бритья и депиляции' },
            { url: '/', name: 'Для макияжа' },
            { url: '/', name: 'Для маникюра' },
            { url: '/', name: 'Женская гигиена' },
            { url: '/', name: 'Наборы косметики' },
            { url: '/', name: 'Салфетки и носовые платки' },
            { url: '/', name: 'Средства для ванны и душа' },
            { url: '/', name: 'Средства контрацепции' },
            { url: '/', name: 'Средства личной гигинены' },
            { url: '/', name: 'Товары медицинские' },
            { url: '/', name: 'Туалетная бумага' },
            { url: '/', name: 'Уход за волосами' },
            { url: '/', name: 'Уход за лицом и телом' },
            { url: '/', name: 'Уход за полостью рта' }
        ]
    },
    {
        id: 25,
        name: 'Для здорового питания',
        image: healthy,
        subcategories: [
            { url: '/', name: 'Мало калорий' },
            { url: '/', name: 'Напитки' },
            { url: '/', name: 'Орехи, сухофрукты' },
            { url: '/', name: 'Питание для спорта' },
            { url: '/', name: 'Растительные продукты' },
            { url: '/', name: 'Сладости, десерты' },
            { url: '/', name: 'Сухие завтраки, мюсли' },
            { url: '/', name: 'Хлебцы' }
        ]
    },
    {
        id: 26,
        name: 'Товары для дома',
        image: home,
        subcategories: [
            { url: '/', name: 'Газеты, журналы' },
            { url: '/', name: 'Для ванны и туалета' },
            { url: '/', name: 'Для кухни' },
            { url: '/', name: 'Для отдыха и праздника' },
            { url: '/', name: 'Для сада' },
            { url: '/', name: 'Для уборки' },
            { url: '/', name: 'Живые цветы' },
            { url: '/', name: 'Канц товары' },
            { url: '/', name: 'Одежда, обувь, прочее' },
            { url: '/', name: 'Освещение, ремонт, батарейки' },
            { url: '/', name: 'Пикник и барбекю' },
            { url: '/', name: 'Репелленты' },
            { url: '/', name: 'Текстиль, декор' },
            { url: '/', name: 'Товары для спорта' }
        ]
    }
]