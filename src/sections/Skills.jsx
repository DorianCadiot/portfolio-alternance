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

          {/* Flèche incurvée double sens animée */}
          <div className="mt-6 animate-bounce flex items-center justify-center text-3xl text-[#00bdd9]">
            <span className="mx-2 rotate-[30deg]">↶</span>
            <span className="mx-2 -rotate-[30deg]">↷</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
