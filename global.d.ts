import type * as React from 'react';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'nexvio-chat-bot': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { publicKey?: string }, HTMLElement>;
        'nexvio-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { id?: string }, HTMLElement>;
      }
    }
  }
}
