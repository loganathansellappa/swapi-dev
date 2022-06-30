import { renderWithRouter } from '../..//utils/tests';
import People from "../People";

test('renders People Page', () => {
    const { container } = renderWithRouter(<People />);
    expect(container.firstChild).toMatchSnapshot();
});
