"use client";

import { useState } from "react";

export default function Generator() {
  const [activeTab, setActiveTab] = useState("interiors");
  const [preview, setPreview] = useState<string | null>(null);

  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<string[]>([]);

  const [credits, setCredits] = useState(50);
  const [view, setView] = useState("preview");
  const [history, setHistory] = useState<any[]>([]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // TYPES
  const typeOptions: any = {
    interiors: ["Living", "Bedroom", "Kitchen", "Bathroom", "Dining"],
    exteriors: ["Front", "Side", "Back"],
    gardens: ["Backyard", "Patio", "Terrace", "Front Yard"],
  };

  // STYLES
  const styleOptions: any = {
    interiors: [
      { name: "Modern", img: "/options/interior-modern.jpg" },
      { name: "Luxury", img: "/options/interior-luxury.jpg" },
      { name: "Minimal", img: "/options/interior-minimal.jpg" },
      { name: "Classic", img: "/options/interior-classic.jpg" },
    ],
    exteriors: [
      { name: "Villa", img: "/options/ext-villa.jpg" },
      { name: "Cabin", img: "/options/ext-cabin.jpg" },
      { name: "Modern", img: "/options/ext-modern.jpg" },
    ],
    gardens: [
      { name: "Poolside", img: "/options/garden-pool.jpg" },
      { name: "Japanese", img: "/options/garden-japan.jpg" },
      { name: "Luxury", img: "/options/garden-luxury.jpg" },
    ],
  };

  // SMART IMAGE LOADER
  const loadAvailableImages = async () => {
    if (!selectedType || !selectedStyle) return [];

    const tab = activeTab;
    const type = selectedType.toLowerCase().replace(/\s/g, "-");
    const style = selectedStyle.toLowerCase().replace(/\s/g, "-");

    const images: string[] = [];

    for (let i = 1; i <= 6; i++) {
      const path = `/results/${tab}/${type}-${style}-${i}.jpg`;

      const exists = await new Promise<boolean>((resolve) => {
        const img = new Image();
        img.src = path;
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
      });

      if (exists) images.push(path);
      else break;
    }

    return images;
  };

  const handleFile = (file: File | undefined) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  // GENERATE
  const handleGenerate = async () => {
    if (!preview || !selectedType || !selectedStyle || credits <= 0) return;

    setCredits((prev) => prev - 1);
    setLoading(true);
    setProgress(0);
    setResults([]);

    let fake = 0;

    const interval = setInterval(async () => {
      fake += 10;
      setProgress(fake);

      if (fake >= 100) {
        clearInterval(interval);

        const res = await loadAvailableImages();
        setResults(res);
        setLoading(false);

        setHistory((prev) => [
          {
            type: selectedType,
            style: selectedStyle,
            results: res,
          },
          ...prev,
        ]);
      }
    }, 200);
  };

  // DOWNLOAD
  const downloadImage = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "design.jpg";
    link.click();
  };

  return (
    <div
      id="generator"
      className="px-6 lg:px-12 xl:px-20 max-w-[1600px] mx-auto"
    >
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center mb-2">
        AI Interior Design Generator
      </h1>

      <p className="text-center mb-4">
        Credits: <span className="text-red-500 font-bold">{credits}</span>
      </p>

      {/* TABS */}
      <div className="flex border rounded-xl overflow-hidden mb-6">
        {["interiors", "exteriors", "gardens"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSelectedType(null);
              setSelectedStyle(null);
              setResults([]);
            }}
            className={`flex-1 py-3 ${
              activeTab === tab ? "bg-red-500 text-white" : "bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT PANEL */}
        <div className="space-y-6">
          {/* UPLOAD */}
          <div
            className="border-2 border-dashed p-10 text-center rounded-xl cursor-pointer hover:border-red-400"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            <input
              id="fileInput"
              type="file"
              hidden
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
            {!preview ? (
              <p>Click or Drag Image</p>
            ) : (
              <img src={preview} className="mx-auto max-h-40 rounded" />
            )}
          </div>

          {/* TYPE */}
          <div>
            <h2 className="font-semibold mb-2">
              {activeTab === "interiors"
                ? "Room Type"
                : activeTab === "exteriors"
                  ? "House Angle"
                  : "Garden Type"}
            </h2>

            <div className="grid grid-cols-3 gap-2">
              {typeOptions[activeTab].map((item: string) => (
                <button
                  key={item}
                  onClick={() => setSelectedType(item)}
                  className={`border p-2 rounded-lg ${
                    selectedType === item
                      ? "bg-red-500 text-white"
                      : "hover:bg-red-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* STYLE */}
          <div>
            <h2 className="font-semibold mb-2">Design Style</h2>

            <div className="grid grid-cols-2 gap-4">
              {styleOptions[activeTab].map((item: any) => (
                <div
                  key={item.name}
                  onClick={() => setSelectedStyle(item.name)}
                  className={`relative cursor-pointer rounded-2xl overflow-hidden transition ${
                    selectedStyle === item.name
                      ? "ring-2 ring-red-500 scale-[1.02]"
                      : "hover:scale-[1.03]"
                  }`}
                >
                  <img src={item.img} className="h-44 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-white font-semibold text-lg">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* GENERATE BUTTON */}
          <button
            onClick={handleGenerate}
            disabled={
              !preview || !selectedType || !selectedStyle || credits === 0
            }
            className={`w-full py-3 rounded-xl font-semibold ${
              preview && selectedType && selectedStyle && credits > 0
                ? "bg-gradient-to-r from-red-400 to-red-500 text-white hover:scale-[1.02]"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            ✨ Generate Design (1 Credit)
          </button>

          {/* PROGRESS */}
          {loading && (
            <div>
              <p>Generating... {progress}%</p>
              <div className="bg-gray-200 h-3 rounded">
                <div
                  className="bg-red-500 h-3 rounded"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div>
          {/* TOGGLE */}
          <div className="flex mb-4 border rounded-xl overflow-hidden">
            <button
              onClick={() => setView("preview")}
              className={`flex-1 py-2 ${
                view === "preview" ? "bg-red-500 text-white" : ""
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setView("history")}
              className={`flex-1 py-2 ${
                view === "history" ? "bg-red-500 text-white" : ""
              }`}
            >
              History
            </button>
          </div>

          {/* PREVIEW */}
          {view === "preview" && (
            <div className="grid grid-cols-2 gap-5">
              {results.map((img, i) => (
                <div key={i} className="relative group">
                  <img
                    src={img}
                    onClick={() => setSelectedImage(img)}
                    className="rounded-xl shadow hover:shadow-xl cursor-pointer"
                  />

                  {/* DOWNLOAD */}
                  <button
                    onClick={() => downloadImage(img)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100"
                  >
                    ⬇️
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* HISTORY */}
          {view === "history" && (
            <div className="space-y-4">
              {history.map((item, i) => (
                <div key={i} className="border p-2 rounded">
                  <p className="text-sm mb-2">
                    {item.type} - {item.style}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {item.results.map((img: string, idx: number) => (
                      <img key={idx} src={img} className="rounded" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
