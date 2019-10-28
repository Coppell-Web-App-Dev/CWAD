
function createBackground(src){
    var backgroundGradient = new Granim({
        element: '#main',
        direction: 'top-bottom',
        isPausedWhenNotInView: true,
        image: {
            source: src,
            blendingMode: 'multiply'
        },
        states: {
            "default-state": {
                gradients: [
                    ['#000000','#000000','#002f33', '#002f33', '#00929e'],
                    ['#000000','#000000', '#000000', '#000000', '#005955'],
                ],
                transitionSpeed: 7500
            }
        }
    });
}
