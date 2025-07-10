import React, { useState, useEffect } from "react";
import { MediaLocalService, LocalMediaItem } from "./MediaLocalService";
import "./Media.css";

const Media = () => {
  const [mediaItems, setMediaItems] = useState<LocalMediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<LocalMediaItem | null>(null);

  useEffect(() => {
    loadMediaItems();
  }, []);

  const loadMediaItems = async () => {
    setLoading(true);
    try {
      const items = await MediaLocalService.getMediaItems();
      setMediaItems(items);
    } catch (error) {
      console.error("Error loading media:", error);
    } finally {
      setLoading(false);
    }
  };

  // Séparer les photos et vidéos
  const photos = mediaItems?.filter(item => item.imagePath && !item.videoPath) || [];
  const videos = mediaItems?.filter(item => item.videoPath) || [];

  const handleItemClick = (item: LocalMediaItem) => {
    // Ouvrir la modale pour toutes les images et vidéos
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  if (loading) {
    return (
      <section className="media section-padding">
        <div className="container">
          <div className="media__loading">
            <div className="media__spinner"></div>
            <p>Loading media content...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="media section-padding">
      <div className="container">
        <h2 className="section-title text-center">Our Work in Action</h2>
        {/* <p className="media__intro text-center">
          See our professional pest control team at work across Dasmarinas, Cavite and Metro Manila
        </p> */}

        {/* Photos Section */}
        {photos.length > 0 && (
          <div className="media__section">
            <h3 className="media__section-title">Photos</h3>
            <div className="media__photo-grid">
              {photos.map((item) => (
                <div
                  key={item.id}
                  className="media__photo-item"
                  onClick={() => handleItemClick(item)}
                >
                  <img
                    src={item.imagePath}
                    alt={`${item.id}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Section */}
        {videos.length > 0 && (
          <div className="media__section">
            <h3 className="media__section-title">Videos</h3>
            <div className="media__video-grid">
              {videos.map((item) => (
                <div
                  key={item.id}
                  className="media__video-item"
                  onClick={() => handleItemClick(item)}
                >
                  <video className="media__video-thumbnail" muted>
                    <source src={item.videoPath} type="video/mp4" />
                  </video>
                  <div className="media__video-overlay">
                    <div className="media__play-button">▶</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal pour les images et vidéos */}
        {selectedItem && (
          <div className="media__modal" onClick={closeModal}>
            <div
              className="media__modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="media__modal-close" onClick={closeModal}>
                ✕
              </button>
              {selectedItem.videoPath ? (
                <div className="media__modal-video">
                  <video
                    controls
                    autoPlay
                    loop
                    muted
                    className="media__video"
                  >
                    <source src={selectedItem.videoPath} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </div>
              ) : selectedItem.imagePath ? (
                <div className="media__modal-image">
                  <img
                    src={selectedItem.imagePath}
                    alt={`${selectedItem.id}`}
                    className="media__modal-img"
                  />
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Media;