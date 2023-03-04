import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface Props {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

function Modal({ open, onClose, children }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed w-screen h-screen z-10 flex flex-col ">
          <div
            className="h-full absolute w-full bg-stone-500 opacity-50"
            onClick={() => {
              console.log("clicked outside");
              onClose?.();
            }}
          ></div>
          <motion.div className="w-full h-5/6 sm:h-3/4 mt-auto flex justify-center relative">
            <motion.div
              initial={{
                clipPath: "circle(120px at 50% 226px)",
              }}
              animate={{
                clipPath: "circle(100% at 50% 226px)",
              }}
              exit={{
                clipPath: "circle(120px at 50% 226px)",
              }}
              transition={{
                clipPath: {
                  duration: 0.5,
                  type: "tween",
                  ease: "easeInOut",
                },
              }}
              className="bg-white w-full h-full absolute bottom-0 rounded-t-3xl overflow-auto"
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
