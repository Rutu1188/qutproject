    // the following code only support single tabs in a page
    // we can move this tabs component to SWE in the future but have to consider multiple tabs support in a page
    function selectTab(tabId) {
        $(".qg-tab-content").each(function() {
            if ($(this).attr('id') === tabId) {
                $(this).show();
            } else {
                $(this).hide();
            }
        })
    }
    function initTabs() {
        $(".qg-radio-tabs").each(function() {
            $('input[type=radio][name=tabs-radio]', this).change(function() {
                selectTab(this.value);
            });
        })
        selectTab($(".qg-radio-tabs input[type=radio][name=tabs-radio]:checked").val());
    }
    $(function() {
        initTabs();
    });