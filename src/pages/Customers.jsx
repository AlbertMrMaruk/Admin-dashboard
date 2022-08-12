import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  Inject,
  Sort,
  Edit,
  Filter,
  Selection,
  Search,
  Toolbar,
  Page,
  ColumnDirective,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
const Customers = () => {
  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
  };
  return (
    <div className="m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />

      <GridComponent
        dataSource={customersData}
        allowSorting={true}
        allowPaging={true}
        editSettings={editOptions}
        width="auto"
        toolbar={["Delete"]}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Toolbar, Sort, Edit, Filter, Selection, Search]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
