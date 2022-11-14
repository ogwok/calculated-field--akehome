import { Box, Radio, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addRadioValues, addValues } from "./store/slices/surveySlice";

export default function PreviewBody({ value, lable, formula, id }) {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.survey.survey);
  useEffect(() => {}, [formula]);

  const handleValues = (event, id) => {
    let index = questions.findIndex((obj) => obj.id === id);
    console.log("Helo", event.target.value);
    dispatch(
      addValues({
        value: event.target.value,
        questionId: id,
      })
    );
  };

  const [checked2, setChecked] = useState([]);

  const handleChange = (id) => {
    let arr2 = [...checked2];
    arr2.push({ checked: true, id: id });
    setChecked(arr2);
  };

  const defaultValue = () => {
    try {
      return eval(formula);
    } catch {
      return "";
    }
  };

  const handleChecked = (id) => {
    let index = checked2.findIndex((obj) => obj.id === id);
    let chec = checked2[index];
    if (chec) {
      return chec.checked;
    }
  };
  const compute = () => {
    try {
      let complex = formula.split(" ");
      let complex2 = (lable) => questions.find((obj) => obj.lable === lable);
      let result = [];
      complex.forEach((item) => {
        if (complex2(item)) {
          result.push(complex2(item).value);
        } else {
          result.push(item);
        }
      });
      return eval(result.join(""));
    } catch {
      return "";
    }
  };

  console.log("Complex", compute());

  return (
    <>
      <Stack direction="column" spacing={0}>
        <Box sx={{ pl: 2, pt: 1 }}>{lable}</Box>

        <Box
          sx={{
            pl: 2,
            pb: 2,
          }}
        >
          {formula ? (
            <TextField
              onChange={(event) => handleValues(event, id)}
              placeholder={lable}
              value={compute()}
              id="outlined-size-small"
              size="small"
            />
          ) : (
            <TextField
              onChange={(event) => handleValues(event, id)}
              placeholder={lable}
              id="outlined-size-small"
              size="small"
            />
          )}
        </Box>
      </Stack>
    </>
  );
}
