import { render, screen } from '@testing-library/react';
import App from './App';
import Upcomingraces from './components/Main/Upcomingraces';
import About from './components/Aside/About';
import RecentRaces from './components/Main/Gallery';
import Weather from "./components/Main/Weather";

test('Header is rendered', () => {
  render(<App />);
  const linkElement = screen.getByText("Queensland Cycling Club");
  expect(linkElement).toBeInTheDocument();
});

test('Upcoming races is visible', () => {
  render(<Upcomingraces />);
  const linkElement = screen.getByText("Upcoming Races");
  expect(linkElement).toBeInTheDocument();
});

test("Contact us button is visible", () => {
  render(<About />);
  const contactButton = screen.getByText(/Contact Us/i);
  expect(contactButton).toHaveTextContent(/Contact Us/i);
});

test("Alt image text exists", () => {
  render(<RecentRaces />);
  const image = screen.getByAltText(/man riding a cross country bike up a hill/i);
  expect(image).toBeInTheDocument();
});


test("Weather information viewable", () => {
  render(<Weather />);
  const minimumTemp = screen.getByText(/Weather Forecast/i);
  expect(minimumTemp).toBeInTheDocument();
});




