function Controller() {
    function __alloyId18() {
        var models = whereFunction(__alloyId17);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId15 = models[i];
            __alloyId15.__transform = transformFunction(__alloyId15);
            var __alloyId16 = Alloy.createController("row", {
                $model: __alloyId15
            });
            rows.push(__alloyId16.getViewEx({
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
    function addToDoItem() {
        Alloy.createController("add").getView().open();
    }
    function showTasks(e) {
        whereIndex = "undefined" != typeof e.index && null !== e.index ? e.index : INDEXES[e.source.title];
        todos.fetch();
    }
    function refreshRss() {
        rss.loadRssFeed({
            success: function(data) {
                var rows = [];
                _.each(data, function(item) {
                    rows.push(Alloy.createController("row", {
                        articleUrl: item.link,
                        image: item.image,
                        title: item.title,
                        date: item.pubDate
                    }).getView());
                });
                $.fb_table_albums.setData(rows);
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.fb_win = Ti.UI.createWindow({
        fullscreen: true,
        navBarHidden: true,
        exitOnClose: true,
        orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "fb_win"
    });
    $.__views.header = Ti.UI.createView({
        top: 0,
        height: "50dp",
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
        id: "header"
    });
    $.__views.fb_win.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        left: "10dp",
        color: "#fff",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Facebook Albums",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.refreshButton = Ti.UI.createButton({
        id: "refreshButton"
    });
    refreshRss ? $.__views.refreshButton.addEventListener("click", refreshRss) : __defers["$.__views.refreshButton!click!refreshRss"] = true;
    $.__views.fb_win.rightNavButton = $.__views.refreshButton;
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        id: "__alloyId8"
    });
    var __alloyId9 = [];
    __alloyId9.push($.__views.__alloyId8);
    $.__views.image = Ti.UI.createImageView({
        id: "image"
    });
    $.__views.__alloyId8.add($.__views.image);
    $.__views.date = Ti.UI.createLabel({
        id: "date"
    });
    $.__views.__alloyId8.add($.__views.date);
    $.__views.title = Ti.UI.createLabel({
        left: "10dp",
        color: "#fff",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        id: "title"
    });
    $.__views.__alloyId8.add($.__views.title);
    $.__views.fb_table_albums = Ti.UI.createTableView({
        data: __alloyId9,
        id: "fb_table_albums"
    });
    $.__views.fb_win.add($.__views.fb_table_albums);
    $.__views.fb_tab = Ti.UI.createTab({
        window: $.__views.fb_win,
        id: "fb_tab",
        title: "Facebook"
    });
    $.__views.index.addTab($.__views.fb_tab);
    $.__views.__alloyId10 = Ti.UI.createWindow({
        fullscreen: true,
        navBarHidden: true,
        exitOnClose: true,
        orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "__alloyId10"
    });
    $.__views.twitter_tab = Ti.UI.createTab({
        window: $.__views.__alloyId10,
        id: "twitter_tab",
        title: "Twitter"
    });
    $.__views.index.addTab($.__views.twitter_tab);
    $.__views.__alloyId11 = Ti.UI.createWindow({
        fullscreen: true,
        navBarHidden: true,
        exitOnClose: true,
        orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "__alloyId11"
    });
    $.__views.foursquare_tab = Ti.UI.createTab({
        window: $.__views.__alloyId11,
        id: "foursquare_tab",
        title: "Foursquare"
    });
    $.__views.index.addTab($.__views.foursquare_tab);
    $.__views.__alloyId12 = Ti.UI.createWindow({
        fullscreen: true,
        navBarHidden: true,
        exitOnClose: true,
        orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "__alloyId12"
    });
    $.__views.other_tab = Ti.UI.createTab({
        window: $.__views.__alloyId12,
        id: "other_tab",
        title: "Other"
    });
    $.__views.index.addTab($.__views.other_tab);
    $.__views.todoWin = Ti.UI.createWindow({
        fullscreen: true,
        navBarHidden: true,
        exitOnClose: true,
        orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "todoWin"
    });
    $.__views.header = Ti.UI.createView({
        top: 0,
        height: "50dp",
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
        id: "header"
    });
    $.__views.todoWin.add($.__views.header);
    $.__views.title = Ti.UI.createLabel({
        left: "10dp",
        color: "#fff",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Todo",
        id: "title"
    });
    $.__views.header.add($.__views.title);
    $.__views.addView = Ti.UI.createView({
        top: 0,
        bottom: 0,
        right: 0,
        width: "50dp",
        id: "addView"
    });
    $.__views.header.add($.__views.addView);
    addToDoItem ? $.__views.addView.addEventListener("click", addToDoItem) : __defers["$.__views.addView!click!addToDoItem"] = true;
    $.__views.addImage = Ti.UI.createImageView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "transparent",
        image: "/ic_menu_add.png",
        touchEnabled: false,
        id: "addImage"
    });
    $.__views.addView.add($.__views.addImage);
    $.__views.todoTable = Ti.UI.createTableView({
        top: "50dp",
        bottom: "46dp",
        id: "todoTable"
    });
    $.__views.todoWin.add($.__views.todoTable);
    var __alloyId17 = Alloy.Collections["todo"] || todo;
    __alloyId17.on("fetch destroy change add remove reset", __alloyId18);
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
    var __alloyId20 = [];
    var __alloyId24 = {
        title: "All",
        ns: "Alloy.Abstract"
    };
    __alloyId20.push(__alloyId24);
    var __alloyId25 = {
        title: "Active",
        ns: "Alloy.Abstract"
    };
    __alloyId20.push(__alloyId25);
    var __alloyId26 = {
        title: "Done",
        ns: "Alloy.Abstract"
    };
    __alloyId20.push(__alloyId26);
    $.__views.tabbedbar = Ti.UI.iOS.createTabbedBar({
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        index: 0,
        height: 40,
        left: 20,
        right: 20,
        labels: __alloyId20,
        id: "tabbedbar"
    });
    $.__views.footer.add($.__views.tabbedbar);
    showTasks ? $.__views.tabbedbar.addEventListener("click", showTasks) : __defers["$.__views.tabbedbar!click!showTasks"] = true;
    $.__views.todo_tab = Ti.UI.createTab({
        window: $.__views.todoWin,
        id: "todo_tab",
        title: "Todo"
    });
    $.__views.index.addTab($.__views.todo_tab);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId17.off("fetch destroy change add remove reset", __alloyId18);
    };
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo;
    var rss = require("rss");
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
    err ? alert(err) : $.index.open();
    refreshRss();
    __defers["$.__views.__alloyId5!click!refreshRss"] && $.__views.__alloyId5.addEventListener("click", refreshRss);
    __defers["$.__views.refreshButton!click!refreshRss"] && $.__views.refreshButton.addEventListener("click", refreshRss);
    __defers["$.__views.addView!click!addToDoItem"] && $.__views.addView.addEventListener("click", addToDoItem);
    __defers["$.__views.tabbedbar!click!showTasks"] && $.__views.tabbedbar.addEventListener("click", showTasks);
    __defers["$.__views.__alloyId29!click!showTasks"] && $.__views.__alloyId29.addEventListener("click", showTasks);
    __defers["$.__views.__alloyId31!click!showTasks"] && $.__views.__alloyId31.addEventListener("click", showTasks);
    __defers["$.__views.__alloyId33!click!showTasks"] && $.__views.__alloyId33.addEventListener("click", showTasks);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;