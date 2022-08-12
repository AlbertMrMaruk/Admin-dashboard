import React from "react";
import { Header } from "../components";
import { kanbanData, kanbanGrid } from "../data/dummy";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
const Kanban = () => {
  return (
    <div className="m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
