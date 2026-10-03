import { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import Modal from "./Modal";

export default function PhotoGallery({ searchTerm }) {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        const first100 = data.slice(0, 100);
        setPhotos(first100);
        const uniqueAlbums = [...new Set(first100.map((p) => p.albumId))];
        setAlbums(uniqueAlbums);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = photos;
    if (searchTerm) {
      result = result.filter((photo) =>
        photo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedAlbum) {
      result = result.filter((photo) => photo.albumId.toString() === selectedAlbum);
    }
    setFilteredPhotos(result);
  }, [searchTerm, selectedAlbum, photos]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/60 dark:bg-slate-800/60 p-4 rounded-2xl backdrop-blur-md border border-slate-200 dark:border-slate-700/50 shadow-sm">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          Curated Collection
        </h2>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
            Filter by Album:
          </span>
          <select
            value={selectedAlbum}
            onChange={(e) => setSelectedAlbum(e.target.value)}
            className="w-full sm:w-auto bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition-all"
          >
            <option value="">All Albums</option>
            {albums.map((id) => (
              <option key={id} value={id}>Album No. {id}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredPhotos.length === 0 ? (
        <div className="text-center py-20 text-slate-500 dark:text-slate-400 text-lg font-medium">
          No photos found matching your criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} onView={() => setSelectedPhoto(photo)} />
          ))}
        </div>
      )}

      {selectedPhoto && (
        <Modal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </div>
  );
}