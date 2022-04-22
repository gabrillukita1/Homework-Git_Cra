import { getByRole, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import SearchBar from "../searchBar";
import Store from '../../../../redux/store';
import userEvent from "@testing-library/user-event";

test('should render placeholder', () => {
    render(
        <Provider store={Store}>
            <SearchBar ></SearchBar>
        </Provider>
    );
    const search = screen.getByPlaceholderText(/Search.../i);
    expect(search).toBeInTheDocument();
})

test('should render input', () => {
    render(
        <Provider store={Store}>
            <SearchBar ></SearchBar>
        </Provider>
    );
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'test');
    expect(input).toHaveValue('test');
})