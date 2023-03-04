import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import useOrderList, { OrderItemType } from "../useOrderList";
import Counter from "@/components/counter/Counter";
import Portal from "@/components/portal/Portal";
interface Props {
  data: OrderItemType;
  scrollTop: number;
}

function OrderItem({ data, scrollTop }: Props) {
  const [ref, props] = useMeasure();
  const [_, { removeOrder, addOrder }] = useOrderList();

  const addToBasketAnimation: HTMLMotionProps<"div"> = {
    initial: {
      left: `${data.initial.left}px`,
      top: `${data.initial.top}px`,
      height: `${data.initial.height}px`,
      width: `${data.initial.width}px`,
    },
    animate: {
      left: props.left,
      top: props.top - scrollTop,
      height: props.height,
      width: props.width,
      display: "none",
    },
    transition: {
      duration: 0.5,
      delay: 0.5,
      display: {
        delay: 1,
      },
    },
  };

  const imageAnimation: HTMLMotionProps<"img"> = {
    initial: { visibility: "hidden" },
    animate: { visibility: "visible" },
    transition: {
      delay: 1,
    },
  };

  return (
    <>
      <hr className="mx-3 border-t-2 border-stone-200" />
      <motion.div
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative flex flex-col items-center my-3"
        key={data.id}
      >
        <div className="h-[100px] w-[100px] overflow-hidden flex" ref={ref}>
          <motion.img
            src={data.img}
            alt={data.name}
            className={"overflow-hidden max-h-full max-w-full m-auto"}
            {...imageAnimation}
          />
        </div>
        <Portal>
          <motion.div
            key={data.id + "count" + data.triggerEnteringAnimation}
            className="fixed z-20"
            {...addToBasketAnimation}
          >
            <div className="h-full w-full overflow-hidden flex">
              <img
                src={data.img}
                alt={data.name}
                className={`overflow-hidden max-h-full max-w-full m-auto `}
              />
            </div>
          </motion.div>
        </Portal>

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            position: {
              delay: 1,
            },
          }}
        >
          <div>{data.name}</div>
          <div className="font-light">${data.price.toFixed(2)}</div>
          <Counter
            count={data.count}
            onChange={(count) => {
              if (count > data.count) {
                addOrder({ ...data, count: 1 });
              } else {
                removeOrder(data.id);
              }
            }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default OrderItem;
