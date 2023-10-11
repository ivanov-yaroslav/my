(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const data = {
        navBtn: {
            all: "All",
            landingPage: "Landing Page",
            multiPage: "Multi Page",
            fullScreen: "Full Screen",
            spa: "SPA"
        },
        items: [ {
            id: 0,
            url: "https://webmasters-ukraine.github.io/nfts/",
            img: "NFTs-preview",
            title: "NFTs",
            descr: "NFT маркетплейс: паралакс при прокручуванні.",
            category: "landingPage"
        }, {
            id: 1,
            url: "https://webmasters-ukraine.github.io/discountsOnServices/",
            img: "DOS-preview",
            title: "DOS",
            descr: "Сервіс знижок: безліч попапів для авторизації та оплати.",
            category: "multiPage"
        }, {
            id: 1,
            url: "https://webmasters-ukraine.github.io/greenBank/",
            img: "GreenBank-preview",
            title: "Green Bank",
            descr: "Послуги банку: паралакс при русі миші та унікальна анімація лінії при прокручуванні.",
            category: "landingPage"
        }, {
            id: 2,
            url: "https://webmasters-ukraine.github.io/horrorfellow/",
            img: "HorrorFellow-preview",
            title: "Horror Fellow",
            descr: "NFT маркетплейс: анімація появи елментів при прокручуванні.",
            category: "landingPage"
        }, {
            id: 3,
            url: "https://webmasters-ukraine.github.io/funiro/",
            img: "Funiro-preview",
            title: "Funiro",
            descr: "Мебельний магазин: корзина товарів, анімація галереї при русі миші.",
            category: "landingPage"
        }, {
            id: 4,
            url: "https://webmasters-ukraine.github.io/crossover/",
            img: "Crossover-preview",
            title: "Crossover",
            descr: "Презентація авто: анімований курсор, анімації під час перегортання слайдів.",
            category: "fullScreen"
        }, {
            id: 5,
            url: "https://webmasters-ukraine.github.io/alex/",
            img: "Alex-preview",
            title: "Alex",
            descr: "Портфоліо розробника: повноекраний слайдер.",
            category: "fullScreen"
        }, {
            id: 6,
            url: "https://webmasters-ukraine.github.io/ciclo/",
            img: "Ciclo-preview",
            title: "Ciclo",
            descr: "Презентація: повноекраний слайдер, паралакс ефект під час перегортання слайдів",
            category: "fullScreen"
        }, {
            id: 7,
            url: "https://webmasters-ukraine.github.io/vetcare/",
            img: "Vetcare-preview",
            title: "Vetcare",
            descr: "Догляд за тваринами: паралакс ефект при русі миші.",
            category: "landingPage"
        }, {
            id: 8,
            url: "https://webmasters-ukraine.github.io/countriesApp/",
            img: "Countries-preview",
            title: "Сountries App",
            descr: "Довідник країн: пошук та фільтрація, зміна кольору теми.",
            category: "spa"
        }, {
            id: 0,
            url: "https://webmasters-ukraine.github.io/farmVest/",
            img: "FarmVest-preview",
            title: "Farm Vest",
            descr: " Інвестиції: паралакс при русі миші та прокручуванні.",
            category: "landingPage"
        }, {
            id: 9,
            url: "https://webmasters-ukraine.github.io/gericht/",
            img: "Gericht-preview",
            title: "GERÍCHT",
            descr: "Сайт ресторану: повноекранний блок, цікаві анімаційні ефекти.",
            category: "landingPage"
        }, {
            id: 0,
            url: "https://webmasters-ukraine.github.io/jadoo/",
            img: "Jadoo-preview",
            title: "Jadoo",
            descr: "Подорожі: паралакс при русі миші.",
            category: "landingPage"
        }, {
            id: 9,
            url: "https://webmasters-ukraine.github.io/ofdr/",
            img: "OFDR-preview",
            title: "OFDR",
            descr: "Навчальний заклад: повноекраний блок, валідація форми.",
            category: "multiPage"
        }, {
            id: 9,
            url: "https://webmasters-ukraine.github.io/growfy/",
            img: "Growfy-preview",
            title: "Growfy",
            descr: "Послуги маркетингу.",
            category: "landingPage"
        }, {
            id: 0,
            url: "https://webmasters-ukraine.github.io/smartSpace/",
            img: "SmartSpace-preview",
            title: "Smart Space",
            descr: "Оренда житла.",
            category: "landingPage"
        }, {
            id: 9,
            url: "https://webmasters-ukraine.github.io/healthyfood/",
            img: "HealthyFood-preview",
            title: "Healthy Food",
            descr: "Ресторан здорової їжі: зірковий рейтинг.",
            category: "landingPage"
        }, {
            id: 9,
            url: "https://webmasters-ukraine.github.io/rhythm/",
            img: "Rhythm-preview",
            title: "Rhythm",
            descr: "Магазин електронних гітар.",
            category: "landingPage"
        }, {
            id: 9,
            url: "https://webmasters-ukraine.github.io/portfolio/",
            img: "Portfolio-preview",
            title: "Portfolio",
            descr: "Портфоліо дизайнера.",
            category: "landingPage"
        }, {
            id: 9,
            url: "https://webmasters-ukraine.github.io/relvise/",
            img: "Relvise-preview",
            title: "Relvise",
            descr: "Фінансова консультація: лише HTML та CSS.",
            category: "landingPage"
        }, {
            id: 9,
            url: "https://webmasters-ukraine.github.io/gocorona/",
            img: "GoCorona-preview",
            title: "Go Corona",
            descr: " Сайт додатку для здоров'я: анімація появи елементів при прокручуванні.",
            category: "landingPage"
        }, {
            id: 9,
            url: "https://webmasters-ukraine.github.io/fastfood/",
            img: "FastFood-preview",
            title: "Fast Food",
            descr: "Ресторан швидкої їжі: таби.",
            category: "landingPage"
        } ]
    };
    document.addEventListener("DOMContentLoaded", createCardList);
    function createCardList() {
        const listWrapper = document.querySelector("[data-card-list]");
        const tabWrapper = document.querySelector("[data-tab-list]");
        if (listWrapper && tabWrapper) {
            const categories = {};
            let cards;
            let buttons;
            let isCompleted = true;
            sortCategories(data);
            addButtons(categories, data.navBtn);
            addCards(categories.all);
            tabWrapper.addEventListener("click", (e => {
                const target = e.target;
                if (target && target.closest("[data-tab-key]") && !target.closest(".tab-active") && isCompleted) {
                    isCompleted = false;
                    const targetButton = target.closest("[data-tab-key]");
                    const attrValue = targetButton.dataset.tabKey;
                    buttons.forEach((item => {
                        item.classList.remove("tab-active");
                        if (targetButton === item) item.classList.add("tab-active");
                    }));
                    cards.forEach((item => {
                        item.classList.add("hidden");
                        setTimeout((() => {
                            item.remove();
                        }), 400);
                    }));
                    setTimeout((() => {
                        addCards(categories[attrValue]);
                        isCompleted = true;
                    }), 390);
                }
            }));
            function sortCategories(data) {
                data.items.forEach((item => {
                    const category = item.category;
                    const categoryItem = {
                        ...item,
                        category: data.navBtn[category]
                    };
                    categories.all ? categories.all = [ ...categories.all, categoryItem ] : categories.all = [ categoryItem ];
                    if (categories.hasOwnProperty(category)) categories[category] = [ ...categories[category], categoryItem ]; else categories[category] = [ categoryItem ];
                }));
            }
            function addButtons(categories, navBtn) {
                for (const key in categories) if (categories.hasOwnProperty(key)) {
                    const value = categories[key];
                    const nameBtn = navBtn[key];
                    const button = document.createElement("button");
                    button.classList = "categories__item";
                    button.setAttribute("data-tab-key", key);
                    button.innerHTML = ` \n                            <div class="categories__title">${nameBtn}</div>\n                            <div class="categories__count"><span>${value.length}</span></div>\n                        `;
                    if (key === "all") {
                        button.classList.add("tab-active");
                        tabWrapper.prepend(button);
                    } else tabWrapper.appendChild(button);
                }
                buttons = tabWrapper.querySelectorAll("[data-tab-key]");
            }
            function addCards(data) {
                data.forEach((({url, img, title, descr, category}) => {
                    const card = document.createElement("article");
                    card.className = "portfolio__item work";
                    card.innerHTML = `\n                        <a href="${url}" target="_blank" class="work__image-ibg">\n                            <img src="img/works/${img}.jpg" alt="Preview" />\n                        </a>\n                        <div class="work__content">\n                            <div class="work__header">\n                                <a href="${url}" target="_blank" class="work__title">\n                                    <h2>${title}</h2>\n                                </a>\n                                <div class="work__category">${category}</div>\n                            </div>\n                            \n                            <div class="work__descr">${descr}</div>\n                        </div>\n                    `;
                    listWrapper.appendChild(card);
                    setTimeout((() => {
                        card.classList.add("visible");
                    }), 10);
                }));
                cards = listWrapper.querySelectorAll(".portfolio__item.work");
            }
        }
    }
    window["FLS"] = true;
    isWebp();
})();