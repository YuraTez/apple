$(".start-question").on("click", () => {
    $(".question").addClass("active");
    $("body").addClass("hidden")
    $(".start-page").remove()
})

$(".question__btn-list").on("click", function(event) {

    const button = $(event.target).closest(".question__btn");


    if (button.length && button.hasClass("question__btn--error")) {

        const lastTab = $(".tab-last");
        const lastTabIndex = lastTab.data("tab");


        $(".tab").removeClass("active");
        $(".question__img").removeClass("active");


        lastTab.addClass("active");
        $(".question__img[data-tab='" + lastTabIndex + "']").addClass("active");
    } else if (button.length) {

        const currentTab = $(".tab.active");
        const currentTabIndex = currentTab.data("tab");
        const nextTabIndex = currentTabIndex + 1;


        const nextTab = $(".tab[data-tab='" + nextTabIndex + "']");
        if (nextTab.length) {

            $(".tab").removeClass("active");
            $(".question__img").removeClass("active");


            nextTab.addClass("active");
            $(".question__img[data-tab='" + nextTabIndex + "']").addClass("active");
        } else {
            $(".question").remove()
            $(".wrapper--last-page").removeClass("hide")
            $("body").removeClass("hidden")
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