import { ItemType } from "@/assets/mockData/item";
import { atom, useAtom } from "jotai";

export interface OrderItemType extends ItemType {
  count: number;
  initial: {
    left: number;
    top: number;
    height: number;
    width: number;
  };
  triggerEnteringAnimation: 0;
}

const orderListAtom = atom<OrderItemType[]>([]);

function useOrderList() {
  const [orderList, setOrderList] = useAtom(orderListAtom);

  function addOrder(
    order: Omit<OrderItemType, "triggerEnteringAnimation">,
    triggerAnimation: boolean = false
  ) {
    const newOrderList = [...orderList];
    const index = orderList.findIndex((listItem) => order.id === listItem.id);
    if (index !== -1) {
      newOrderList[index].count += order.count;
      newOrderList[index].initial = order.initial;
      newOrderList[index].triggerEnteringAnimation += triggerAnimation ? 1 : 0;
    } else {
      newOrderList.push({ ...order, triggerEnteringAnimation: 0 });
    }
    setOrderList(newOrderList);
  }

  function removeOrder(orderId: string) {
    const newOrderList = [...orderList];
    const index = orderList.findIndex((listItem) => orderId === listItem.id);
    if (index !== -1) {
      newOrderList[index].count -= 1;
      if (newOrderList[index].count === 0) {
        newOrderList.splice(index, 1);
      }
    }
    setOrderList(newOrderList);
  }

  const actions = {
    addOrder,
    removeOrder,
  };

  return [orderList, actions] as const;
}

export default useOrderList;
