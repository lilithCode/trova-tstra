"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const StarParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="stars"
      init={particlesInit}
      options={{
        preset: "stars",
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.2,
              opacity: 1,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.2,
              sync: false,
            },
          },

          size: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              size_min: 0.1,
              sync: false,
            },
          },
          move: {
            enable: false,
            speed: 0.01,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        background: {
          opacity: 0,
        },
        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true,
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        background: "linear-gradient(to bottom, #000000, #27279b)",
      }}
    />
  );
};

export default StarParticles;
