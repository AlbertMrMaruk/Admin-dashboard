import React from "react";
import { Header } from "../components";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
const Calendar = () => {
  return (
    <div className="m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        eventSettings={{ dataSource: scheduleData }}
        height="650px"
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
