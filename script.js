window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d'); 
    const image1 = document.getElementById('image1');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    /**
     * Handles individual particles
     */
    class Particle{
        constructor(effect){
            this.effect = effect;
            this.x = Math.random() * this.effect.width;
            this.y = Math.random() * this.effect.height;
            this.size = 30;
        }
        draw(context){
            context.fillRect(this.x ,this.y, this.size, this.size);
        }
    }

    /**
     * Handles all the effects all at once
     */
    class Effect{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.particleArray = [];
        }
        
        init(){
            this.particleArray.push(new Particle(this));
        }

        draw(context){
            this.particleArray.forEach(particle => particle.draw(context));
        }
    }

    /**
     * Animation loop
     */
    function animate(){

    }

    /**
     * draw on canvas - x, y, width, height
     */
    //ctx.fillRect(50 ,50, 100, 100)
    //ctx.drawImage(image1, 0, 0, 400, 300);

    // const particle1 = new Particle();
    // particle1.draw();

    const effect = new Effect(canvas.width, canvas.height);
    effect.init();
    effect.draw(ctx);
    console.log(effect);

});