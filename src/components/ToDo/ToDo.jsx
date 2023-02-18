import { Checkbox, Typography } from "@mui/material";
import { useEffect, useState } from "react";
const ToDo = () => {
  const [inProgress, setInProgress] = useState([
    { title: "test" },
    { title: "test2" },
  ]);
  const [completed, setCompleted] = useState([]);

  const handleCheckboxChange = (e, el) => {
    if (e.target.checked) {
      setInProgress(inProgress.filter((x) => x.title !== el.title));
      setCompleted([el, ...completed]);
    }
  };

  return (
    <>
      {inProgress?.map((el) => (
        <>
          <Checkbox
            onChange={(e) => handleCheckboxChange(e, el)}
            checked={false}
          />
          <Typography>{el.title}</Typography>
        </>
      ))}
      {completed?.map((el) => (
        <>
          <Checkbox checked onChange={(e) => handleCheckboxChange(e, el)} />
          <Typography>{el.title}</Typography>
        </>
      ))}
    </>
  );
};

export default ToDo;
