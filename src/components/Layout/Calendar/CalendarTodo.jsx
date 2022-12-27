import React, { useState } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function CalendarTodo() {
  let isDateRange = new Date();
  const [range, setRange] = useState(isDateRange);

  let footer = <p>일정을 지정해주세요</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

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
