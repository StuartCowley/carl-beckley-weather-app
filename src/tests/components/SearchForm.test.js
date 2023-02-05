import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("Search Form", () => {
  const validProps = {
    searchText: "Manchester",
    setSearchText: jest.fn,
    onSubmit: jest.fn(),
  };

  it("renders the component", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("fires the correct event", () => {
    const { getByTestId } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    const button = getByTestId("button");
    fireEvent.click(button);
    expect(validProps.onSubmit).toHaveBeenCalled();
  });
});
