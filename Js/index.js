particlesJS.load('particles-js', 'particles.json', function () {
});


let boxWidth = $(".box").outerWidth();

$("#sideBar").animate({ left: `-${boxWidth}` }, 700)

$("#sideBar i").click(function () {

    if ($("#sideBar").css(`left`) == '0px') {

        $("#sideBar").animate({ left: `-${boxWidth}` }, 500)
    }
    else {
        $("#sideBar").animate({ left: `0px` }, 500)
    }

})

let colorBoxes = $(".color_box")

colorBoxes.eq(0).css(`backgroundColor`, '#09c')
colorBoxes.eq(1).css(`backgroundColor`, 'teal')
colorBoxes.eq(2).css(`backgroundColor`, 'orange')
colorBoxes.eq(3).css(`backgroundColor`, 'lightgreen')
colorBoxes.eq(4).css(`backgroundColor`, 'tomato')

colorBoxes.click(function (e) {
    let bgColor = $(e.target).css(`backgroundColor`)
    $(".change").css('color' , bgColor)
})

//  ********************** JS OOP *****************************

import {Setting} from './Setting.js'

let setting = new Setting()



