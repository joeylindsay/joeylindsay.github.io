import { Paper, Stack, Typography, Box, CircularProgress } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

type ProficiencyEntryType = {
  name: string;
  years: number;
  percent: number;
  iconLoc?: string;
};

export function ProficiencyEntry({
  name,
  iconLoc,
  years,
  percent,
}: ProficiencyEntryType): JSX.Element {
  return (
    <Grid2 xs={3}>
      <Stack
        direction="row"
        component={Paper}
        alignItems="center"
        justifyContent="space-evenly"
        gap={2}
        p={1}
        sx={{ borderRadius: 2 }}
      >
        {iconLoc && (
          <img
            src={iconLoc}
            alt={`${name}-icon`}
            style={{
              maxWidth: 75,
              maxHeight: 75,
              display: 'flex',
              flexGrow: 1,
            }}
          />
        )}
        <Stack>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontSize: { xs: 19, lg: 22 } }}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ fontSize: { xs: 15, lg: 18 } }}
          >{`${years} ${years === 1 ? 'year' : 'years'}`}</Typography>
        </Stack>
        <Stack>
          <Box
            sx={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress
              variant="determinate"
              value={percent}
              color={percent > 65 ? 'success' : 'warning'}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="subtitle1">{`${percent}%`}</Typography>
            </Box>
          </Box>
          <Typography variant="subtitle1">Proficiency</Typography>
        </Stack>
      </Stack>
    </Grid2>
  );
}
