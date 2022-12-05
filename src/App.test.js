import { render, screen } from '@testing-library/react';
import App from './App';
import Upcomingraces from './components/Main/Upcomingraces';
import About from './components/Aside/About';
import RecentRaces from './components/Main/Gallery';
import Weather from "./components/Main/Weather";

test('renders header test', () => {
  render(<App />);
  const linkElement = screen.getByText("Queensland Cycling Club");
  expect(linkElement).toBeInTheDocument();
});

test('renders upcoming races test', () => {
  render(<Upcomingraces />);
  const linkElement = screen.getByText("Upcoming Races");
  expect(linkElement).toBeInTheDocument();
});

test("test button text", () => {
  render(<About />);
  const contactButton = screen.getByText(/Contact Us/i);
  expect(contactButton).toHaveTextContent(/Contact Us/i);
});

test("test image view", () => {
  render(<RecentRaces />);
  const image = screen.getByAltText(/man riding a cross country bike up a hill/i);
  expect(image).toBeInTheDocument();
});



