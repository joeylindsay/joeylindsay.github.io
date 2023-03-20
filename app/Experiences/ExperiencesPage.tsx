import { Stack } from '@mui/material';
import { EducationEntry } from './EducationEntry';
import { ExperienceEntry } from './ExperienceEntry';

export const ExperiencePage = (): JSX.Element => (
  <Stack
    direction={{ xs: 'column', lg: 'row' }}
    justifyContent="center"
    sx={{ backgroundColor: 'primary.main' }}
  >
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
      <ExperienceEntry
        title="Software Engineer"
        organization="ESRI"
        timeframe="November 2021 - Present"
        iconLoc="/esriLogo.jpg"
        link="https://www.esri.com/en-us/home"
        description="I work in ESRI's professional services division, creating customized solutions for customers interested in interacting with ESRI software in ways that go above and beyond out-of-the-box deployments."
      />
      <ExperienceEntry
        title="NASA DEVELOP Participant"
        organization="NASA DEVELOP Program"
        timeframe="June 2021 - November 2021"
        iconLoc="/NASA_logo.png"
        link="https://appliedsciences.nasa.gov/what-we-do/capacity-building/develop"
        description="NASA's DEVELOP Program seeks to leverage the power of both interdisciplinary research and remotely-sensed datasets to deliver unique solutions to its partners. DEVELOP participants collaborate on projects that run the gamut of global environmental and  policy challenges, from Urban Development to Food Security to Deforestation. In this 10 week internship, I worked to created a Soil and Water Assessment Tool model for the Tonlé Sap Basin region of Cambodia."
      />
      <ExperienceEntry
        title="Junior Program Assistant"
        organization="AidData"
        timeframe="June 2020 - November 2021"
        iconLoc="/aiddata.jpg"
        link="https://www.aiddata.org/"
        description="At AidData I scraped web-based sources, including annual reports and press releases, for information regarding Chinese financing to individual nations. Through this position I learned database management and data entry skills while working with unfamiliar languages. I was promoted to managing research assistant in January of 2021, and took on an increased leadership role. This included conducting interviews, training new research assistants, and assisting my supervisor in team management tasks. I was promoted to Junior Program Assistant in June of 2021, which extended my leadership and management responsibilities."
      />
      <ExperienceEntry
        title="Resident Assistant"
        organization="William & Mary"
        timeframe="August 2018 - December 2019"
        iconLoc="/williamandmary.jpg"
        link="https://www.wm.edu/offices/residencelife/index.php"
        description="As a Resident Assistant I conducted orientation presentations, crafted informative display boards, directed community-building initiatives, and ensured resident safety and security while providing leadership to a group of new students at William & Mary."
      />
      <ExperienceEntry
        title="Print and Marketing Associate"
        organization="Staples"
        timeframe="June 2018 - January 2019"
        iconLoc="/staples.jpg"
        link="https://www.staples.com/services/printing/"
        description="At Staples Print and Marketing, I designed and formatted documents, repaired printing equipment, and completed large specialty print orders while interacting face to face with customers."
      />
      <ExperienceEntry
        title="Campaign Intern"
        organization="Connolly for Congress"
        timeframe="Febuary 2017 - May 2017"
        iconLoc="/connolly.png"
        link="https://gerryconnolly.com/"
        description="At Connolly for Congress, I was responsible for calling and mailing constituents of the 11th district of Virginia to attract interest in a campaign rally event. I additionally assisted the campaign efforts by tracking contributions in Microsoft Excel."
      />
      <ExperienceEntry
        title="Technology Camp Counselor"
        organization="Flint Hill School"
        timeframe="June 2016 - July 2016"
        iconLoc="/fhs.jpg"
        link="https://www.flinthill.org/"
        description="While working as a Technology Camp Counselor, I taught children in 3rd and 4th grade the basics of programming and robotics by using MIT's Scratch and LEGO Mindstorms."
      />
    </Stack>
    <Stack
      spacing={1}
      sx={{
        px: 2,
        paddingBottom: 2,
        paddingTop: 1,
        backgroundColor: 'primary.main',
      }}
      direction={{ xs: 'column', sm: 'row', lg: 'column' }}
      alignItems="center"
      justifyContent={{ xs: 'center', lg: 'flex-start' }}
    >
      <EducationEntry
        school="William & Mary"
        degree="B.S., Computer Science & Environmental Science"
        timeframe="2017 - 2021"
        iconLoc="/williamandmary.jpg"
      />
      <EducationEntry
        school="Flint Hill School"
        degree="High School"
        timeframe="2013 - 2017"
        iconLoc="/fhs.jpg"
      />
    </Stack>
  </Stack>
);
