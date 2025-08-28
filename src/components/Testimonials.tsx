import { motion, type Variants } from "framer-motion";
const Testimonials = () => {
  const testimonialVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="testimonials">
      <div className="bg-white max-w-7xl mx-auto">Testimonials</div>
    </section>
  );
};

export default Testimonials;
