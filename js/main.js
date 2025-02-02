$(".start-question").on("click", () => {
    $(".question").addClass("active");
    $("body").addClass("hidden")
})

$(".question__btn-list").on("click", function(event) {
    // Получаем элемент кнопки, на которую нажали
    const button = $(event.target).closest(".question__btn");

    // Проверяем, была ли нажата кнопка с классом question__btn--error
    if (button.length && button.hasClass("question__btn--error")) {
        // Показываем последний слайд
        const lastTab = $(".tab-last");
        const lastTabIndex = lastTab.data("tab");

        // Снимаем класс active со всех табов и картинок
        $(".tab").removeClass("active");
        $(".question__img").removeClass("active");

        // Добавляем класс active к последнему слайду и соответствующей картинке
        lastTab.addClass("active");
        $(".question__img[data-tab='" + lastTabIndex + "']").addClass("active");
    } else if (button.length) {
        // Переход к следующему слайду
        const currentTab = $(".tab.active");
        const currentTabIndex = currentTab.data("tab");
        const nextTabIndex = currentTabIndex + 1;

        // Проверяем, существует ли следующий таб
        const nextTab = $(".tab[data-tab='" + nextTabIndex + "']");
        if (nextTab.length) {
            // Снимаем класс active со всех табов и картинок
            $(".tab").removeClass("active");
            $(".question__img").removeClass("active");

            // Добавляем класс active к следующему табу и соответствующей картинке
            nextTab.addClass("active");
            $(".question__img[data-tab='" + nextTabIndex + "']").addClass("active");
        } else {
            // Если мы прошли все табы и не нажали на ошибку, не показываем слайд с ошибкой
            console.log("Все табы пройдены, слайд с ошибкой не показывается.");
        }
    }
});

$(".restart-question").on("click", function() {
    // Снимаем класс active со всех табов и картинок
    $(".tab").removeClass("active");
    $(".question__img").removeClass("active");

    // Убираем последний слайд
    $(".tab-last").removeClass("active");

    // Активируем первый таб и соответствующую картинку
    const firstTab = $(".tab[data-tab='1']");
    firstTab.addClass("active");
    $(".question__img[data-tab='1']").addClass("active");
});