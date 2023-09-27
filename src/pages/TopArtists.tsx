import { useState, useEffect } from "react";
import { getTopArtists } from "../spotify";
import { catchErrors } from "../utils";
import { ArtistsGrid, SectionWrapper, TimeRangeButtons } from "../components";
import { GlobalStyle } from "../styles";

const TopArtists = () => {
  const [topArtists, setTopArtists] = useState<any>(null);
  const [activeRange, setActiveRange] = useState<string>("short");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTopArtists(`${activeRange}_term`);
      setTopArtists(data);
    };

    catchErrors(fetchData());
  }, [activeRange]);

  return (
    <main>
      <GlobalStyle />
      <SectionWrapper title="Top Artists" breadcrumb={true}>
        <TimeRangeButtons
          activeRange={activeRange}
          setActiveRange={setActiveRange}
        />

        {topArtists && topArtists.items && (
          <ArtistsGrid artists={topArtists.items} />
        )}
      </SectionWrapper>
    </main>
  );
};

export default TopArtists;
