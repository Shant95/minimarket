import drinks from '../images/menuIcons/drinksIcon.png';
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
import household from '../images/menuIcons/householdChemicalIcon.png';
import hygiene from '../images/menuIcons/hygieneIcon.png';

export const MenuLinks = [
    {
        id: 1,
        name: 'Напитки',
        image: drinks,
        subcategories: [
            { url: '/drinks/water', name: 'Вода' },
            { url: '/drinks/lemonades', name: 'Напитки, лимонады' },
            { url: '/drinks/fruit-juice', name: 'Соки, нектары' },
            { url: '/drinks/kvas', name: 'Квас' },
            { url: '/drinks/mors', name: 'Морсы, компоты' },
            { url: '/drinks/ice-tea', name: 'Холодый чай, кофе' },
            { url: '/drinks/analcoholic-beer', name: 'Пиво без алкоголя' },
            { url: '/drinks/energy-drink', name: 'Энергетик' },
            { url: '/drinks/cider', name: 'Коктейли, сидр' },
            { url: '/drinks/beer', name: 'Пиво' },
        ]
    },
    {
        id: 2,
        name: 'Соусы, специи',
        image: sauces,
        subcategories: [
            { url: '/sauces-and-spices/mustards', name: 'Горчица, хрен' },
            { url: '/sauces-and-spices/mayonese', name: 'Майонез' },
            { url: '/sauces-and-spices/souces', name: 'Соусы, кетчупы, пасты' },
            { url: '/sauces-and-spices/spices', name: 'Специи, приправы' },
            { url: '/sauces-and-spices/vinegar', name: 'Уксус, маринад' }
        ]
    },
    {
        id: 3,
        name: 'Молочные продукты, яйцо',
        image: milkEgg,
        subcategories: [
            { url: '/milk-products-and-eggs/yogurt', name: 'Йогурты' },
            { url: '/milk-products-and-eggs/milk', name: 'Молоко' },
            { url: '/milk-products-and-eggs/eggs', name: 'Яйцо' },
            { url: '/milk-products-and-eggs/cottage-cheese', name: 'Творог' },
            { url: '/milk-products-and-eggs/butter', name: 'Масло' },
            { url: '/milk-products-and-eggs/sour-cream', name: 'Сметана' },
            { url: '/milk-products-and-eggs/kefir', name: 'Кефир и ряженка' },
            { url: '/milk-products-and-eggs/cream', name: 'Сливки' },
            { url: '/milk-products-and-eggs/condensed-milk', name: 'Сгущенное молоко' }
        ]
    },
    {
        id: 4,
        name: 'Овощи, фрукты',
        image: vegetablesFruits,
        subcategories: [
            { url: '/vegatables-and-fruits/fruits', name: 'Фрукты' },
            { url: '/vegatables-and-fruit/vegetables', name: 'Овощи' },
            { url: '/vegatables-and-fruit/salads', name: 'Зелень и салаты' },
            { url: '/vegatables-and-fruit/mushrooms', name: 'Грибы' },
            { url: '/vegatables-and-fruit/berries', name: 'Ягоды' },
            { url: '/vegatables-and-fruit/exotic-fruits', name: 'Экзотика' }
        ]
    },
    {
        id: 5,
        name: 'Сыры',
        image: cheese,
        subcategories: [
            { url: '/cheeses/cheese', name: 'Cыры' },
            { url: '/cheeses/cream-cheese', name: 'Творожный сыр' },
            { url: '/cheeses/smoked-cheese', name: 'Копченые сыры' },
        ]
    },
    {
        id: 6,
        name: 'Хлеб и выпечка',
        image: bread,
        subcategories: [
            { url: '/bread-and-bakery/white-bread', name: 'Белый хлеб' },
            { url: '/bread-and-bakery/black-bread', name: 'Чёрный, серый хлеб' },
            { url: '/bread-and-bakery/lavash', name: 'Лепешки, лаваш' },
            { url: '/bread-and-bakery/easter-cakes', name: 'Куличи' }
        ]
    },
    {
        id: 7,
        name: 'Мясная гастрономия',
        image: meatGastronomy,
        subcategories: [
            { url: '/meat-products/sausages', name: 'Сосиски, шпикачки' },
            { url: '/meat-products/boiled-sausage', name: 'Колбаса варёная' },
            { url: '/meat-products/raw-sausage', name: 'Колбаса вяленая' },
            { url: '/meat-products/boiled-smoked-sausage', name: 'Колбаса варено-копчёная' },
            { url: '/meat-products/meat-delicacies', name: 'Мясные деликатесы' },
            { url: '/meat-products/ham', name: 'Ветчина' },
        ]
    },
    {
        id: 8,
        name: 'Рыба, морепродкуты',
        image: seafood,
        subcategories: [
            { url: '/seafood/dried-fish', name: 'Вяленая, сушенная рыба' },
            { url: '/seafood/smoked-salted-fish', name: 'Копчёная, соленая рыба' },
            { url: '/seafood/crab sticks', name: 'Крабовые палочки' },
            { url: '/seafood/seaweed', name: 'Морская капуста' },
        ]
    },
    {
        id: 9,
        name: 'Бакалея',
        image: grocery,
        subcategories: [
            { url: '/grocery/breakfast', name: 'Каши, завтраки' },
            { url: '/grocery/pasta', name: 'Макароны, паста' },
            { url: '/grocery/cereals-legumes', name: 'Крупы, бобовые' },
            { url: '/grocery/flour-and-bake-products', name: 'Мука, все для выпечки' },
            { url: '/grocery/jam', name: 'Варенье, джемы, сиропы' },
            { url: '/grocery/honey', name: 'Мёд' },
            { url: '/grocery/salt', name: 'Соль' },
            { url: '/grocery/oil', name: 'Масло' },
            { url: '/grocery/sugar', name: 'Сахар' }
        ]
    },
    {
        id: 10,
        name: 'Консервы',
        image: canned,
        subcategories: [
            { url: '/canned-goods/canned-meat', name: 'Мясные консервы' },
            { url: '/canned-goods/canned-fish', name: 'Рыбные консервы' },
            { url: '/canned-goods/canned-fruit', name: 'Фруктовые консервы' },
            { url: '/canned-goods/canned-vegetables', name: 'Овощные консервы' }
        ]
    },
    {
        id: 11,
        name: 'Чай, кофе, какао',
        image: coffeTea,
        subcategories: [
            { url: '/coffee-and-tea/cocoa-and-chocolate', name: 'Какао, шоколад' },
            { url: '/coffee-and-tea/coffee-beans', name: 'Кофе в зёрнах' },
            { url: '/coffee-and-tea/ground-coffee', name: 'Кофе молотый' },
            { url: '/coffee-and-tea/instant-coffee', name: 'Кофе растворимый' },
            { url: '/coffee-and-tea/green-tea', name: 'Чай зелёный' },
            { url: '/coffee-and-tea/black-tea', name: 'Чай черный' },
            { url: '/coffee-and-tea/fruit-tea', name: 'Чай фруктовый' }
        ]
    },
    {
        id: 12,
        name: 'Кондитерские изделия',
        image: sweets,
        subcategories: [
            { url: '/cakes-and-sweets/oriental-sweets', name: 'Восточные сладости' },
            { url: '/cakes-and-sweets/dubai-chocolate', name: 'Дубайский шоколад' },
            { url: '/cakes-and-sweets/cheewing-gum', name: 'Жевачка, леденцы' },
            { url: '/cakes-and-sweets/marmalade', name: 'Зефир, мармелад' },
            { url: '/cakes-and-sweets/candies', name: 'Конфеты' },
            { url: '/cakes-and-sweets/biscuits', name: 'Печенье, пряники' },
            { url: '/cakes-and-sweets/cakes', name: 'Торты, пироги' },
            { url: '/cakes-and-sweets/chocolate', name: 'Шоколад, пасты' }
        ]
    },
    {
        id: 13,
        name: 'Чипсы, орехи и снеки',
        image: chips,
        subcategories: [
            { url: '/snacks/bread-snacks', name: 'Сухарики' },
            { url: '/snacks/chips', name: 'Чипсы' },
            { url: '/snacks/nuts-and-dried-fruits', name: 'Орехи и сухофрукты' },
            { url: '/snacks/seeds', name: 'Семечки' },
            { url: '/snacks/crakers', name: 'Крекеры' },
            { url: '/snacks/fish-snacks', name: 'Рыбные снеки' },
            { url: '/snacks/meat-snacks', name: 'Мясные снеки' }
        ]
    },
    {
        id: 14,
        name: 'Замороженные продукты',
        image: frozen,
        subcategories: [
            { url: '/frozen-products/ice-cream', name: 'Мороженое и десерты' },
            { url: '/frozen-products/pelmeny', name: 'Пельмени, хинкали' },
            { url: '/frozen-products/pancakes', name: 'Блинчики, сырники' },
            { url: '/frozen-products/vegetables', name: 'Овощи' },
            { url: '/frozen-products/fish', name: 'Рыба' }
        ]
    },
    {
        id: 15,
        name: 'Бытовая химия',
        image: household,
        subcategories: [
            { url: '/household-chemics/dishes', name: 'Для мытья посуды' },
            { url: '/household-chemics/dishwashing-machine', name: 'Для посудомоек' },
            { url: '/household-chemics/air-freshener', name: 'Освежители' },
            { url: '/household-chemics/clothes', name: 'Стирка, уход за бельем' },
            { url: '/household-chemics/shoes', name: 'Уход за обувью и одеждой' },
            { url: '/household-chemics/cleaning-products', name: 'Чистящие средства' },
        ]
    },
    {
        id: 16,
        name: 'Гигиена и косметика',
        image: hygiene,
        subcategories: [
            { url: '/hygiene-and-cosmetics/paper-towel', name: 'Бумажные полотенца' },
            { url: '/hygiene-and-cosmetics/shaving', name: 'Для бритья и депиляции' },
            { url: '/hygiene-and-cosmetics/napkins', name: 'Салфетки и носовые платки' },
            { url: '/hygiene-and-cosmetics/toilet-paper', name: 'Туалетная бумага' },
            { url: '/hygiene-and-cosmetics/hair', name: 'Уход за волосами' },
            { url: '/hygiene-and-cosmetics/face-and-body', name: 'Уход за лицом и телом' },
            { url: '/hygiene-and-cosmetics/teeth', name: 'Уход за полостью рта' }
        ]
    },
]