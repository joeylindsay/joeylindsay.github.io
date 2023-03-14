import {
  CardMedia,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

type ExperienceEntryType = {
  title: string;
  organization: string;
  timeframe: string;
  iconLoc: string;
  link: string;
  description: string;
};

export function ExperienceEntry({
  title,
  organization,
  timeframe,
  iconLoc,
  link,
  description,
}: ExperienceEntryType): JSX.Element {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.up('md'));
  const isSmall = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      component={Paper}
      justifyContent="space-evenly"
      alignItems={{ xs: 'center', md: 'left' }}
      gap={2}
      p={1}
      sx={{ borderRadius: 2 }}
      maxWidth={1250}
    >
      {isMedium && (
        <CardMedia
          component="img"
          sx={{
            width: 200,
            maxHeight: 200,
          }}
          image={iconLoc}
          alt={`${organization} logo`}
        />
      )}
      <Stack
        gap={1}
        alignItems="space-evenly"
        direction={{ xs: 'row', md: 'column' }}
      >
        {!isMedium && (
          <CardMedia
            component="img"
            sx={{
              width: 150,
              maxHeight: 150,
              alignSelf: 'center',
            }}
            image={iconLoc}
            alt={`${organization} logo`}
          />
        )}
        <Stack
          direction="column"
          justifyContent="center"
          alignItems={{ xs: 'center', sm: 'flex-start' }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', fontSize: { xs: 20, sm: 25 } }}
            align={isSmall ? 'left' : 'center'}
          >
            {title}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} gap={{ xs: 0, sm: 1 }}>
            <Typography
              variant="h6"
              component="p"
              align={isSmall ? 'left' : 'center'}
            >
              <Link href={link} target="_blank" rel="noopener">
                {organization}
              </Link>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              align={isSmall ? 'left' : 'center'}
            >
              {timeframe}
            </Typography>
          </Stack>
          {isSmall && <Typography variant="body1">{description}</Typography>}
        </Stack>
      </Stack>
      {!isSmall && (
        <Typography variant="body1" align={isSmall ? 'left' : 'center'}>
          {description}
        </Typography>
      )}
    </Stack>
  );
}
