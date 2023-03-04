import { ItemType } from "@/assets/mockData/item";
import React, { useEffect, useRef, useState } from "react";
import Counter from "../counter/Counter";
import Modal from "../modal/Modal";
import useOrderList from "../order-list/useOrderList";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { atom, useAtom } from "jotai";
interface Props {
  item?: ItemType;
  open: boolean;
  onClose: () => void;
}

export const modalImageRectAtom = atom({
  top: 0,
  left: 0,
  width: 0,
  height: 0,
});

function OrderModal({ item, onClose, open }: Props) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [modalImageRect, setModalImageRect] = useAtom(modalImageRectAtom);
  const [_, { addOrder }] = useOrderList();
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
    if (open && imageRef.current) {
      const boundingClientRect = imageRef.current.getBoundingClientRect();
      setModalImageRect({
        top: boundingClientRect.top,
        left: boundingClientRect.left,
        width: boundingClientRect.width,
        height: boundingClientRect.height,
      });
    }
  }, [open, setModalImageRect]);

  return (
    <Modal open={open} onClose={onClose}>
      <button
        onClick={onClose}
        className="mx-auto flex align-middle items-center h-16 w-20 p-6 bg-stone-100 rounded-b-3xl"
      >
        <XMarkIcon />
      </button>
      {item ? (
        <>
          <div className="w-64 mx-auto mt-12">
            <div className="h-[200px] w-[200px] overflow-hidden flex mx-auto">
              <img
                src={item.img}
                alt={item.name}
                className={"overflow-hidden max-h-full max-w-full m-auto"}
                ref={imageRef}
              />
            </div>
            <div className="w-fit m-auto flex flex-col items-center">
              <span className="text-3xl mt-6 font-semibold">{item.name}</span>
              <span className="text-3xl  mt-2 mb-4 text-yellow-400">
                ${item.price}
              </span>
              <Counter
                count={count}
                onChange={(count) => setCount(count)}
                disableDecrement={count === 1}
              />
            </div>
          </div>
          <button
            onClick={() => {
              let image = {
                height: 0,
                width: 0,
                top: 0,
                left: 0,
              };
              if (imageRef.current) {
                const boundingClient = imageRef.current.getBoundingClientRect();
                image.top = boundingClient.top;
                image.left = boundingClient.left;
                image.width = boundingClient.width;
                image.height = boundingClient.height;
              }
              addOrder({ ...item, initial: image, count: count }, true);
              onClose();
            }}
            className="px-6 py-8 mt-10 font-medium bg-yellow-400 rounded-3xl mx-auto block"
          >
            Add
          </button>
        </>
      ) : (
        <>Loading...</>
      )}
    </Modal>
  );
}

export default OrderModal;
