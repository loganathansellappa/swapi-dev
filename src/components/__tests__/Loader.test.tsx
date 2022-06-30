import Loader from '../Error';
import { renderWithRouter } from '../..//utils/tests';

test('renders Loader Page', () => {
    const { container } = renderWithRouter(<Loader />);
    expect(container.firstChild).toMatchSnapshot();
});
