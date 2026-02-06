import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion, AnimatePresence } from "motion/react";
import { Play, X } from "lucide-react";

/* ================= HELPERS ================= */

// YouTube URL parser (semua format)
const getYoutubeEmbed = (url: string) => {
  const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&#]+)/;
  const match = url.match(regExp);
  const id = match ? match[1] : "";
  return `https://www.youtube.com/embed/${id}?autoplay=1`;
};

const isYoutube = (url: string) =>
  url.includes("youtube.com") || url.includes("youtu.be");

/* ================= DATA ================= */

const categories = [
  { id: "all", label: "All Work" },
  { id: "photo", label: "Photography" },
  { id: "video", label: "Videography" },
  { id: "edit", label: "Editing" },
  { id: "sound", label: "Sound Engineering" },
  { id: "live", label: "Live Streaming" },
];

const portfolioItems = [
  {
    id: 1,
    type: "photo",
    src: "https://res.cloudinary.com/deyitg53d/image/upload/v1770362244/1-378_nxle3h.jpg",
    title: "Graduation UNAI 81",
  },
  {
    id: 2,
    type: "photo",
    src: "https://res.cloudinary.com/deyitg53d/image/upload/v1770363240/bem-189_suhfqr.jpg",
    title: "My Friends",
  },
  {
    id: 6,
    type: "video",
    src: "https://youtu.be/_9p0S3rBjAE",
    thumbnail: "https://img.youtube.com/vi/_9p0S3rBjAE/hqdefault.jpg",
    title: "Video Competition Winner",
  },
  {
    id: 8,
    type: "edit",
    src: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80&w=1000",
    title: "Color Grading Breakdown",
  },
  {
    id: 10,
    type: "sound",
    src: "https://www.youtube.com/watch?v=sRiQsP51GCk",
    thumbnail: "https://img.youtube.com/vi/sRiQsP51GCk/hqdefault.jpg",
    title: "Studio Session",
  },
  {
    id: 11,
    type: "live",
    src: "https://www.youtube.com/watch?v=f6eHBLIsxDo",
    thumbnail: "https://img.youtube.com/vi/f6eHBLIsxDo/hqdefault.jpg",
    title: "Live Streaming Event",
  },
];

/* ================= COMPONENT ================= */

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.type === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight uppercase">
            Selected Works
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-sm uppercase pb-2 border-b-2 ${
                  activeCategory === cat.id
                    ? "border-black text-black"
                    : "border-transparent text-neutral-400"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer overflow-hidden"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.thumbnail || item.src}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  {item.type !== "photo" && (
                    <Play className="text-white w-12 h-12" />
                  )}
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <button className="absolute top-6 right-6 text-white">
              <X size={32} />
            </button>

            <motion.div
              className="max-w-5xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* PHOTO */}
              {selectedItem.type === "photo" && (
                <img
                  src={selectedItem.src}
                  className="w-full max-h-[80vh] object-contain"
                />
              )}

              {/* ALL YOUTUBE VIDEO TYPES */}
              {selectedItem.type !== "photo" && isYoutube(selectedItem.src) && (
                <iframe
                  className="w-full aspect-video rounded-lg"
                  src={getYoutubeEmbed(selectedItem.src)}
                  title={selectedItem.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}

              <h3 className="text-white mt-4 text-xl">{selectedItem.title}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
 