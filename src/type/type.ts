// types.ts

// Type pour les données de chaque bloc
export interface BlockData {
    title?: string;
    description?: string;
    image?: string;
    pitch?: string;
    category?: string;
    redirection?: string;
    buttonTitle?: string;
    miniTitle?: string;
    block5?: Array<Block5Item>;
    block7?: Block7Data;
    block8?: Block8Data; 
    block9?: Block9Data;
    block10?: Block10Data;
    block11?: Array<Block11Item>;
    block14?: Array<Block14Item>;
    block16?: Array<Block16Item>;
    block17?: Block17Item;
    subTitle?: string;
    
  }

  export interface Block11Item {
    documentName: string;
    downloadUrl: string;
    imageUrl: string;
  }

  export interface Block14Item {
    firstName: string;
    lastName: string;
    job: string;
    parcours: string;
    imageBackground: string;
    title: string;
    texte: string;
    imageSignUrl: string;
  }

  export interface Block16Item {
    title: string;
    description: string;
    cards: CardItem[];
  }

  export interface dataItem {
    title: string;
    data: string;
  }
  
  export interface Block5Item {
    data: dataItem[]; 
  }

  export interface Block7CardItem {
    title: string;
    value: string;
  }
  
  export interface Block7Data {
    title: string;
    category?: string;
    description: string;
    image?: string;
    buttonTitle: string;
    redirection: string;
    miniTitle?: string;
    subTitle?: string;
    cards: Block7CardItem[]; 
  }

  export interface Block8Data {
    title: string;
    description: string;
    buttonTitle: string;
    redirection: string;
    cards: CardItem[];
  }

  export interface Block9CardItem {
    title: string;
    value: string;
  }
  
  export interface Block9Data {
    title: string;
    miniTitle?: string;
    description: string;
    buttonTitle: string;
    redirection: string;
    cards: Block9CardItem[]; 
    achieved: number;
    goal: number;
  }

  export interface Block10ImageItem {
    src: string;
    alt: string;
  }
  
  export interface Block10Data {
    title: string;
    description: string;
    images: Block10ImageItem[]; 
  }

  export interface Block17Item {
    images: string[]; 
  }

  export interface CardItem {
    id: number;
    title: string;
    text?: string;
    image: string; 
  }
  
  // Type pour la configuration d'un bloc
  export interface BlockConfig {
    name: string;
    data: BlockData;
  }
  
  // Type pour le contexte des blocs
  export interface BlockContextType {
    blocks: BlockConfig[];
    updateBlockConfig: (newConfig: BlockConfig[]) => void;
  }
  