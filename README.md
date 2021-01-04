# JavaScript_2
1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.
2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:
 Маленький (50 рублей, 20 калорий).
 Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
 С сыром (+10 рублей, +20 калорий).
 С салатом (+20 рублей, +5 калорий).
 С картофелем (+15 рублей, +10 калорий). ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий).  3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.


Урок 3. Асинхронные запросы
1. Переделайте makeGETRequest() так, чтобы она использовала промисы.
2. Добавьте в соответствующие классы методы добавления товара в корзину, удаления товара из корзины и получения списка товаров корзины.
3* Переделайте GoodsList так, чтобы fetchGoods() возвращал промис, а render() вызывался в обработчике этого промиса.


Урок 4. Регулярные выражения
1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.
2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.
3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
a. Имя содержит только буквы.
b. Телефон имеет вид +7(000)000-0000.
c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
d. Текст произвольный.
e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.


Урок 5. Фреймворк Vue.js
1. Добавить методы и обработчики событий для поля поиска. Создать в объекте данных поле searchLine и привязать к нему содержимое поля ввода. На кнопку «Искать» добавить обработчик клика, вызывающий метод FilterGoods.
2. Добавить корзину. В html-шаблон добавить разметку корзины. Добавить в объект данных поле isVisibleCart, управляющее видимостью корзины.
3. *Добавлять в .goods-list заглушку с текстом «Нет данных» в случае, если список товаров пуст.
