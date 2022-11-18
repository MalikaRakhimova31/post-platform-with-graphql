import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function CustomPagination({pageSize, dataLength, page, handleChange}) {
    const pageCount = dataLength / pageSize
  return (
    <Stack spacing={2} id="pagination">
          <Pagination
              count={Math.ceil(pageCount)}
              variant="outlined"
              shape="rounded"
              page={page}
              onChange={handleChange}
              color='secondary'
          />
    </Stack>
  );
}