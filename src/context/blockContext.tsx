// BlockContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import blockConfig from '../config/blockConfig';
import { BlockConfig, BlockContextType } from '../type/type';


// Initialisation du contexte avec un type par défaut vide
const BlockContext = createContext<BlockContextType | undefined>(undefined);

// Typage des props pour BlockProvider
interface BlockProviderProps {
  children: ReactNode;
}

export const BlockProvider: React.FC<BlockProviderProps> = ({ children }) => {
  const [blocks, setBlocks] = useState<BlockConfig[]>(blockConfig);

  // Fonction pour mettre à jour les blocs
  const updateBlockConfig = (newConfig: BlockConfig[]) => {
    setBlocks(newConfig);
  };

  return (
    <BlockContext.Provider value={{ blocks, updateBlockConfig }}>
      {children}
    </BlockContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte des blocs
export const useBlockContext = () => {
  const context = useContext(BlockContext);
  if (!context) {
    throw new Error('useBlockContext doit être utilisé dans un BlockProvider');
  }
  return context;
};
