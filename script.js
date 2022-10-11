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
        constructor(){
            this.x = 0;
            this.y = 0;
            this.size = 30;
        }
        draw(){
            ctx.fillRect(this.x ,this.y, this.size, this.size);
        }
    }

    /**
     * Handles all the effects all at once
     */
    class Effects{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.particleArray = [];
        }
        
        init(){
            this.particleArray.push(new Particle());
        }

        draw(){
            this.particleArray.forEach(particle => particle.draw());
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

});