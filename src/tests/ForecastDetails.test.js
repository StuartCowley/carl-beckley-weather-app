import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("Forecast Details", () => {
  const validProps = {
    date: 1111111,
    humidity: 30,
    temperature: {
      min: 10,
      max: 30,
    },
    wind: {
      speed: 20,
      direction: "s",
    },
  };

  it("should render the component", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
