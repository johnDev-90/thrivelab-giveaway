import { useData } from "../contexts/GiveawayContext";
import { AnimatePresence, motion } from "framer-motion";

import ContactInfo from "../components/ContactInfo";
import InterestLevel from "../components/InterestLevel";
import PainArea from "../components/PainArea";
import WhyNotYet from "../components/WhyNotYet";
import Confirmation from "../components/Confirmation";

const FormContent = () => {
  const { step } = useData();

  const motionProps = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.2 },
  };

  return (
    <AnimatePresence mode="wait">
      {step === 1 && (
        <motion.div key="step1" {...motionProps}>
          <ContactInfo />
        </motion.div>
      )}

      {step === 2 && (
        <motion.div key="step2" {...motionProps}>
          <PainArea />
        </motion.div>
      )}

      {step === 3 && (
        <motion.div key="step3" {...motionProps}>
          <WhyNotYet />
        </motion.div>
      )}

      {step === 4 && (
        <motion.div key="step4" {...motionProps}>
          <InterestLevel />
        </motion.div>
      )}

      {step === 5 && (
        <motion.div key="step5" {...motionProps}>
          <Confirmation />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormContent;
