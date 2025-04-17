import { useRef, useState } from "react";
import { LinearGradient } from "react-text-gradients";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_c8xny4d",
        "template_qkp5qm9",
        {
          from_name: form.name,
          to_name: "Dorian",
          from_email: form.email,
          to_email: "cdt.dorian15@gmail.com",
          message: form.message,
        },
        "XIt7ZvTEnN1yav4Qi"
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci, je vous recontacte au plus vite !");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Erreur!");
        }
      );
  };

  return (
    <section className="w-full flex justify-center mb-20 px-4" id="contact">
      <motion.div
        className="flex flex-col w-full max-w-7xl items-center justify-start"
        initial={{ opacity: 0, y: 50 }} // Starts off-screen
        whileInView={{ opacity: 1, y: 0 }} // Fades in & moves up
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }} // Ensures animation happens only once
      >
        <div className="w-full text-left">
          <motion.p
            className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LinearGradient gradient={["to left", "#00bdd9ff ,#09c800ff"]}>
              Contact
            </LinearGradient>
          </motion.p>
        </div>

        <div className="flex w-full max-w-lg bg-[#32303a] sm:p-8 p-6 rounded-xl text-white">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Nom</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="py-3 px-4 bg-[#46454d] rounded-lg"
                placeholder="ex. John Doe"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="py-3 px-4 bg-[#46454d] rounded-lg"
                placeholder="ex. johndoe@gmail.com"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="py-3 px-4 bg-[#46454d] rounded-lg resize-none"
                placeholder="Partagez vos pensées..."
              />
            </label>

            <motion.button
              type="submit"
              className="bg-[#00bdd9ff] text-black w-full sm:w-fit py-3 px-6 rounded-lg font-bold outline-none self-center sm:self-start"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {loading ? "Envoi..." : "Envoyer"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
