import { LinearGradient } from "react-text-gradients";
import SkillsSphere from "../components/SkillsSphere";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <section className="w-full flex justify-center px-4 py-10" id="skills">
        <div className="flex flex-col w-full max-w-7xl items-center justify-start">
          <div className="w-full">
            <motion.p
              className="mb-6 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <LinearGradient gradient={["to left", "#00bdd9ff ,#09c800ff"]}>
                Compétences
              </LinearGradient>
            </motion.p>
          </div>

          <div className="flex w-full justify-center">
            <SkillsSphere />
          </div>

          {/* Flèche incurvée double sens plus esthétique */}
          <div className="mt-8">
            <svg
              viewBox="0 0 200 80"
              width="100"
              height="40"
              className="mx-auto animate-pulse"
            >
              <path
                d="M20,60 C60,10 140,10 180,60"
                fill="none"
                stroke="#00bdd9"
                strokeWidth="4"
                strokeLinecap="round"
                markerStart="url(#arrowLeft)"
                markerEnd="url(#arrowRight)"
              />
              <defs>
                <marker
                  id="arrowLeft"
                  markerWidth="10"
                  markerHeight="10"
                  refX="5"
                  refY="5"
                  orient="auto"
                >
                  <path d="M10,0 L0,5 L10,10 Z" fill="#00bdd9" />
                </marker>
                <marker
                  id="arrowRight"
                  markerWidth="10"
                  markerHeight="10"
                  refX="0"
                  refY="5"
                  orient="auto"
                >
                  <path d="M0,0 L10,5 L0,10 Z" fill="#00bdd9" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
