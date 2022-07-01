import Error from '../Error';
import { renderWithRouter } from '../..//utils/tests';

test('renders Error Page', () => {
  const { container } = renderWithRouter(<Error />);
  expect(container.firstChild).toMatchSnapshot();
});
