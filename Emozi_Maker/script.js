// ----------------------------------------------Changing Blocks

var left_btn = $('.left-side');
var right_btn = $('.right-side');

var left_btn_icon = $('.left-side > i');
var right_btn_icon = $('.right-side > i');

var block1 = $(".main-contents:eq(0)");
var block2 = $(".main-contents:eq(1)");
var part1 = $('.boxes:eq(0)');
var part2 = $('.boxes:eq(1)');

var titleBar = $('.select-title');
var boxTitle = ['Select Color','Select Eyes', 'Select Mouth'];
var boxes = [block1, part1, part2]
var contentIndex = 0;

right_btn.click(() => {
    if(contentIndex < boxes.length-1) {
        boxes.forEach((item) => {
            item.css('display', 'none');
        })
        contentIndex++;
        if(contentIndex > 0) {
            block1.css('display', 'none')
            block2.css('display', 'grid')
            left_btn_icon.css('display', 'block');
        }
        titleBar.text(boxTitle[contentIndex]);
        boxes[contentIndex].css('display', 'grid');
    }
    if(contentIndex >= boxes.length-1) {
        right_btn_icon.css('display', 'none');
    }
})

console.log(block1.css('display'))

left_btn.click(() => {
    if(contentIndex > 0) {
        boxes.forEach((item) => {
            item.css('display', 'none');
        })
        contentIndex--;
        if(contentIndex > 0) {
            block1.css('display', 'none')
            block2.css('display', 'grid')
        } else {
            block2.css('display', 'none')
            block1.css('display', 'block')
        }
        titleBar.text(boxTitle[contentIndex]);
        boxes[contentIndex].css('display', 'grid');
    }
    if(contentIndex <= 0) {
        left_btn_icon.css('display', 'none');
    }
    if(contentIndex < boxes.length-1) {
        right_btn_icon.css('display', 'block');
    }
})

// --------xxxxxxxxxxxxxxxxxxxxx-------------------Changing Blocks







// -------------------------------------------------Changing Colors

var circle = $('#circle')
var colour = $(".colour")


colour.click(function() {
        circle.css('display', 'block');
        circle.css("background", $(this).css("background-color"));
    }
);  

// ----------xxxxxxxxxxxxxxxxxxxxx------------------Changing Colors



















// -------------------------------------------------Changing Icon

var eyes = $('.eyes');
var mouth = $('.mouth');

var bigEye = $('#eyes2');
var bigMouth = $('#mouth2')

eyes.click(function() {
    bigEye.text($(this).text())
})

mouth.click(function() {
    bigMouth.text($(this).text())
})









