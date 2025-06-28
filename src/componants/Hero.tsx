import Image from "next/image";

export default function Hero() {

  const stats = [
    { title: "5 Years", subtitle: "Of Excellence" },
    { title: "1000+", subtitle: "Success Stories" },
    { title: "£ 2000", subtitle: "In Scholarships" },
    { title: "99%", subtitle: "Visa Success Rate" },
  ];

  return (
    <div className="w-auto px-40 ">
      <div className="flex items-center gap-1 pb-10">
        <div className="w-dvh">
          <h1 className="text-6xl font-semibold pb-3">
            Your Future Starts Here.
            <br />
            Study Abroad With Confidence!
          </h1>
          <p className="text-lg pb-5">
            With expert guidance, top university placements, and visa success,
            we help you achieve more than just a degree—we help you create a
            success story.
          </p>
          <div className="bg-blue-500 flex items-center justify-center h-12 w-4/12 rounded-2xl">
            <h1 className="text-white text-md">Be the Next Success Story </h1>
          </div>
        </div>
        <div>
          <Image src={"/website-image-1.png"} alt="" width={800} height={800} />
        </div>
      </div>

      {/* StatsBar */}
      <div className="bg-[#edf2f7] rounded-[30px] py-12 px-8 flex flex-col md:flex-row justify-between text-center shadow-sm">
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex-1 px-4 border-gray-300"
          style={{
            borderRight: index !== stats.length - 1 ? "1px solid #ccc" : "none",
          }}
        >
          <h3 className="text-2xl font-semibold text-blue-500">{item.title}</h3>
          <p className="text-sm font-medium text-gray-800 mt-1">{item.subtitle}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
