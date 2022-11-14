import { Button, TextField, Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addValues,
  addLable,
  addOptions,
  addRadioValues,
} from "./store/slices/surveySlice";
import Title from "./Title";

export default function Survey() {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([]);

  const addQuestions = () => {
    let questions2 = [...questions];
    let item = {
      lable: "",
      value: "",
      id: Math.random(0.5),
      defined: false,
      formula: "",
    };
    questions2.push(item);
    setQuestions(questions2);
    dispatch(addToCart(item));
  };

  const handleChange = (event, id) => {
    let index = questions.findIndex((obj) => obj.id === id);
    console.log("Helo", event.target.value);
    dispatch(
      addRadioValues({
        lable: event.target.value,
        questionId: id,
      })
    );
  };

  const handleFormula = (event, id) => {
    let index = questions.findIndex((obj) => obj.id === id);
    console.log("Helo", event.target.value);
    dispatch(
      addOptions({
        lable: event.target.value,
        questionId: id,
      })
    );
  };

  console.log("Questions ==>", questions);
  return (
    <div>
      <Title />
      {questions.map(({ value, id }) => (
        <div key={id}>
          <Box>
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
                  pr: 1,
                  pl: 1,
                  pt: 1,
                  pb: 1,
                }}
              >
                <TextField
                  onChange={(event) => handleChange(event, id)}
                  label=""
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                />
              </Box>
              <Box
                sx={{
                  border: 1,
                  borderColor: "#DDD",
                  pr: 1,
                  pl: 1,
                  pt: 1,
                  pb: 1,
                }}
              >
                <TextField
                  onChange={(event) => handleFormula(event, id)}
                  label=""
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                />
              </Box>
            </Stack>
          </Box>
        </div>
      ))}

      <Button variant="contained" sx={{ mt: 2 }} onClick={addQuestions}>
        Add TextField
      </Button>
    </div>
  );
}
