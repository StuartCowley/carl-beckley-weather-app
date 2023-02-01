import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../../components/App";
// import forecast from "../data/forecast.json";

describe("App", () => {
  const validProps = {
    location: {
      city: "test city",
      country: "test country",
    },
    forecasts: [
      {
        date: 1111111,
        description: "Stub description",
        icon: "800",
        temperature: {
          min: 12,
          max: 22,
        },
        humidity: 20,
        wind: {
          direction: "direction",
          speed: 20,
        },
      },
    ],
  };

  test("renders App component correctly", () => {
    render(
      <App location={validProps.location} forecasts={validProps.forecasts} />
    );
    const h1Element = screen.getByText(/test city, test country/i);
    expect(h1Element).toBeInTheDocument();
  });
});
