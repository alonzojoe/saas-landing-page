import { motion, type Variants } from "framer-motion";
import { PLANS_CONTENT } from "../constants";

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
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

const PricingPlans = () => {
  return (
    <section id="pricing">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 border-t border-neutral-800"
        >
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-500 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4">{PLANS_CONTENT.sectionDescription}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
