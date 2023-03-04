import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useOrderList from "../order-list/useOrderList";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

interface CheckoutModalProps {
  open?: boolean;
  onClose?: () => void;
}

function CheckoutModal({ open, onClose }: CheckoutModalProps) {
  const [orderList] = useOrderList();

  const totalPrice = orderList.reduce(
    (total, item) => (total += item.count * item.price),
    0
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            clipPath: "circle(1% at 50% 50%)",
          }}
          animate={{
            clipPath: "circle(100% at 50% 50%)",
          }}
          exit={{
            clipPath: "circle(1% at 50% 50%)",
          }}
          transition={{ duration: 0.5 }}
          className="fixed flex flex-col top-0 left-0 w-screen h-screen px-6 py-8 bg-green-600"
        >
          <button
            className="text-white flex flex-row items-center gap-2"
            onClick={onClose}
          >
            <ChevronLeftIcon className="h-8 w-8" />
            <span className="text-lg font-semibold">Go Back</span>
          </button>
          <h1 className="text-3xl text-white justify-center my-auto mx-auto text-center">
            Checkout
            <br />
            Work In Progress
          </h1>

          <div className="mt-auto ">
            <div className="flex flex-row content-between justify-between w-full items-center mb-10 mt-10">
              <div className="flex flex-col align-middle justify-center">
                <span className="text-stone-200 text-lg">Total</span>
                <span className="text-3xl text-white font-medium">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button className="px-6 py-8  font-medium bg-yellow-400 rounded-3xl">
                Checkout
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CheckoutModal;
