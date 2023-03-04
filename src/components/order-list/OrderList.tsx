import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import OrderItem from "./item/Item";
import useOrderList from "./useOrderList";

interface Props {}

function OrderList({}: Props) {
  const [orderList] = useOrderList();
  const [scrollTop, setScrollTop] = useState(0);

  return (
    <div
      className="relative max-h-full overflow-y-auto"
      onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
    >
      <AnimatePresence>
        {orderList.map((orderItem) => (
          <OrderItem
            data={orderItem}
            key={orderItem.id}
            scrollTop={scrollTop}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default OrderList;
