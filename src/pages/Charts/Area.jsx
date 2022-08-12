import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
import {
  areaPrimaryXAxis,
  areaPrimaryYAxis,
  areaCustomSeries,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Area" />
      <div className="w-full">
        <p className="text-xltext-center">Inflation Rate in percentage</p>
        <ChartComponent
          id="line-chart"
          height="420px"
          className="mt-6"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode == "Dark" ? "#33373E" : "#FFF"}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;
