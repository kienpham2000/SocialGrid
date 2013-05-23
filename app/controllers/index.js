function doClick(e) {
    /*alert($.label.text);*/

    alert($.label2.text);
}

function mapControl(e)
{
	console.log("inside map control");
	$.map.visible = $.on_off.value;
}

$.index.open();

console.log("size is...: ");
console.log(Ti.UI.SIZE);
