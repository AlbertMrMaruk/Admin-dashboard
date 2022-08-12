import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";

import { Header } from "../components";
const Employees = () => {
  return (
    <div className="m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category="Page" title="Employees" />
      <GridComponent
        allowPaging="true"
        allowSorting="true"
        id="gridemp"
        width="auto"
        dataSource={employeesData}
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
