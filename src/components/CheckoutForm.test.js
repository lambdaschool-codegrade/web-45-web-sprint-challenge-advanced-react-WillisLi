import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)

    const header = screen.getByText(/checkout form/i);

    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent("Checkout Form");
}); 

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstName = "Bananas";
    const lastName = "Peel";
    const address = "1234 Banana St";
    const city = "Bananopolis";
    const state = "Fruitopia";
    const zip = "12345";

    const firstNameInput = screen.getByLabelText(/first name:/i);
    userEvent.type(firstNameInput, firstName);

    const lastNameInput = screen.getByLabelText(/last name:/i);
    userEvent.type(lastNameInput, lastName);

    const addressInput = screen.getByLabelText(/address:/i);
    userEvent.type(addressInput, address);
    
    const cityInput = screen.getByLabelText(/city:/i);
    userEvent.type(cityInput, city);

    const stateInput = screen.getByLabelText(/state:/i);
    userEvent.type(stateInput, state);

    const zipInput = screen.getByLabelText(/zip:/i);
    userEvent.type(zipInput, zip);

    const button = screen.getByRole('button');
    userEvent.click(button)

    const success = screen.getByTestId('successMessage'); 
    expect(success).toBeInTheDocument();
});
