import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AttachedModal, useAttachedModalContext, AttachedModalContextProvider } from 'react-attached-modal-portal';
import './styles/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const App = () => {
  const [selected, setSelected] = useState(5);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLButtonElement>(null);

  const { isMobile, canModalFitBelowButton } = useAttachedModalContext();

  const desktopBackground = canModalFitBelowButton ? 'green' : 'orange';

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
      wrapperStyles={{
        background: isMobile ? 'purple' : desktopBackground,
        color: isMobile ? 'white' : 'black',
      }}
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

root.render(
  <React.StrictMode>
    <div style={{ padding: 10 }}>
      <div>
        <h2>Modal Preview</h2>
      </div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishi
      </div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishi
      </div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishi
      </div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishi
      </div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishi
      </div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishi
      </div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishi
      </div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishi
      </div>
      <hr />
      <AttachedModalContextProvider>
        <App />
      </AttachedModalContextProvider>
    </div>
  </React.StrictMode>,
);
