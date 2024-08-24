// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";

// interface Meme {
//   id: string;
//   name: string;
//   url: string;
// }

// interface Params {
//   id: string;
// }

// interface DetailPageProps {
//   params: Params;
// }

// const fetchMeme = async (id: string): Promise<Meme | undefined> => {
//   const result = await fetch("https://api.imgflip.com/get_memes");
//   const data = await result.json();
//   return data.data.memes.find((meme: Meme) => meme.id === id);
// };

// const DetailPage: React.FC<DetailPageProps> = ({ params }) => {
//   const [meme, setMeme] = useState<Meme | undefined>(undefined);
//   const [firstText, setFirstText] = useState<string>("");
//   const [secondText, setSecondtext] = useState<string>("");
//   const [generatedMemeUrl, setGeneratedMemeUrl] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     const loadMeme = async () => {
//       const memeData = await fetchMeme(params.id);
//       setMeme(memeData);
//     };
//     loadMeme();
//   }, [params.id]);

//   const generateMeme = async () => {
//     if (!meme) return;
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.imgflip.com/caption_image?template_id=${meme.id}&username=shehbaz&password=Baltoro@1122&text0=${firstText}&text1=${secondText}`,
//         {
//           method: "POST",
//         }
//       );

//       const data = await response.json();

//       if (data.success) {
//         setGeneratedMemeUrl(data.data.url);
//       } else {
//         console.error("Failed to generate meme:", data.error_message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };
//   const downloadMeme = async () => {
//     if (!generatedMemeUrl) return;
//     const response = await fetch(generatedMemeUrl);
//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);

//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `${meme?.name || "meme"}.jpg`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);
//   };
//   if (!meme) return <div>Loading...</div>;

//   return (
//     <div className="relative">
//       {/* Loader */}
//       {loading && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
//           <div className="w-16 h-16 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
//         </div>
//       )}
//       <div className="container mx-auto p-4 flex  justify-evenly  h-full my-auto ">
//         <div className="border rounded-md px-12 py-6 flex flex-col justify-center space-y-3 shadow-lg">
//           <h1 className="text-2xl font-bold">{meme.name}</h1>
//           <Image
//             src={meme.url}
//             alt={meme.name}
//             width={300}
//             height={300}
//             className="border rounded-md"
//           />

//           <div className="w-full max-w-xs  bg-white rounded-lg font-mono">
//             <label
//               className="block text-gray-700 text-base font-bold mb-2"
//               htmlFor="text1"
//             >
//               Text 1
//             </label>
//             <input
//               className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
//               placeholder="Enter text 1"
//               type="text"
//               id="text1"
//               value={firstText}
//               onChange={(e) => setFirstText(e.target.value)}
//             />
//           </div>

//           <div className="w-full max-w-xs bg-white rounded-lg font-mono mt-4">
//             <label
//               className="block text-gray-700 text-base   font-bold mb-2"
//               htmlFor="text2"
//             >
//               Text 2
//             </label>
//             <input
//               className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
//               placeholder="Enter text 2"
//               type="text"
//               id="text2"
//               value={secondText}
//               onChange={(e) => setSecondtext(e.target.value)}
//             />
//           </div>

//           <button
//             className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg animate-pulse mt-4"
//             onClick={generateMeme}
//           >
//             Generate
//           </button>
//         </div>
//         {generatedMemeUrl && (
//           <div className="boder px-12 py-6 rounded-md shadow-lg flex flex-col space-y-4">
//             <h2 className="text-2xl font-bold">Generated Meme</h2>
//             <Image
//               src={generatedMemeUrl}
//               alt="Generated Meme"
//               width={300}
//               height={300}
//               className="border rounded-md"
//             />
//             {/*download button  */}

//             <button
//               className="cursor-pointer flex justify-between bg-blue-600 px-3 py-2 rounded-lg text-white tracking-wider shadow-xl hover:bg-blue-700 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px] text-lg"
//               onClick={downloadMeme}
//             >
//               Download
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="2"
//                 stroke="currentColor"
//                 className="w-5 h-5 animate-bounce"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DetailPage;
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Meme {
  id: string;
  name: string;
  url: string;
}

interface Params {
  id: string;
}

interface DetailPageProps {
  params: Params;
}

const fetchMeme = async (id: string): Promise<Meme | undefined> => {
  const result = await fetch("https://api.imgflip.com/get_memes");
  const data = await result.json();
  return data.data.memes.find((meme: Meme) => meme.id === id);
};

const DetailPage: React.FC<DetailPageProps> = ({ params }) => {
  const [meme, setMeme] = useState<Meme | undefined>(undefined);
  const [firstText, setFirstText] = useState<string>("");
  const [secondText, setSecondtext] = useState<string>("");
  const [generatedMemeUrl, setGeneratedMemeUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadMeme = async () => {
      const memeData = await fetchMeme(params.id);
      setMeme(memeData);
    };
    loadMeme();
  }, [params.id]);

  const generateMeme = async () => {
    if (!meme) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.imgflip.com/caption_image?template_id=${meme.id}&username=shehbaz&password=Baltoro@1122&text0=${firstText}&text1=${secondText}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (data.success) {
        setGeneratedMemeUrl(data.data.url);
      } else {
        console.error("Failed to generate meme:", data.error_message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadMeme = async () => {
    if (!generatedMemeUrl) return;
    const response = await fetch(generatedMemeUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${meme?.name || "meme"}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  if (!meme) return <div>Loading...</div>;

  return (
    <div className="relative">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="w-16 h-16 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
        </div>
      )}
      <div className="container mx-auto p-4 flex justify-evenly h-full my-auto">
        <div className="border rounded-md px-12 py-6 flex flex-col justify-center space-y-3 shadow-lg">
          <h1 className="text-2xl font-bold">{meme.name}</h1>
          <Image
            src={meme.url}
            alt={meme.name}
            width={300}
            height={300}
            className="border rounded-md"
          />
          <div className="w-full max-w-xs bg-white rounded-lg font-mono">
            <label
              className="block text-gray-700 text-base font-bold mb-2"
              htmlFor="text1"
            >
              Text 1
            </label>
            <input
              className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
              placeholder="Enter text 1"
              type="text"
              id="text1"
              value={firstText}
              onChange={(e) => setFirstText(e.target.value)}
            />
          </div>
          <div className="w-full max-w-xs bg-white rounded-lg font-mono mt-4">
            <label
              className="block text-gray-700 text-base font-bold mb-2"
              htmlFor="text2"
            >
              Text 2
            </label>
            <input
              className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
              placeholder="Enter text 2"
              type="text"
              id="text2"
              value={secondText}
              onChange={(e) => setSecondtext(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg animate-pulse mt-4"
            onClick={generateMeme}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
        {generatedMemeUrl && (
          <div className="border px-12 py-6 rounded-md shadow-lg flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">Generated Meme</h2>
            <Image
              src={generatedMemeUrl}
              alt="Generated Meme"
              width={300}
              height={300}
              className="border rounded-md"
            />
            <button
              className="cursor-pointer flex justify-between bg-blue-600 px-3 py-2 rounded-lg text-white tracking-wider shadow-xl hover:bg-blue-700 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px] text-lg"
              onClick={downloadMeme}
            >
              Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
