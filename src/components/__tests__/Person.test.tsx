import { mockResource, renderWithRouter, testStore } from '../..//utils/tests';
import { Person } from '../Person';
import { Provider } from 'react-redux';

describe('Person', () => {
  let element: { container: HTMLElement };
  beforeEach(() => {
    element = renderWithRouter(
      <Provider store={testStore()}>
        <Person person={mockResource()} />
      </Provider>
    );
  });

  test('renders Person component', () => {
    expect(element.container.firstChild).toMatchSnapshot();
  });
});
