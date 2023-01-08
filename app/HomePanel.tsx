import {
  Box,
  Card,
  CardContent,
  CardMedia,
  ListItem,
  Stack,
  Typography,
  List,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material';
import { Phone, Email, LinkedIn, GitHub, Home } from '@mui/icons-material';

export const HomePage = (): JSX.Element => (
  <Box
    sx={{
      px: 2,
      paddingBottom: 2,
      backgroundColor: 'primary.main',
    }}
  >
    <Card sx={{ p: 1 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          alignItems: 'center',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            maxWidth: {
              xs: '100%',
              sm: '600px',
            },
            minWidth: {
              md: '500px',
            },
            maxHeight: {
              md: '500px',
            },
            display: 'flex',
            flexGrow: 1,
          }}
          image="app/assets/headshot.jpg"
          alt="This is a test"
        />
        <CardContent>
          <Typography variant="h4" color="primary.main" sx={{}}>
            About Me
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Email fontSize="large" />
              </ListItemIcon>
              <Link
                href="mailto:joeylindsay64@gmail.com"
                variant="h6"
                color="#0011ff"
              >
                joeylindsay64@gmail.com
              </Link>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LinkedIn fontSize="large" />
              </ListItemIcon>
              <Link
                href="https://www.linkedin.com/in/joey-lindsay-489929bb"
                variant="h6"
                color="#0011ff"
              >
                https://www.linkedin.com/in/joey-lindsay-489929bb
              </Link>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GitHub fontSize="large" />
              </ListItemIcon>
              <Link
                href="https://github.com/joeylindsay"
                variant="h6"
                color="#0011ff"
              >
                https://github.com/joeylindsay
              </Link>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Phone fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { overflowWrap: 'anywhere' },
                  component: 'span',
                  variant: 'h6',
                }}
              >
                (571) 732-6743
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Home fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  sx: { overflowWrap: 'anywhere' },
                  component: 'span',
                  variant: 'h6',
                }}
              >
                Chevy Chase, MD
              </ListItemText>
            </ListItem>
            <ListItemText
              primaryTypographyProps={{
                component: 'span',
                variant: 'h4',
                color: 'primary.main',
              }}
            >
              Hello!
            </ListItemText>
            <ListItemText>
              My name is Joey Lindsay, and I am a geospatial software engineer.
              I work to collect, format, display and analyze location-based data
              with innovative software solutions. I am currently working as a
              Software Engineer at ESRI, constructing public-facing web GIS
              Solutions for the Census Bureau and NOAA. Outside of my
              professional life, I am a general technology enthusiast, and love
              tinkering with both computer hardware and software. I also enjoy
              playing video games, reading science fiction, hiking, and biking.
              Thanks for stopping by!
            </ListItemText>
          </List>
        </CardContent>
      </Stack>
    </Card>
  </Box>
);
