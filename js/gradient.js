var backgroundGradient = new Granim({
    element: '#main',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ffffff', '#000000'],
                ['#000000', '#ffffff'],
                ['#ffffff', '#000000'],
            ],
            transitionSpeed: 8000
        }
    }
});