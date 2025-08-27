import { motion, type Variants } from "framer-motion";

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
    <section id="pricing" className="bg-white">
      Pricing
    </section>
  );
};

export default PricingPlans;
