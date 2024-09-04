// BlockRenderer.tsx
import React from 'react';
import { useBlockContext } from '../context/blockContext';

// Continuez à importer les blocs jusqu'à Block17
import { BlockConfig } from '../type/type'; // Importer le type BlockConfig
import { Block1 } from '../components/block1';
import { Block2 } from '../components/block2';
import { Block3 } from '../components/block3';
import { Block4 } from '../components/block4';
import Block17 from '../components/block17';
import { Block5 } from '../components/block5';
import { Block6 } from '../components/block6';
import { Block7 } from '../components/block7';
import { Block8 } from '../components/block8';
import { Block9 } from '../components/block9';
import { Block10 } from '../components/block10';
import { Block11 } from '../components/block11';
import { Block12 } from '../components/block12';
import { Block13 } from '../components/block13';
import { Block14 } from '../components/block14';
import { Block15 } from '../components/block15';
import { Block16 } from '../components/block16';


// Mapper les noms des blocs aux composants correspondants
const blockComponents: { [key: string]: React.FC<any> } = {
  block1: Block1,
  block2: Block2,
  block3: Block3,
  block4: Block4,
  block5: Block5,
  block6: Block6,
  block7: Block7,
  block8: Block8,
  block9: Block9,
  block10: Block10,
  block11: Block11,
  block12: Block12,
  block13: Block13,
  block14: Block14,
  block15: Block15,
  block16: Block16,
  block17: Block17,
};

const BlockRenderer: React.FC = () => {
  const { blocks } = useBlockContext();

  return (
    <>
      {blocks.map((blockConfig: BlockConfig, index: number) => {
        const { name, data } = blockConfig;
        const BlockComponent = blockComponents[name];
        return BlockComponent ? <BlockComponent key={index} {...data} /> : null;
      })}
    </>
  );
};

export default BlockRenderer;
