import { Sidebar } from "./../components/sidebar/Sidebar";
import Card from "../components/card/Card";
import McdLogo from "@/assets/mcd_logo";
import Head from "next/head";
import { useState } from "react";
import {
  ItemType,
  mockCategoryData,
  mockItemData,
} from "@/assets/mockData/item";
import OrderModal from "@/components/order-modal/OrderModal";
import { Bars3Icon } from "@heroicons/react/24/solid";
import CheckoutModal from "@/components/checkout-modal/CheckoutModal";

export default function Home() {
  const [orderModal, setOrderModal] = useState<{
    open: boolean;
    item?: ItemType;
  }>({
    open: false,
    item: undefined,
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Food Order Kiosk</title>
        <meta name="description" content="Food order kiosk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex text-stone-800 min-h-screen font-primary">
        <main className="bg-white flex-1 sm:mr-60 px-10 py-5">
          <div className="max-w-4xl mx-auto">
            <section className="flex flex-col">
              <div className="flex flex-row justify-between">
                <McdLogo className="h-12 w-fit" />
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="block sm:hidden h-12 w-12"
                >
                  <Bars3Icon />
                </button>
              </div>
              <span className="text-5xl mt-12">
                <b className="font-bold text-4xl">Hey,</b>
                <br />
                what&apos;s up?
              </span>
            </section>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-5 rounded-2xl place-items-center w-fit m-auto">
              {mockCategoryData.map((category) => (
                <Card
                  key={category.name}
                  onClick={() => alert("Work In Progress")}
                >
                  <div className="h-24 w-24 bg-yellow-400 rounded-xl flex items-center text-center text-white">
                    Category <br />
                    Work In Progress
                  </div>
                  <Card.Info>{category.name}</Card.Info>
                </Card>
              ))}
            </div>
            <div className="mt-12">
              <span className="font-bold text-4xl">Popular</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-10 gap-5 rounded-2xl place-items-center w-fit m-auto">
                {mockItemData.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      onClick={() => setOrderModal({ open: true, item: item })}
                    >
                      <Card.Image src={item.img} alt={item.name} />
                      <Card.Info>{item.name}</Card.Info>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
        <Sidebar
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onCheckout={() => setIsPaymentModalVisible(true)}
        />
        <OrderModal
          item={orderModal.item}
          open={orderModal.open}
          onClose={() => setOrderModal({ ...orderModal, open: false })}
        />
      </div>
      <CheckoutModal
        open={isPaymentModalVisible}
        onClose={() => setIsPaymentModalVisible(false)}
      />
    </>
  );
}
