function Controller() {
    function __alloyId5() {
        var models = whereFunction(__alloyId4);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId2 = models[i];
            __alloyId2.__transform = transformFunction(__alloyId2);
            var __alloyId3 = Alloy.createController("_albums_feed", {
                $model: __alloyId2
            });
            rows.push(__alloyId3.getViewEx({
                recurse: true
            }));
        }
        $.__views.todoTable.setData(rows);
    }
    function whereFunction(collection) {
        return whereIndex ? collection.where({
            done: 1 === whereIndex ? 0 : 1
        }) : collection.models;
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        transform.item = "[" + transform.item + "]";
        return transform;
    }
    function showTasks(e) {
        whereIndex = "undefined" != typeof e.index && null !== e.index ? e.index : INDEXES[e.source.title];
        todos.fetch();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.todoWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: true,
        navBarHidden: true,
        exitOnClose: true,
        orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "todoWin",
        title: "Todo"
    });
    $.__views.todoWin && $.addTopLevelView($.__views.todoWin);
    $.__views.todoTable = Ti.UI.createTableView({
        top: "50dp",
        bottom: "46dp",
        id: "todoTable"
    });
    $.__views.todoWin.add($.__views.todoTable);
    var __alloyId4 = Alloy.Collections["todo"] || todo;
    __alloyId4.on("fetch destroy change add remove reset", __alloyId5);
    $.__views.footer = Ti.UI.createView({
        bottom: 0,
        height: "46dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            }
        },
        id: "footer"
    });
    $.__views.todoWin.add($.__views.footer);
    var __alloyId7 = [];
    var __alloyId11 = {
        title: "Facebook",
        ns: "Alloy.Abstract"
    };
    __alloyId7.push(__alloyId11);
    var __alloyId12 = {
        title: "Twitter",
        ns: "Alloy.Abstract"
    };
    __alloyId7.push(__alloyId12);
    var __alloyId13 = {
        title: "Others",
        ns: "Alloy.Abstract"
    };
    __alloyId7.push(__alloyId13);
    $.__views.tabbedbar = Ti.UI.iOS.createTabbedBar({
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        backgroundColor: "#800",
        index: 0,
        height: 40,
        left: 20,
        right: 20,
        labels: __alloyId7,
        id: "tabbedbar"
    });
    $.__views.footer.add($.__views.tabbedbar);
    showTasks ? $.__views.tabbedbar.addEventListener("click", showTasks) : __defers["$.__views.tabbedbar!click!showTasks"] = true;
    exports.destroy = function() {
        __alloyId4.off("fetch destroy change add remove reset", __alloyId5);
    };
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo;
    var INDEXES = {
        All: 0,
        Active: 1,
        Done: 2
    };
    var whereIndex = INDEXES["All"];
    var err, adapter = require("alloy/models/Todo").definition.config.adapter.type;
    switch (adapter) {
      case "localStorage":
        true && (err = "localStorage adapter only supported on Mobileweb");
        break;

      case "properties":
        break;

      case "sql":
      case "sql_new":
        false;
        break;

      default:
        err = 'Unknown adapter type "' + adapter + '"';
    }
    if (err) alert(err); else {
        $.todoWin.open();
        todos.fetch();
    }
    var isIpad = true && Alloy.isTablet;
    var usesNavGroup = true && Alloy.isHandheld || false;
    usesNavGroup && (Alloy.Globals.navgroup = $.navgroup);
    $.master.on("detail", function(e) {
        var controller = isIpad ? $.detail : Alloy.createController("detail");
        var win = controller.getView();
        controller.setArticle(e.row.articleUrl);
        usesNavGroup && Alloy.Globals.navgroup.open(win);
    });
    $.index.open();
    __defers["$.__views.tabbedbar!click!showTasks"] && $.__views.tabbedbar.addEventListener("click", showTasks);
    __defers["$.__views.__alloyId16!click!showTasks"] && $.__views.__alloyId16.addEventListener("click", showTasks);
    __defers["$.__views.__alloyId18!click!showTasks"] && $.__views.__alloyId18.addEventListener("click", showTasks);
    __defers["$.__views.__alloyId20!click!showTasks"] && $.__views.__alloyId20.addEventListener("click", showTasks);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;