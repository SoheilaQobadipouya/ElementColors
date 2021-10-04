/***********Add Requirement Styles************** */
const FileStyle=
"<style>"+
    ".container{"+
    "width:200px;"+
    "height:200px;"+
    "background-color: #333;"+
"}"+
"#SelectedColor,#SelectedBackColor {"+
    "height: 50px;"+
    "width: 280px;"+
    "border: none;"+
"}"+
"#ColorPickerContainer {"+
    "width: 300px;"+
    "text-align: center;"+
    "background: #d2d0d040;"+
    "border-radius: 20px 20px 0px 0px;"+
    "box-shadow: 0px 0px 5px #fff;"+
    "position: absolute;"+
    "right: 50px;"+
    "top: 50px;"+
    "cursor: move;"+
    "color:#000 !important;"+
    "padding: 10px;"+
"}"+
"</style>";
$("body").append(FileStyle);

/***********Add Requirement Dependencies************** */
const FileDependencies=
'<script'+
'src="https://code.jquery.com/jquery-3.6.0.min.js"'+
'integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="'+
'crossorigin="anonymous"></script>'+
'<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>'+
'<script src="https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.4.6/jscolor.min.js" integrity="sha512-+MYpQFxmnAHvrA8opNlNDNwC8qPiZu9i3Lb86n/H9EYugz2FB6MBRQrKpBrkyL/qQgBjWN2ctQbD9XoaVh+TUg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>';
//$("body").append(FileDependencies);
/***********Add Color Palette************** */
const ColorPalette=
'<div id="ColorPickerContainer">'+
            'Select color and then click on your element:'+
            '<br/>'+
            'Back Color:<input id="SelectedBackColor" value="#3399FF80" data-jscolor="{}">'+
            'Font Color:<input id="SelectedColor" value="#3399FF80" data-jscolor="{}">'+
        '</div>';
$("body").append(ColorPalette);
/***********             ************** */
const ColorTarget={
        BACKGROUND:"background-color"
        ,FONT:"color"
}
var CurrentPosition="";
/***********             ************** */
$(document).on("click", "*", function (event) {
    if(event.target.id!="SelectedColor" && event.target.id!="SelectedBackColor" && event.target.id!="ColorPickerContainer"){
        if(event.target==this){
            if(CurrentPosition==ColorTarget.BACKGROUND){
                $(event.target).css(ColorTarget.BACKGROUND,$("#SelectedBackColor").val());
            }
            else if(CurrentPosition==ColorTarget.FONT){
                $(event.target).css(ColorTarget.FONT,$("#SelectedColor").val());
            }
        }
    }
});
/***********             ************** */ 
$( function() {
    $("#ColorPickerContainer").draggable();
});
$("#SelectedBackColor").click(function(){
    CurrentPosition=ColorTarget.BACKGROUND;
});
$("#SelectedColor").click(function(){
    CurrentPosition=ColorTarget.FONT;
});
