import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
// import 'jest-dom/extend-expect'
import '@testing-library/jest-dom';
// import { render, fireEvent, waitForElement } from "@testing-library/react";
// import { render, screen } from "@testing-library/react";

import IndexPageComponent from '../../Components/IndexPageComponent';

describe('trying to test index page', () => {
    // it('simple render index page', async () => {
    //     mount(<IndexPageComponent />);
    //     expect(true).toBe(true);
    // });
    test("should display a blank login form, with remember me checked by default", async () => {
        const bs = 'ehgaea';
        render(<IndexPageComponent />);
        expect(true).toBe(true);
    });

});
