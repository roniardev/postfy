import { BottomNav } from "./BottomNav";
import { Header } from "./Header";

export const LayoutRoot = ({ children }) => (
  <main className="bg-gray-100 flex flex-col min-h-screen w-full dark:bg-dark">
    <Header />
    {children}
    <BottomNav />
  </main>
);
