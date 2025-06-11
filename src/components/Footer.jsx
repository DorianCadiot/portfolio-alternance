import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-[#1a191e] text-white py-8"
      initial={{ opacity: 0, y: 50 }} // Starts hidden & lower
      whileInView={{ opacity: 1, y: 0 }} // Fades in & moves up
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }} // Only animates once per scroll
    >
      <div className="mx-auto px-6">
        {/* Separator Line */}
        <motion.div
          className="border-t border-gray-600 opacity-50 mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        ></motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Left Section - Branding & Resume Button */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <a
              href="CV_Dorian_CADIOT_bis.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00bdd9ff] text-black px-5 py-2 text-sm font-medium rounded-md hover:bg-[#00bdd9ff] transition-colors"
            >
              Télecharger le CV
            </a>
          </motion.div>

          {/* Right Section - Social Icons */}
          <div className="flex gap-4 mt-4 sm:mt-0">
            {[
              "https://www.linkedin.com/in/cadiot-dorian/?trk=opento_sprofile_topcard",
              "https://www.instagram.com/dorian.cdt/?hl=en",
            ].map((url, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <SocialIcon
                  url={url}
                  bgColor="transparent"
                  fgColor="white"
                  style={{ height: 35, width: 35 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
