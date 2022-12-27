import React, { useState, useEffect } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function CalendarTodo({ setFromDate, setToDate }) {
  let isDateRange = new Date();
  const [range, setRange] = useState(isDateRange);
  useEffect(() => {
    // console.log(range);
    // state에 저장
    // console.log(format(range.from, "P"));
    // setFromDate(format(range.from, "P"));
    // setToDate(format(range.to, "P"));
  }, [range]);

  let footer = <p>일정을 지정해주세요</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "P")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "P")} – {format(range.to, "P")}
        </p>
      );
    }
  }

  // console.log(range);
  return (
    <>
      <DayPicker
        mode="range"
        // defaultMonth={pastMonth}
        selected={range}
        footer={footer}
        onSelect={setRange}
      />
    </>
  );
}
