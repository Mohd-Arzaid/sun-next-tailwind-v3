"use client";

import { useEffect, useState, useRef } from "react";
import YouTubeFacade from "@/components/ui/youtube-facade";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { videosData } from "@/data/videosData";

const CARD_WIDTH = 424; // card width + gap — speed calculate ke liye
const PIXELS_PER_SECOND = 50;

const VideoSection = () => {
  const containerRef = useRef(null);
  const [duplicatedVideos, setDuplicatedVideos] = useState([]);
  const [start, setStart] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    // 3 baar duplicate — animate-scroll CSS -33.333% ke liye
    const duplicated = [...videosData, ...videosData, ...videosData];
    setDuplicatedVideos(duplicated);

    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
      setScrollSpeed();

      setTimeout(() => {
        setStart(true);
      }, 100);
    }
  }

  const setScrollSpeed = () => {
    if (!containerRef.current) return;

    // speed calculate — pixels/sec se duration nikalo
    const totalWidth = videosData.length * CARD_WIDTH;
    const duration = totalWidth / PIXELS_PER_SECOND;

    containerRef.current.style.setProperty(
      "--animation-duration",
      `${duration}s`
    );
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="max-w-full mx-auto px-4 py-8 md:px-12 md:pt-16 md:pb-2 bg-white overflow-hidden">
      <VideoSectionHeader />

      <VideoMarquee
        containerRef={containerRef}
        videos={duplicatedVideos}
        start={start}
        onVideoClick={handleVideoClick}
      />

      <VideoPopupModal
        video={selectedVideo}
        open={isPopupOpen}
        onClose={handleClosePopup}
      />
    </div>
  );
};

export default VideoSection;

const VideoSectionHeader = () => (
  <div className="text-3xl md:text-5xl font-bold font-playfair text-center mb-10 text-neutral-800">
    Video Showcase
  </div>
);

const VideoMarquee = ({ containerRef, videos, start, onVideoClick }) => (
  <div
    ref={containerRef}
    className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
  >
    <div
      className={`flex w-max gap-6 py-4 hover:[animation-play-state:paused] ${
        start ? "animate-scroll" : ""
      }`}
    >
      {videos.map((video, index) => {
        const isDuplicate = index >= videosData.length;

        return (
          <VideoCard
            key={`${video.id}-${index}`}
            video={video}
            isDuplicate={isDuplicate}
            onClick={() => onVideoClick(video)}
          />
        );
      })}
    </div>
  </div>
);

const VideoCard = ({ video, isDuplicate, onClick }) => (
  <div
    className="group relative overflow-hidden rounded-xl shadow-lg p-4 transition-all duration-500 bg-white w-[350px] md:w-[400px] lg:w-[450px] shrink-0 cursor-pointer"
    onClick={onClick}
  >
    <YouTubeFacade
      videoId={video.embedId}
      title={video.title}
      isDuplicate={isDuplicate}
      playOnClick={false}
    />
    <div className="pt-4 pb-2">
      <p className="text-sm md:text-base font-semibold font-geist text-gray-800 line-clamp-2">
        {video.title}
      </p>
    </div>
  </div>
);

const VideoPopupModal = ({ video, open, onClose }) => (
  <Dialog
    open={open}
    onOpenChange={(isOpen) => {
      if (!isOpen) onClose();
    }}
  >
    <DialogContent className="max-w-6xl w-[calc(100%-2rem)] border-0 bg-transparent p-0 shadow-none sm:rounded-2xl [&>button]:text-white [&>button]:bg-black/50 [&>button]:rounded-full [&>button]:p-2 [&>button]:opacity-100 [&>button]:hover:opacity-80 [&>button]:top-2 [&>button]:right-2 md:[&>button]:-top-12 md:[&>button]:right-0">
      {video && (
        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={video.title}
            className="aspect-video w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </DialogContent>
  </Dialog>
);
