import {cleanup, render, screen} from '@testing-library/react';
import Button from './Button'

afterEach(cleanup)

describe('Button', () => {
    it("should render a button element", () => {
        render(<Button />)
        const button = screen.getByRole("button")

        expect(button).toBeInTheDocument()
    })
})