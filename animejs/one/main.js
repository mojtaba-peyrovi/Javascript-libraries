anime({
    targets: 'div.box.red',
    translateY: [
        {value: 200, duration: 2000 },
        {value: 0, duration: 800 }
    ],
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine'
    }

});

// anime({
//     targets: 'div.box.blue',
//     translateY: [
//         {value: 200, duration: 2000, delay:3000  },
//         {value: 0, duration: 800 }
//     ],
//     rotate:{
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 2200
//     }
//
// });
//
// anime({
//     targets: 'div.box.green',
//     translateY: [
//         {value: 200, duration: 2000, delay:6000  },
//         {value: 0, duration: 800 }
//     ],
//     rotate:{
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 5200
//     }
//
// });
//
// anime({
//     targets: 'div.box.yellow',
//     translateY: [
//         {value: 200, duration: 2000, delay:8500  },
//         {value: 0, duration: 800 }
//     ],
//     rotate:{
//         value: '1turn',
//         easing: 'easeInOutSine',
//         delay: 8000
//     }
//
// });
var playPause = anime({
    targets: 'div.box',
    translateY: [
        {value: 200, duration: 2000 },
        {value: 0, duration: 800 }
    ],
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine'
    },

    delay: function(el, i, l) {
        return i * 2000
    },
    autoplay: false
});


document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;
