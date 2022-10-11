window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d'); 

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
            this.size = Math.random() * 10;

            // velocity x,y
            this.vx = 1;
            this.vy = 1;
        }
        draw(context){
            context.fillRect(this.x ,this.y, this.size, this.size);
        }
        update(){
            this.x += this.vx;
            this.y += this.vy; 
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
            this.image = document.getElementById('image1');

            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;

            this.x = this.centerX - this.image.width * 0.5;
            this.y = this.centerY - this.image.height * 0.5;
        }
        
        init(){
            for (let i = 0; i < 100; i++) {
                this.particleArray.push(new Particle(this));
            }
        }

        draw(context){
            this.particleArray.forEach(particle => particle.draw(context));
            context.drawImage(this.image, this.x, this.y);
        }

        update(){
            this.particleArray.forEach(particle => particle.update());
        }
    }

    const effect = new Effect(canvas.width, canvas.height);
    effect.init();

    /**
     * Animation loop
     */
    function animate(){
        effect.draw(ctx);
        effect.update();
        window.requestAnimationFrame(animate);
    }

    animate();

    /**
     * draw on canvas - x, y, width, height
     */
    //ctx.fillRect(50 ,50, 100, 100)
    //ctx.drawImage(image1, 0, 0, 400, 300);

    // const particle1 = new Particle();
    // particle1.draw();

    
    //console.log(effect);



});