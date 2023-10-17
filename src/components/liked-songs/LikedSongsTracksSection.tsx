import { useContext, useState } from "react";
import LikedSongsTracksCard from "./LikedSongsTracksCard";
// import { Link } from "react-router-dom";
import { TrackWithAudioFeatures } from "../../pages/LikedSongs";
import LikedSongsExpandedTracksCard from "./LikedSongsExpandedTracksCard";
import { CartContext } from "../recommendation/Recommendation";

interface LikedSongsTracksSectionProps {
  tracks: TrackWithAudioFeatures[] | null;
}

function LikedSongsTracksSection({ tracks }: LikedSongsTracksSectionProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (track: TrackWithAudioFeatures) => {
    addToCart(track);
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="bg-slate-950 bg-opacity-80">
        <section className="bg-white bg-opacity-20 w-full h-auto pb-2">
          <div className="flex flex-col justify-center items-center pl-4 pr-4 pt-4 pb-2">
            <h1 className="text-white  text-center text-8xl pt-4 pl-2 mb-2 ml-4">
              💚 💚 💚
            </h1>
            <button
              className="bg-slate-900 text-white bg-opacity-60 shadow-xl w-16 h-6 rounded-lg "
              onClick={handleClick}
            >
              Click
            </button>
          </div>
          <section className="w-full h-auto pb-2">
            {!isExpanded ? (
              <div className="grid grid-cols-1 ml-5">
                {tracks?.map((track, index) => (
                  // <Link to={`/track/${track.id}`} key={index}>
                  <LikedSongsTracksCard
                    index={index}
                    id={track.id}
                    image={track.album.images}
                    name={track.name}
                    duration={track.duration_ms}
                    order={index + 1}
                    artists={track.artists
                      .map((artist) => artist.name)
                      .join(", ")}
                    handleAddToCart={() => handleAddToCart(track)}
                  />
                  // </Link>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 ml-5">
                {tracks?.map((track, index) => (
                  // <Link to={`/track/${track.id}`} key={index}>
                  <LikedSongsExpandedTracksCard
                    imageUrl={track.album.images[0].url}
                    name={track.name}
                    duration={track.duration_ms}
                    order={index + 1}
                    artists={track.artists
                      .map((artist) => artist.name)
                      .join(", ")}
                    audioFeatures={track.audio_features}
                    popularity={track.popularity}
                    id={track.id}
                    handleAddToCart={() => handleAddToCart(track)}
                  />
                  // </Link>
                ))}
              </div>
            )}
          </section>
        </section>
      </div>
    </>
  );
}

export default LikedSongsTracksSection;
