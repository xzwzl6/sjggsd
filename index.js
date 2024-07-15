(function(){
    var $mod_panel = DOMUtil.getElementsByClassName('mod-panel')[0];
    var $tabs = DOMUtil.getElementsByClassName('capital-tabs')[0];
    var $navs = $tabs.getElementsByTagName('A');
    var $panels = DOMUtil.getElementsByClassName('panel');
    var index = 0;
    for(var i=0;i<$navs.length;i++){
        (function(i){
            $navs[i].onclick = function(){
                DOMUtil.removeClass($navs[index],'active');
                DOMUtil.removeClass($panels[index],'active');
                DOMUtil.addClass($navs[i],'active');
                DOMUtil.addClass($panels[i],'active');
                index = i;
            };
        })(i);
    }
})();