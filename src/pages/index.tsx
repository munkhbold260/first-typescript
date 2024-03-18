import { Inter } from "next/font/google";

export default function Home() {
  let sideMenus = [
    {
      title: "TypeScript for JavaScript Programmers",
      buttonText: "Get Started",
      // contents: [{ name: "typescript", price: 222, sale: 10 }],
    },
    {
      title: "TypeScript for JavaScript Programmers",
      buttonText: "products",
      // contents: [{ name: "laptop", price: 333, sale: 20 }],
    },
    {
      title: "TypeScript for JavaScript Programmers",
      buttonText: "Get Started",
      // contents: [{ name: "macbook", price: 444, sale: 30 }],
    },
  ];

  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-between p-24 "
      }
    >
      {sideMenus.map((e) => {
        return <div>{e.title}</div>;
      })}
      <p>sss</p>
    </main>
  );
}
