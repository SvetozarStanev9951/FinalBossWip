import { useEffect, useMemo, useState } from "react";
import { generateBigData } from "./utils";

export default function BigDataDisplay() {
  const [renderCount, setRenderCount] = useState(1);
  const [refreshData, setRefreshData] = useState(true);

  /**
   * NOT MEMOIZED
   */
  // const bigData = generateBigData();
  // const filteredBigData = (() => {
  //   console.log("Filtering the data!");
  //   return bigData.filter((el) => el.flag);
  // })();

  /**
   * MEMOIZED
   */
  const bigData = useMemo(() => generateBigData(), [refreshData]);
  const filteredBigData = useMemo(() => {
    console.log("Filtering the data!");
    return bigData.filter((el) => el.flag);
  }, [refreshData]);

  useEffect(() => {
    console.log(renderCount);
  }, [renderCount]);

  return (
    <>
      <button onClick={() => setRenderCount(renderCount + 1)}>Rerender</button>
      <button onClick={() => setRefreshData(!refreshData)}>Refresh data</button>
      <h2>Filtered big data length: {filteredBigData.length}</h2>
    </>
  );
}
