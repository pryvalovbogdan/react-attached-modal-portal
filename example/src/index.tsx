import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AttachedModal } from 'react-attached-modal-portal';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const App = () => {
  const [selected, setSelected] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  return (
    <AttachedModal
      isOpen={isOpen}
      buttonRect={ref.current?.getBoundingClientRect()}
      setIsOpen={setIsOpen}
      buttonOpenModal={<button>Open modal</button>}
      OpenModalBtn={
        <button ref={ref} onClick={() => setIsOpen(true)}>
          Open modal
        </button>
      }
      Header={
        <div>
          <div>
            Modal header
            <button onClick={() => setIsOpen(false)} aria-label='Close' color='neutral' size='medium' shape='square'>
              X
            </button>
          </div>
        </div>
      }
    >
      <div>
        {[...new Array(selected)].map((_value, index) => (
          <div key={index}>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et.
          </div>
        ))}
      </div>
      <div>
        <button autoFocus onClick={() => setSelected(0)} color='tint'>
          Clear
        </button>
      </div>
    </AttachedModal>
  );
};

root.render(
  <React.StrictMode>
    <div>
      <h2>Default counter</h2>
    </div>
    <hr />
    <App />
    <div>
      <h2>Counter with predefined value</h2>
    </div>
  </React.StrictMode>,
);
