import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const headerConst = [
    { id: "01", title: "About Us", url: "" },
    { id: "02", title: "What We Do", url: "" },
    { id: "03", title: "Testimonials", url: "" },
  ];
  return (
    <div className="w-full px-20 pt-3 pb-3 bg-white">
      <nav className="flex justify-between items-center ">
        <div>
          <Image src="/Elevate.png" alt="Logo" width={150} height={200}></Image>
        </div>

        <ul className="hidden h-full gap-12 lg:flex">
          {headerConst.map((item) => (
            <li key={item.id} className="relative group text-lg items-center ">
              <Link href={item.url} className=" flex"> 
              
              {item.title}
              
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <button>Contact Us</button>
        </div>
      </nav>
    </div>
  );
}
