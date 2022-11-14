import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PreviewBody from "./PreviewBody";
import PreviewTitle from "./PreviewTitle";
import { useSelector } from "react-redux";
import ViewForm from "./ViewForm";

export default function Review() {
  const questions = useSelector((state) => state.survey.survey);
  const options = useSelector((state) => state.survey.options);

  console.log("review", questions);
  return (
    <div>
      <Typography variant="h7" component="h2">
        Preview
      </Typography>
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          flexGrow: 1,
          bgcolor: "#fff",
          mt: 1.4,
        }}
      >
        {/* <PreviewTitle /> */}
        {questions.map(({ lable, value, id, checked, formula }) => (
          <div key={id}>
            <PreviewBody
              id={id}
              lable={lable}
              formula={formula}
              value={value}
              questionsId={id}
              checked={checked}
              options={options}
            />
          </div>
        ))}
        {/* <ViewForm /> */}
      </Box>
    </div>
  );
}
