"use strict";

// Events at mobile devices

// touchstart
// touchmove 
// touchend
// touchenter
// touchleave
// touchcancel



window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });

    // box.addEventListener('touchenter', (e) => {
    //     e.preventDefault();

    //     console.log('Enter');
    // });

    // box.addEventListener('touchleave', (e) => {
    //     e.preventDefault();

    //     console.log('Leave');
    // });

    // box.addEventListener('touchcancel', (e) => {
    //     e.preventDefault();

    //     console.log('Cancel');
    // });

});



// touches

// targetTouches

// changedTouches