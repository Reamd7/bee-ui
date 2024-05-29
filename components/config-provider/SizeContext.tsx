import * as React from 'react';

export type SizeType =
  | 'x-small'
  | 'small'
  | 'middle'
  | 'large'
  | 'x-large'
  | undefined;

const SizeContext = React.createContext<SizeType>(undefined);

export interface SizeContextProps {
  size?: SizeType;
  children?: React.ReactNode;
}

export const SizeContextProvider: React.FC<SizeContextProps> =
  function SizeContextProvider({ children, size }) {
    return (
      <SizeContext.Consumer>
        {originSize => (
          <SizeContext.Provider value={size || originSize}>
            {children}
          </SizeContext.Provider>
        )}
      </SizeContext.Consumer>
    );
  };

export default SizeContext;
