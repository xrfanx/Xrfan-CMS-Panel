import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SkeletonComp() {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" width={500} sx={{ fontSize: '2rem' }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rectangular" width={310} height={80} />
      <Skeleton variant="rounded" width={310} height={60} />
    </Stack>
  );
}
