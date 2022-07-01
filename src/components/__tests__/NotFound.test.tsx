import { renderWithRouter } from '../..//utils/tests';
import NotFound from '../NotFound';

test('renders Not found Page', () => {
  const { container } = renderWithRouter(<NotFound />);
  expect(container.firstChild).toMatchSnapshot();
});
