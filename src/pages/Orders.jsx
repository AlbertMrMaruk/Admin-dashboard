import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  Inject,
  Edit,
  PdfExport,
} from "@syncfusion/ej2-react-grids";

import { ordersData, ordersGrid, contextMenuItems } from "../data/dummy";

import { Header } from "../components";
const Orders = () => {
  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
  };
  return (
    <div className="m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category="Page" title="Orders" />
      <GridComponent
        allowPaging={true}
        allowSorting={true}
        id="gridcomp"
        editSettings={editOptions}
        dataSource={ordersData}
        allowExcelExport={true}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            Edit,
            ExcelExport,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
