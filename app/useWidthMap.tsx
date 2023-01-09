import { useMediaQuery } from '@mui/material';

const widthMap = {
  xs: [100, 100],
  sm: [150, 150],
  md: [200, 200],
  lg: [200, 200],
  xl: [75, 75],
};

export default function useWidthMap(): number[] {
  const xs = useMediaQuery('xs');
  const sm = useMediaQuery('sm');
  const md = useMediaQuery('md');
  const lg = useMediaQuery('lg');

  if (xs) {
    return widthMap.xs;
  } else if (sm) {
    return widthMap.sm;
  } else if (md) {
    return widthMap.md;
  } else if (lg) {
    return widthMap.lg;
  } else {
    return widthMap.xl;
  }
}
