var keysSounds = {
    q: {
        sound: new Howl({
            src: ['sounds/bubbles.mp3'],
            html5: true
        }),
        color: '#1abc9c'
    },
    w: {
        sound: new Howl({
            src: ['sounds/clay.mp3'],
            html5: true
        }),
        color: '#2ecc71'
    },
    e: {
        sound: new Howl({
            src: ['sounds/confetti.mp3'],
            html5: true
        }),
        color: '#3498db'
    },
    r: {
        sound: new Howl({
            src: ['sounds/corona.mp3'],
            html5: true
        }),
        color: '#9b59b6'
    },
        t: {
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3'],
            html5: true
        }),
        color: '#34495e'
    },
    y: {
        sound: new Howl({
            src: ['sounds/flash-1.mp3'],
            html5: true
        }),
        color: '#16a085'
    },
    u: {
        sound: new Howl({
            src: ['sounds/flash-2.mp3'],
            html5: true
        }),
        color: '#27ae60'
    },
    i: {
        sound: new Howl({
            src: ['sounds/flash-3.mp3'],
            html5: true
        }),
        color: '#2980b9'
    },
    o: {
        sound: new Howl({
            src: ['sounds/glimmer.mp3'],
            html5: true
        }),
        color: '#8e44ad'
    },
    p: {
        sound: new Howl({
            src: ['sounds/moon.mp3'],
            html5: true
        }),
        color: '#2c3e50'
    },
    a: {
        sound: new Howl({
            src: ['sounds/pinwheel.mp3'],
            html5: true
        }),
        color: '#f1c40f'
    },
    s: {
        sound: new Howl({
            src: ['sounds/piston-1.mp3'],
            html5: true
        }),
        color: '#e67e22'
    },
        d: {
        sound: new Howl({
            src: ['sounds/piston-2.mp3'],
            html5: true
        }),
        color: '#e74c3c'
    },
    f: {
        sound: new Howl({
            src: ['sounds/prism-1.mp3'],
            html5: true
        }),
        color: '#95a5a6'
    },
    g: {
        sound: new Howl({
            src: ['sounds/prism-2.mp3'],
            html5: true
        }),
        color: '#f39c12'
    },
    h: {
        sound: new Howl({
            src: ['sounds/prism-3.mp3'],
            html5: true
        }),
        color: '#d35400'
    },
    j: {
        sound: new Howl({
            src: ['sounds/splits.mp3'],
            html5: true
        }),
        color: '#1abc9c'
    },
    k: {
        sound: new Howl({
            src: ['sounds/squiggle.mp3'],
            html5: true
        }),
        color: '#2ecc71'
    },
    l: {
        sound: new Howl({
            src: ['sounds/strike.mp3'],
            html5: true
        }),
        color: '#3498db'
    },
    z: {
        sound: new Howl({
            src: ['sounds/suspension.mp3'],
            html5: true
        }),
        color: '#9b59b6'
    },
    x: {
        sound: new Howl({
            src: ['sounds/timer.mp3'],
            html5: true
        }),
        color: '#34495e'
    },
    c: {
        sound: new Howl({
            src: ['sounds/ufo.mp3'],
            html5: true
        }),
        color: '#16a085'
    },
    v: {
        sound: new Howl({
            src: ['sounds/veil.mp3'],
            html5: true
        }),
        color: '#27ae60'
    },
    b: {
        sound: new Howl({
            src: ['sounds/wipe.mp3'],
            html5: true
        }),
        color: '#2980b9'
    },
    n: {
        sound: new Howl({
            src: ['sounds/zig-zag.mp3'],
            html5: true
        }),
        color: '#8e44ad'
    },
    m: {
        sound: new Howl({
            src: ['sounds/moon.mp3'],
            html5: true
        }),
        color: '#2c3e50'
    }
}

var circles = [];

function onKeyDown(event){
    // creates one circle using the colors from keysSounds
    circles.push(createRandomCircle(Math.floor(Math.random() * 300)+100, 
                                    keysSounds[event.key].color));

    // creates two more circles with random colors
    circles.push(createRandomCircle(Math.floor(Math.random() * 300)+100, 
                                    rainbow(1000, Math.floor(Math.random() * 1000))));
    circles.push(createRandomCircle(Math.floor(Math.random() * 300)+100, 
                                    rainbow(1000, Math.floor(Math.random() * 1000))));

    // play the sound for the pressed key
    keysSounds[event.key].sound.play(); 
} 

function onMouseDown(event)
{
    // creates one circle using the colors from keysSounds
    circles.push(createRandomCircle(Math.floor(Math.random() * 300)+100, 
                                    keysSounds[Object.keys(keysSounds)[Math.floor(Math.random() * 26)]].color));
    
    // creates two more circles with random colors
    circles.push(createRandomCircle(Math.floor(Math.random() * 300)+100, 
                                    rainbow(1000, Math.floor(Math.random() * 1000))));
    circles.push(createRandomCircle(Math.floor(Math.random() * 300)+100, 
                                    rainbow(1000, Math.floor(Math.random() * 1000))));

    // play a random key's sound effect
    keysSounds[Object.keys(keysSounds)[Math.floor(Math.random() * 26)]].sound.play(); 
}

function createRandomCircle(radius, circleFillColor)
{
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var newCircle = new Path.Circle(point, radius);
    newCircle.fillColor = circleFillColor;

    return newCircle;
}

function onFrame(event)
{
    for (var i=0; i<circles.length; i++)
    {
        circles[i].fillColor.hue += 1;
        circles[i].scale(0.97);
        console.log(circles[i].scale);

        if (circles[i].area < 10) // remove circles after they've become small enough
        {
            circles[i].remove(); // remove circle from the canvas
            circles.splice(i, 1); // remove circle from the array
        }
    }
}
