const Hero3 = () => {
    return (
      <section className="relative flex items-center justify-center text-center text-white h-screen">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
          />
        </div>
        <div className="video-content space-y-2 z-10 text-center px-4 sm:px-8">
          <h1 className="font-light text-4xl sm:text-6xl md:text-7xl">Full Hero Video</h1>
          <h3 className="font-light text-xl sm:text-3xl">With TailwindCSS</h3>
        </div>
        <style>{`
          .video-docker video {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
  
          .video-docker::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 1;
          }
        `}</style>
      </section>
    );
  };
  
  export default Hero3;
  