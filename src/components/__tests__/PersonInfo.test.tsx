import { mockResource, renderWithRouter, testStore } from '../..//utils/tests';
import { PersonInfo } from '../PersonInfo';
import { Provider } from 'react-redux';
import * as Hooks from '../../services/People';

describe('PersonInfo', () => {
  let element: { container: HTMLElement };

  beforeEach((): void => {
    jest.spyOn(Hooks, 'useGetResourceQuery').mockReturnValue({
      data: mockResource(),
      isError: false,
      isLoading: false,
      refetch: jest.fn(),
    });
    element = renderWithRouter(
      <Provider store={testStore()}>
        <PersonInfo />
      </Provider>
    );
  });

  test('renders PersonInfo component', () => {
    expect(element.container.firstChild).toMatchSnapshot();
  });
});
