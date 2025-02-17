import { TwitchEmbed } from "react-twitch-embed";
import React, { useRef } from "react";

export default function Twitch() {
  const embed = useRef(); //ref instead of state to avoid rerenders

  const handleReady = (e) => {
    embed.current = e;
  };
  return (
    <div
      id="livestream"
      className="mt-4 text-white"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
    >
      <h1
        className="text-3xl font-bold text-center"
        style={{ margin: "24px", marginTop: "40px" }}
      >
        Livestream
      </h1>
      <br />
      <div className="flex justify-center">
        <TwitchEmbed
          channel="enesy_"
          autoplay
          muted
          withChat
          darkMode={true}
          hideControls
          onVideoReady={handleReady}
        />
      </div>
    </div>
  );
}
