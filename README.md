# react-attached-modal-portal
React modal which attaches to selected parent.
It will automatically calculate is it enough space under the button and place the modal below or above the button.

[![NPM version][npm-image]][npm-url]
![npm-typescript]
[![License][github-license]][github-license-url]

## Installation:

```bash
npm install react-attached-modal-portal --save-dev
```

or

```bash
yarn add -D react-attached-modal-portal
```

![React Modal With Scroll And Mobile View](https://github.com/pryvalovbogdan/react-attached-modal-portal/blob/main/public/attached-modal.gif)

## Usage:

For correct position work of `AttachedModal` you need to pass your `button` and `ref`:

```javascript
import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';

import { AttachedModal } from 'react-attached-modal-portal';

const App = () => {
  const [selected, setSelected] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <AttachedModal
      isOpen={isOpen}
      buttonRect={ref.current?.getBoundingClientRect()}
      setIsOpen={setIsOpen}
      withScroll
      OpenModalBtn={
        <button ref={ref} onClick={() => setIsOpen(true)}>
          Open
        </button>
      }
      Header={
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: 10 }}>
          <span style={{ fontWeight: 'bold' }}>Header</span>
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>
      }
      Footer={
        <div style={{ padding: 10 }}>
          <button autoFocus onClick={() => setSelected(0)}>
            Clear
          </button>
        </div>
      }
    >
      <div style={{ padding: 10, overflow: 'hidden' }}>
        {[...new Array(selected)].map((_value, index) => (
          <div key={index}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishi
          </div>
        ))}
      </div>
    </AttachedModal>
  );
};
```
Other options such as `Header`, `withScroll` etc are optional.
If you pass `withScroll` it will add scroll to the body of the modal and will save the position of scroll after closing modal.

### Props `AttachedModal`:

| Name                    | Type                                                                           | Description                                                                 |
|:------------------------|--------------------------------------------------------------------------------|:----------------------------------------------------------------------------|
| Header                  | `React.ReactNode`                                                              | Header of Modal                                                             |
| Footer                  | `React.ReactNode`                                                              | Footer of Modal                                                             |
| isOpen                  | `boolean`                                                                      | State of Modal                                                              |
| setIsOpen               | `React.Dispatch<React.SetStateAction<boolean>>`                                | Handler to change state of Modal                                            |
| withScroll              | `boolean`                                                                      | Prop to add scroll to the body of Modal with remembering position of scroll |
| wrapperStyles           | `React.CSSProperties`                                                          | Styles for Wrapper                                                          |
| bodyStyles              | `React.CSSProperties`                                                          | Styles for body                                                             |
| buttonRect              | `DOMRect`                                                                      | Button parameters                                                           | 
| OpenModalBtn            | `React.ReactElement`                                                           | Button with which you will open modal                                       |

## If you want to support

Give a ⭐️ to project if you like it!

[npm-url]: https://www.npmjs.com/package/react-attached-modal-portal
[npm-image]: https://img.shields.io/npm/v/react-attached-modal-portal
[github-license]: https://img.shields.io/github/license/pryvalovbogdan/react-attached-modal-portal
[github-license-url]: https://github.com/pryvalovbogdan/react-attached-modal-portal/blob/main/LICENSE
[npm-typescript]: https://img.shields.io/npm/types/react-attached-modal-portal
