import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ProductListComponent from "../ProductListComponent";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios", () => ({
  get: jest.fn(),
}));

const renderWithRouter = (component) => {
  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>),
  };
};

const mockedResponse = {
  data: {
    products: [
      {
        title: "product title",
        price: "90",
        images: ["src/assets/tshirt.jpg"],
        description: "product description",
        stock: "product stock",
        category: "category",
        discountPercentage: "15",
        id: "3",
      },
    ],
  },
};

test("ProductListComponent renders correctly", async () => {
  axios.get.mockResolvedValue(mockedResponse);

  renderWithRouter(<ProductListComponent />);

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalled();
    const titleElement = screen.getByTestId("product-title");
    expect(titleElement).toHaveTextContent("product title");
    const moreInfoElement = screen.getByTestId("button-more-info");
    fireEvent.click(moreInfoElement); 
  });

    const modalTitleElement = await screen.findByTestId("modal-product-title");
    expect(modalTitleElement).toHaveTextContent("product title");

});