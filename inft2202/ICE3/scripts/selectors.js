/*
ICE 3 Part 2 selectors
Yashvi Patel
January 30 2024
 */

console.log("selector.js loaded");
$(function(){
    //alert("DOM is ready");

});

function highlight(element){
    element.css('background-color', "#fcf30040")
}

function cssSelectors(){
    // updating by tag 
    $('p').css('background-color', "#2a9d8f");
    // updating by class where class is red-box
    $('.red-box').css('background-color', "#2a9d8f");

    // update by id where id is list
    $('#list').css('font-size', "40px");
    $('list:even').css('background-color', "#fcf30040");
}

function traversingTheDOM(){
    //$('#list').prev().css('background-color', "#2a9d8f");
    //$('#list').next().css('background-color', "#2a9d8f");
    $('#list').prev().next().css('background-color', "#2a9d8f");

    $('#list').find('li').css('background-color', "#2a9d8f");
    // traverse up tp one level
    $('#list').parent('div').css('font-size', "24px");

    // traverse all the way up to body
    $('#list').parents('body').css('font-size', "24px");
}

function filtering(){
    $('#list').find('li').filter(':even').css('background-color', "#2a9d8f");

    $('#list').find('li').filter(function (i){
        return i % 2 ===0;
    }).css('background-color', "red");
}

function addReplaceRemove(){
    $('ul li:first').append($("<ul><li> I am going to be the first item of the first sub-item </li></ul>"));
    $('ul#list').prepend($("<li> I am going to be the last item of the first sub-item </li>"));
    // use after to add elements after another
    $('.red-box').after("<div class=\"red-box new-box\"> New Box </div>");

    let newText = 'Last night, Darth Vader came dowm from the planet vulcan';
    $('p.Grumpy').replaceWith(`<p> ${newText} </p>`);
}


// calling the functions
// cssSelectors();
// traversingTheDOM();
// filtering();
addReplaceRemove();