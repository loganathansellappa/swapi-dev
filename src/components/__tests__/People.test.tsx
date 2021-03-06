import { mockResource, renderWithRouter, testStore } from '../..//utils/tests';
import People from '../People';
import { Provider } from 'react-redux';
import * as Hooks from '../../services/People';

describe('Person', () => {
  let element: { container: HTMLElement };
  beforeEach(() => {
    jest.spyOn(Hooks, 'useGetResourceQuery').mockReturnValue({
      data: mockResource(),
      isError: false,
      isLoading: false,
      refetch: jest.fn(),
    });
    element = renderWithRouter(
      <Provider store={testStore()}>
        <People />
      </Provider>
    );
  });

  test('renders Person component', () => {
    expect(element.container.firstChild).toMatchSnapshot();
  });
});
