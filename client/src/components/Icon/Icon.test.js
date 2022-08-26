import { render, screen } from "../../utils/testUtils";
import Icon from './Icon'


describe('Icon', () => {
    it('renders the icon requested', () => {
        render(<Icon icon="x" />)
        const icon = screen.getByTestId("x")
        expect(icon).toBeInTheDocument()
    })
})