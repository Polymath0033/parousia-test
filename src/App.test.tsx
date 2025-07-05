import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { apiService } from "./services/api";

// Mock the API service
jest.mock("./services/api", () => ({
  fetchProducts: jest.fn(),
  fetchCategories: jest.fn(),
}));

const mockFetchProducts = apiService.fetchProducts as jest.MockedFunction<
  typeof apiService.fetchProducts
>;
const mockFetchCategories = apiService.fetchCategories as jest.MockedFunction<
  typeof apiService.fetchCategories
>;

describe("App", () => {
  beforeEach(() => {
    mockFetchProducts.mockResolvedValue([]);
    mockFetchCategories.mockResolvedValue([]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders product dashboard", async () => {
    render(<App />);

    // Check if loading state is shown initially
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for the component to load
    await screen.findByText(/product dashboard/i);

    expect(screen.getByText(/product dashboard/i)).toBeInTheDocument();
  });

  test("handles API errors gracefully", async () => {
    mockFetchProducts.mockRejectedValue(new Error("API Error"));

    render(<App />);

    // Wait for error message to appear
    await screen.findByText(/error/i);

    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
