import { Stack } from '@mui/material';
import { ProjectEntry } from './ProjectEntry';

export const ProjectsPage = (): JSX.Element => (
  <Stack
    spacing={1}
    sx={{
      px: 2,
      paddingBottom: 2,
      paddingTop: 1,
      justifyContent: 'center',
      backgroundColor: 'primary.main',
    }}
  >
    <ProjectEntry
      name="Census Business Builder"
      iconLoc="/cbb.png"
      description="A feature-rich GIS web application, CBB allows users to select, filter, graph, and report Census data. Users can restrict by predefined or custom geographies, add their own map layers, and print detailed descriptions of their analysis regions. Based in React and TypeScript, the application leverages modern material UI design principles and Census API data calls."
      link="https://cbb.census.gov/cbb/"
    />
    <ProjectEntry
      name="NOAA's FIDO Replacement"
      iconLoc="/flight-planning.png"
      description="NOAA frequently flies shoreline imaging flights to track detailed coastal information in the United States. I was responsible for the design and construction of workflow software that allows NOAA to create flight projects, plan flights graphically, re-upload, manage, and publish their imagery collections. I also completed the database design for this software, instantiating a custom PostgreSQL database with linked tables to update values and perform validation automatically."
    />
    <ProjectEntry
      name="Capital Bikeshare Analysis"
      iconLoc="/CaBiScreenshot.png"
      description="A personal project sparked by my love of biking and  transit, I ran a network analysis on all Capital Bikeshare stations in the greater Washington DC area, and graphed them by frequency of use. I also aggregated information from Montgomery County, Prince George's County, Arlington City, Fairfax City, Alexandria City, Fairfax County, and the District of Columbia to create a definitive map of all protected bike lanes and dedicated bike trails."
      link="https://prof-services.maps.arcgis.com/home/item.html?id=c49ba10beacd44f9b033ba0edd879c8a#overview"
    />
    <ProjectEntry
      name="Allegheny County Food Inspections"
      iconLoc="/ahCountyCourthouse.jpg"
      description="Tracking the safety status of thousands of restaurants across an entire county is a difficult task involving large amounts of frequently updated data. I created and implemented a script that automatically pulls recent health inspection data and applies it Allegheny County's GIS layers, allowing administrators to rapidly view and manage safety records."
    />
    <ProjectEntry
      name="Tonlé Sap Food Security & Agriculture"
      iconLoc="/tonleSap.png"
      description="This study, conducted for the NASA DEVELOP program, involved the creation of a hydrological model for the Tonlé Sap Basin in Cambodia through the Soil and Water Assessment Tool (SWAT). This was successfully completed during the span of this 10 week internship, along with a Google Colab tool that allows users to download SWAT data from remotely-sensed data sources for any location in the world."
      link="https://develop.larc.nasa.gov/2021/spring/TonleSapAg.html"
    />
    <ProjectEntry
      name="Rewilding the North American Prairie"
      iconLoc="/rewilding.png"
      description="This feasibility study, requested by the American Prairie Reserve, utilized a combination of NDVI and Animal Unit Months (AUM) to determine the reserve's ability to support the reintroduction of large herbivores, as well as the productivity of the surrounding regions."
      link="https://code.earthengine.google.com/773b16ff7e21da8bf887f8af3e0214f0"
    />
    <ProjectEntry
      name="Interceptors"
      iconLoc="/interceptorsTitleScreen.png"
      description="Interceptors is a top-down, retro aerial combat game developed in C++ by myself leading a small team of William and Mary students. The game features a time-stop mechanic, custom artwork, and multiple enemy types. Stake your claim as the greatest pilot to fly!"
      link="https://github.com/joeylindsay/gameDesignGroup5"
    />
    <ProjectEntry
      name="How China Lends"
      iconLoc="/howChinaLendsCoverImage.png"
      description="This flagship paper from AidData, a research lab at William & Mary studying underreported international financial flows, details the first systematic analysis of actual Chinese financing contracts to the developing world. I participated in this paper's data collection aspect as a Research Assistant and Junior Program Manager."
      link="https://www.aiddata.org/ations/how-china-lends"
    />
    <ProjectEntry
      name="The Great Blue Heron"
      iconLoc="/GreatBlueHeronPreview.png"
      description="This story map tracks recent colony survey data concerning the Great Blue Heron, discusses its recovery in the region, and provides a simple geospatial analysis to identify interrelated colonies."
      link="https://storymaps.arcgis.com/stories/11eb9c89e5164aa99f0adc697d7ce70a"
    />
  </Stack>
);
