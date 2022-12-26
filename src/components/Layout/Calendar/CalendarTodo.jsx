import React, { useState } from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function CalendarTodo() {
  let isDateRange = new Date();
  const [range, setRange] = useState(isDateRange);

  let footer = <p>첫번째 일정을 지정해주세요</p>;
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
      <div>
        <h4>일정</h4>
      </div>
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
