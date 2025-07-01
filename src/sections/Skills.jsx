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

          {/* Flèche incurvée double sens en SVG */}
          <div className="mt-6">
            <svg
              width="100"
              height="60"
              viewBox="0 0 100 60"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto animate-bounce"
            >
              <path
                d="M10 10 C10 50, 90 50, 90 10"
                stroke="#00bdd9"
                strokeWidth="6"
                fill="none"
                markerStart="url(#arrowStart)"
                markerEnd="url(#arrowEnd)"
              />
              <defs>
                <marker
                  id="arrowStart"
                  markerWidth="10"
                  markerHeight="10"
                  refX="5"
                  refY="5"
                  orient="auto"
                >
                  <path d="M0,5 L10,0 L8,5 L10,10 Z" fill="#00bdd9" />
                </marker>
                <marker
                  id="arrowEnd"
                  markerWidth="10"
                  markerHeight="10"
                  refX="5"
                  refY="5"
                  orient="auto"
                >
                  <path d="M0,5 L10,0 L8,5 L10,10 Z" fill="#00bdd9" />
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
