import { useEffect, useRef } from "react";
import "./Fireworks.css";

const Fireworks = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const fireworks = [];
    const particles = [];

    class Firework {
      constructor(x, y, targetX, targetY) {
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.speed = 5;
        this.angle = Math.atan2(targetY - y, targetX - x);
        this.velocityX = Math.cos(this.angle) * this.speed;
        this.velocityY = Math.sin(this.angle) * this.speed;
      }

      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        if (Math.hypot(this.x - this.targetX, this.y - this.targetY) < 5) {
          this.explode();
          return true;
        }
        return false;
      }

      explode() {
        for (let i = 0; i < 40; i++) {
          particles.push(new Particle(this.x, this.y));
        }
      }

      draw() {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 2;
        this.speedX = (Math.random() - 0.5) * 8;
        this.speedY = (Math.random() - 0.5) * 8;
        this.opacity = 1;
        this.life = 70;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.015;
        this.life--;
        return this.life <= 0;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 60%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fireworks.forEach((firework, index) => {
        if (firework.update()) {
          fireworks.splice(index, 1);
        } else {
          firework.draw();
        }
      });

      particles.forEach((particle, index) => {
        if (particle.update()) {
          particles.splice(index, 1);
        } else {
          particle.draw();
        }
      });

      requestAnimationFrame(animate);
    }

    function launchFirework() {
      const x = Math.random() * canvas.width;
      const y = canvas.height;
      const targetX = Math.random() * canvas.width;
      const targetY = Math.random() * (canvas.height / 2);
      fireworks.push(new Firework(x, y, targetX, targetY));
    }

    animate();
    const fireworkInterval = setInterval(launchFirework, 1000);

    return () => {
      clearInterval(fireworkInterval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fireworks-canvas"></canvas>;
};

export default Fireworks;
