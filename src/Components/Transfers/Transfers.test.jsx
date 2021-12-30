import React from "react";
import { screen, render } from "@testing-library/react";
import Transfers from "./Transfers";

describe('Transfers component', () => {

  it('Transfers to be rendered', () => {
    render(<Transfers />);
    expect(screen.getByText('КОЛИЧЕСТВО ПЕРЕСАДОК')).toBeInTheDocument();
  })

})