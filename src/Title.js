import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function Title() {
  return (
    <>
      <Stack direction="row" spacing={0}>
        <Box
          sx={{
            border: 1,
            borderColor: "#DDD",
            pr: 5,
            pl: 1,
            pt: 1,
            pb: 1,
          }}
        ></Box>
        <Box
          sx={{
            border: 1,
            borderColor: "#DDD",
            pr: 25.4,
            pl: 1,
            pt: 1,
            pb: 1,
          }}
        >
          Label
        </Box>
        <Box
          sx={{
            border: 1,
            borderColor: "#DDD",
            pr: 22.8,
            pl: 1,
            pt: 1,
            pb: 1,
          }}
        >
          Formula
        </Box>
      </Stack>
    </>
  );
}
