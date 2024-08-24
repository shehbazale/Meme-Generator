// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// // This is now an async function that fetches memes
// const Dashboard = async () => {
//   const res = await fetch("https://api.imgflip.com/get_memes");
//   const data = await res.json();
//   const memes = data.data.memes;
//   console.log(memes);

//   return (
//     <div className="container mx-auto p-4 px-40">
//       <h1 className="text-3xl font-bold mb-4 text-center">Memes Generator </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
//         {memes.map((meme: any) => (
//           <Link href={`detail/${meme.id}`} key={meme.id}>
//             <div className="meme-item w-36 h-36">
//               <Image
//                 src={meme.url}
//                 alt={meme.name}
//                 width={100}
//                 height={100}
//                 className=" object-contain"
//               />
//               {/* <p className="text-center mt-2">{meme.name}</p> */}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import Image from "next/image";
import Link from "next/link";
import React from "react";

// This is now an async function that fetches memes
const Dashboard = async () => {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const data = await res.json();
  const memes = data.data.memes;
  console.log(memes);

  return (
    <div className="container mx-auto p-4 px-40 py-12 ">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Generate Your Memes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mx-auto">
        {memes.map((meme: any) => (
          <Link href={`detail/${meme.id}`} key={meme.id}>
            <div className="relative w-56 h-56 overflow-hidden rounded-lg border border-gray-300">
              <Image
                src={meme.url}
                alt={meme.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
