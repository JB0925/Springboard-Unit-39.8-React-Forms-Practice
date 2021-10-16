import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import TodoList from "./TodoList";

test('The App component will render.', () => {
  render(<App />);
});

test('The NewTodoForm component will render.', () => {
  render(<NewTodoForm />);
});

test('The Todo component will render.', () => {
  render(<Todo />);
});

test('The TodoList component will render.', () => {
  render(<TodoList />);
});

test('The App component matches the snapshot.', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test('The NewTodoForm component matches the snapshot.', () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

test('The Todo component matches the snapshot.', () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

test('The TodoList component matches the snapshot.', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

test('The NewTodoForm renders a new Todo component in the DOM, and the remove button removes it.', () => {
  const { getByText, queryByText, getByLabelText } = render(<TodoList />);
  const input = getByLabelText("Enter a New Todo");
  const btn = getByText('Add Todo');

  expect(document.body).not.toContainHTML('class="Todo"');

  fireEvent.change(input, { target: { value: 'mow the grass' }});
  fireEvent.click(btn);

  expect(document.body).toContainHTML('class="Todo');

  const removeBtn = getByText('X');
  fireEvent.click(removeBtn);
  expect(document.body).not.toContainHTML('class="Todo"');
});
