import { ContentSection } from "@/components/sections";
import ListItems from "../ListItems";

const FloodDamagePrediction = () => {
  return (
    <>
      <ContentSection title="Why This Project?">
        <p className="paragraph"></p>
        <p className="paragraph"></p>
      </ContentSection>

      <ContentSection title="Plan Of Attack">
        <p className="paragraph">
          Here's the idea: lidar satellite data is
          incredibly useful for finding natural patterns of
          the geography of our planet. If we understand more
          about the land at a surface level, under all the
          folliage, we can figure out how our rivers will
          move.
        </p>
        <p className="paragraph">
          The how: Relative Elevation Models (REMs) help to
          identify the current and old pathways of how
          rivers flow. If we combine these models with
          aspect plots, that indicate the slope and angle of
          the land near rivers,
        </p>
        <p className="paragraph">
          Now that we understand our models, we need to find
          the right type of satellite data. We can keep
          things simple and focus on cities/towns near
          rivers or coastal towns.
        </p>
      </ContentSection>

      <ContentSection title="Raw Planning Thoughts">
        <ListItems
          className="paragraph"
          ordered
          items={[
            "Finding quality satellite data is very challenging and requires further research. UK data would be perfect (being native this is the area I want to inspect it most), but there seems to be little options available.",
            "An alternative (for now), is to use US satellite data for experimenting. Historic data would suffice while getting a decent model up and running.",
            "Another problem to consider is figuring out the power of floods and how their range is dictated.",
          ]}
        />
      </ContentSection>
    </>
  );
};

export default FloodDamagePrediction;
