import { LinearGradient } from "react-text-gradients";
import { myProjects } from "../constants/data";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="w-full flex justify-center mb-20 px-4" id="projects">
      <div className="flex flex-col w-full max-w-7xl items-center justify-start">
        <div className="w-full">
          <motion.p
            className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }} // Ensures it only animates once per scroll
          >
            <LinearGradient gradient={["to left", "#00bdd9ff ,#09c800ff"]}>
              Projets
            </LinearGradient>
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
