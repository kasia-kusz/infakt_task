import AccountantsListing from '../features/accountants/components/accountants-listing';
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import fetchMock from "jest-fetch-mock";

describe("AccountantsListing", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("renders without errors", () => {
    render(<AccountantsListing />);
  });

  it("displays accountant cards after loading", async () => {
    render(<AccountantsListing />);
    const loadMoreButton = screen.getByTestId("more");

    fetchMock.mockResponseOnce(
      JSON.stringify({
        results: [
          {
            cell: "(968)-588-9406",
            name: {
              first: "Ryder",
              last: "Singh",
            },
            email: "ryder.singh@example.com",
            picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/76.jpg", medium: "https://randomuser.me/api/portraits/thumb/men/76.jpg" },
            login: { uuid: "uuid1" },
          },
        ],
        info: { page: 1 },
      })
    );

    fireEvent.click(loadMoreButton);

    await waitFor(() => {
      const accountantCard = screen.getByText("Ryder Singh");
      expect(accountantCard).toBeInTheDocument();
    });
  });
  
});
