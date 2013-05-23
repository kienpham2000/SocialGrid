function Controller() {
    function doClick() {
        alert($.label2.text);
    }
    function mapControl() {
        console.log("inside map control");
        $.map.visible = $.on_off.value;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    var __alloyId1 = [];
    $.__views.map = Ti.Map.createView({
        left: "0",
        top: "0",
        width: "auto",
        height: "auto",
        zIndex: "0",
        prop_customData: "92683",
        annotations: __alloyId1,
        ns: Ti.Map,
        id: "map"
    });
    $.__views.index.add($.__views.map);
    $.__views.on_off = Ti.UI.createSwitch({
        left: "0",
        top: "200",
        width: "auto",
        height: "auto",
        zIndex: "1",
        value: true,
        id: "on_off"
    });
    $.__views.index.add($.__views.on_off);
    mapControl ? $.__views.on_off.addEventListener("change", mapControl) : __defers["$.__views.on_off!change!mapControl"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    console.log("size is...: ");
    console.log(Ti.UI.SIZE);
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    __defers["$.__views.on_off!change!mapControl"] && $.__views.on_off.addEventListener("change", mapControl);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;