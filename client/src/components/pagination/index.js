import { Box, Pagination } from "@mui/material";

const pageSize = 5;

export default function AppPagination({ pagination, handlePageChange }) {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{ margin: "20px 0px" }}
    >
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
        color="secondary"
      />
    </Box>
  );
}
