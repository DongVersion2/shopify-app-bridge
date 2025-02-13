

import {Modal, TitleBar, useAppBridge} from '@shopify/app-bridge-react';

export function MyModal() {
  const shopify = useAppBridge();

  shopify.config = {
    apiKey: process.env.SHOPIFY_API_KEY
  }

  return (
    <>
      <button onClick={() => shopify.modal.show('my-modal')}>Open Modal</button>
      <Modal id="my-modal">
        <p>Message</p>
        <TitleBar title="Title">
          <button variant="primary">Label</button>
          <button onClick={() => shopify.modal.hide('my-modal')}>Label</button>
        </TitleBar>
      </Modal>
    </>
  );
}

// export function MyModal() {
// return 1;
// }

