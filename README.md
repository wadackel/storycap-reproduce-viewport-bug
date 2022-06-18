# storycap-reproduce-viewport-bug

This is a repository for reproducing bugs when using multiple viewports in [storycap](https://github.com/reg-viz/storycap).

## Setup

```bash
$ yarn
```

## How to reproduce

Add multiple variations to `viewports`.

```javascript
export const parameters = {
  screenshot: {
    viewports: {
      iPhone11: 'iPhone 11',
      iPad: 'iPad',
    },
  },
};
```

Prepare a Story that includes CSS Animation.

```javascript
import React from 'react';
import './Test.css';

const Test = () => {
  return <div className="test" />;
};

export default {
  component: Test,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {},
};
```

```css
@keyframes move {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.test {
  width: 100px;
  height: 100px;
  background: black;
  animation: move 2s linear infinite;
}
```

Take a screenshot with storycap.

```bash
# storycap http://localhost:6006 --disableCssAnimation --serverCmd "start-storybook -p 6006 -s public --ci" -p 1
$ yarn test
```

## Actual Behavior

The bug occurs when using a viewport with `hasTouch` or `isMobile`, or when a page reload is performed using the `reloadAfterChangeViewport` flag.

The `disableCssAnimation` is not enabled for shots taken after a page reload.

| `Default_iPad`                      | `Default_iPhone11`                      |
| ----------------------------------- | --------------------------------------- |
| ![](./actual/Test/Default_iPad.png) | ![](./actual/Test/Default_iPhone11.png) |

## Expected Behavior (patched)

| `Default_iPad`                        | `Default_iPhone11`                        |
| ------------------------------------- | ----------------------------------------- |
| ![](./expected/Test/Default_iPad.png) | ![](./expected/Test/Default_iPhone11.png) |
