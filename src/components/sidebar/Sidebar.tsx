import GithubLogo from "@/assets/github_logo";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import OrderList from "../order-list/OrderList";
import useOrderList from "../order-list/useOrderList";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export function Sidebar({ open, onClose, onCheckout }: SidebarProps) {
  const [orderList] = useOrderList();
  const totalPrice = orderList.reduce(
    (total, item) => (total += item.count * item.price),
    0
  );
  return (
    <AnimatePresence initial={false}>
      <motion.aside
        className={`bg-stone-100 ${
          open ? "flex flex-col w-full" : "hidden"
        } sm:flex sm:flex-col fixed sm:w-60 h-screen right-0`}
        initial={{
          clipPath: "circle(10% at 50% 50%)",
        }}
        animate={{
          clipPath: "circle(100% at 50% 50%)",
        }}
        exit={{
          clipPath: "circle(10% at 50% 50%)",
        }}
        key={"" + open}
      >
        <div className="p-5 flex flex-col">
          <div className="flex justify-between sm:justify-end mt-4">
            <button onClick={onClose} className="block sm:hidden h-12 w-12">
              <XMarkIcon />
            </button>
            <a
              href="https://github.com/mfarukkoc/food-order-kiosk"
              target={"_blank"}
              className="rounded-full bg-white-400 w-8 h-8"
            >
              <GithubLogo className="h-full w-full" />
            </a>
          </div>
          <div className="flex flex-col p-1">
            <span className="font-bold text-xl mt-12">
              My
              <br />
              Order
            </span>
            <span className="text-stone-500 text-sm font-medium my-2 mb-4">
              Take Out
            </span>
          </div>
        </div>
        <OrderList />

        <div className="mt-auto ">
          <hr className="mx-3 border-t-2 border-stone-200" />
          <div className="flex flex-col items-center mb-10 mt-10">
            <span className="text-stone-500 text-lg">Total</span>
            <span className="text-3xl font-medium">
              ${totalPrice.toFixed(2)}
            </span>
            <button
              className="px-6 py-8 mt-10 font-medium bg-yellow-400 rounded-3xl"
              onClick={onCheckout}
            >
              Done
            </button>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
