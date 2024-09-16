import React from 'react';
import { render } from '@testing-library/react';
import * as Styled from './styles';
import { GridLayout } from './grid-layout';

test('renders GridLayout with correct styles', () => {
  const { container } = render(
    <GridLayout>
      <div>Child Component</div>
    </GridLayout>
  );

  const gridLayout = container.firstChild as HTMLElement;

  expect(gridLayout).toHaveStyle('padding: 20px');
  expect(gridLayout).toHaveStyle('display: grid');
  expect(gridLayout).toHaveStyle('gap: 20px');
  expect(gridLayout).toHaveStyle('grid-template-columns: repeat(2, 1fr)');
});

test('renders GridLayoutSelector with correct styles', () => {
  const { container } = render(
    <Styled.GridLayoutSelector>
      <option value="option1">Option 1</option>
    </Styled.GridLayoutSelector>
  );

  const selector = container.firstChild as HTMLElement;

  expect(selector).toHaveStyle('margin: 20px');
  expect(selector).toHaveStyle('padding: 10px 12px');
  expect(selector).toHaveStyle('font-size: 16px');
  expect(selector).toHaveStyle('border: 2px solid #828ef9');
  expect(selector).toHaveStyle('border-radius: 4px');
  expect(selector).toHaveStyle('background-color: #fff');
  expect(selector).toHaveStyle('color: #333');
  expect(selector).toHaveStyle('cursor: pointer');
  expect(selector).toHaveStyle('box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)');
});
