import signImg from "../assets/logo/sign.png";

// blockConfig.ts
const blockConfig = [
  {
    name: "block1",
    data: {
      category: "Category for Block 1",
      title: "Title for Block 1",
      description: "Description for Block 1",
      image: "https://via.placeholder.com/1920x1080.png?text=Background+Image",
      buttonTitle: "Call to action",
    },
  },
  {
    name: "block2",
    data: {
      category: "Category for Block 2",
      title: "Title for Block 2",
      description: "Description for Block 2",
      image: "https://via.placeholder.com/1920x1080.png?text=Background+Image",
      buttonTitle: "Call to action",
    },
  },
  {
    name: "block3",
    data: {
      category: "Category for Block 3",
      title: "Title for Block 3",
      description: "Description for Block 3",
      image: "https://via.placeholder.com/1920x1080.png?text=Image",
      buttonTitle: "Call to action",
    },
  },
  {
    name: "block4",
    data: {
      buttonTitle: "Button Title for Block 4",
      title: "Title for Block 4",
      description: "Description for Block 4",
      image: "https://via.placeholder.com/1920x1080.png?text=Background+Image",
    },
  },
  {
    name: "block5",
    data: {
      miniTitle: "Sous-titre exemple",
      title: "Title for Block 5",
      description: "Description for Block 5",
      redirection: "some-link",
      buttonTitle: "Button Title for Block 5",
      block5: [
        {
          data: [
            { title: "Titre info 1", data: "Donnée 1" },
            { title: "Titre info 2", data: "Donnée 2" },
            { title: "Titre info 3", data: "Donnée 3" },
            { title: "Titre info 4", data: "Donnée 4" },
          ],
        },
      ],
    },
  },
  {
    name: "block6",
    data: {
      image: "https://via.placeholder.com/1920x1080.png?text=Background+Image",
      miniTitle: "Sous-titre exemple",
      title: "Title for Block 5",
      description: "Description for Block 5",
      redirection: "some-link",
      buttonTitle: "Button Title for Block 5",
      block5: [
        {
          data: [
            { title: "Titre info 1", data: "Donnée 1" },
            { title: "Titre info 2", data: "Donnée 2" },
            { title: "Titre info 3", data: "Donnée 3" },
            { title: "Titre info 4", data: "Donnée 4" },
          ],
        },
      ],
    },
  },
  {
    name: "block7",
    data: {
      title: "Title for Block 7",
      subTitle: "SubTitle for Block 7",
      description: "Description for Block 7",
      buttonTitle: "Button Title for Block 7",
      redirection: "some-link",
      cards: [
        {
          title: "Prix d’achat",
          value: "300,000 €",
        },
        {
          title: "Rendement Brut",
          value: "5%",
        },
        {
          title: "Potentielle plus-value 5 ans",
          value: "10%",
        },
        {
          title: "Revenus locatif annuels estimés",
          value: "+15,000€",
        },
      ],
    },
  },
  {
    name: "block8",
    data: {
      title: "Title for Block 8",
      description: "Description for Block 8",
      buttonTitle: "Button Title for Block 8",
      redirection: "some-link",
      cards: [
        {
          id: 1,
          title: "Titre en deux lignes maximum",
          text: "Description en 3 lignes maximum",
          image:
            "https://via.placeholder.com/600x600.png?text=Image+Placeholder",
        },
        {
          id: 2,
          title: "Titre en deux lignes maximum",
          text: "Description en 3 lignes maximum",
          image:
            "https://via.placeholder.com/600x600.png?text=Image+Placeholder",
        },
        {
          id: 3,
          title: "Titre en deux lignes maximum",
          text: "Description en 3 lignes maximum",
          image:
            "https://via.placeholder.com/600x600.png?text=Image+Placeholder",
        },
      ],
    },
  },
  {
    name: "block9",
    data: {
      title: "Title for Block 9",
      miniTitle: "Mini Title for Block 9",
      description: "Description for Block 9",
      buttonTitle: "Button Title for Block 9",
      redirection: "some-link",
      cards: [
        {
          title: "Title 1",
          value: "Donnée 1",
        },
        {
          title: "Durée investissement",
          value: "5 ans",
        },
        {
          title: "Montant mininimum",
          value: "10,000€",
        },
        {
          title: "Nombre d’investisseurs",
          value: "150",
        },
      ],
      achieved: 50000,
      goal: 100000,
    },
  },
  {
    name: "block10",
    data: {
      title: "Title for Block 10",
      description: "Description for Block 10",
      images: [
        {
          src: "https://via.placeholder.com/600x600.png?text=Image+Placeholder",
          alt: "Icon 1",
        },
        {
          src: "https://via.placeholder.com/600x600.png?text=Image+Placeholder",
          alt: "Icon 2",
        },
        {
          src: "https://via.placeholder.com/600x600.png?text=Image+Placeholder",
          alt: "Icon 3",
        },
        {
          src: "https://via.placeholder.com/600x600.png?text=Image+Placeholder",
          alt: "Icon 4",
        },
      ],
    },
  },
  {
    name: "block11",
    data: {
      title: "Title for Block 11",
      description: "Description for Block 11",
      block11: [
        {
          documentName: "Document 1",
          downloadUrl: "https://example.com/download1",
          imageUrl:
            "https://via.placeholder.com/1920x1080.png?text=Background+Image",
        },
        {
          documentName: "Document 2",
          downloadUrl: "https://example.com/download2",
          imageUrl:
            "https://via.placeholder.com/1920x1080.png?text=Background+Image",
        },
        {
          documentName: "Document 3",
          downloadUrl: "https://example.com/download3",
          imageUrl:
            "https://via.placeholder.com/1920x1080.png?text=Background+Image",
        },
        {
          documentName: "Document 4",
          downloadUrl: "https://example.com/download4",
          imageUrl:
            "https://via.placeholder.com/1920x1080.png?text=Background+Image",
        },
      ],
    },
  },
  {
    name: "block12",
    data: {
      title: "Titre mettant en avant la foire aux questions",
      description: "déscription de maximum 2 lignes",
      buttonTitle: "Call to action for Block 12",
      redirection: "/",
      pitch: "Pitch du Projet",
    },
  },
  {
    name: "block13",
    data: {
      title: "mini-titre",
      miniTitle: "Titre mettant en avant le potentiel de l’invest",
      description: "Description de 5 lignes maximum",
    },
  },

  {
    name: "block14",
    data: {
      block14: [
        {
          title: "Le titre du mot de la personne",
          texte: "Texte de la personne en maximum 6 lignes",
          imageSignUrl: signImg,
          firstName: "Prénom",
          lastName: "Nom",
          job: "Parcours de la personne en 3 lignes maximum",
          parcours: "Parcours de la personne en 3 lignes maximum",
          imageBackground:
            "https://via.placeholder.com/1920x1080.png?text=Background+Image",
        },
      ],
    },
  },
  {
    name: "block15",
    data: {
      miniTitle: "Mini Title for Block 15",
      buttonTitle: "Call to action",
      title: "Titre incitant à l’action",
      description: "Description mettant en avant le titre en maximim 3 lignes",
    },
  },
  {
    name: "block16",
    data: {
      block16: [
        {
          title: "Titre mettant en avant les avis des clients/collab’",
          description: "Déscription de maxium 4 lignes",
          cards: [
            {
              id: 1,
              title: "Immobilier d’exception",
              image:
                "https://via.placeholder.com/1920x1080.png?text=Background+Image",
            },
            {
              id: 2,
              title: "Immobilier d’exception",
              image:
                "https://via.placeholder.com/1920x1080.png?text=Background+Image",
            },
            {
              id: 3,
              title: "Immobilier d’exception",
              image:
                "https://via.placeholder.com/1920x1080.png?text=Background+Image",
            },
            {
              id: 4,
              title: "Immobilier d’exception",
              image:
                "https://via.placeholder.com/1920x1080.png?text=Background+Image",
            },
            {
              id: 5,
              title: "Immobilier d’exception",
              image:
                "https://via.placeholder.com/1920x1080.png?text=Background+Image",
            },
          ],
        },
      ],
    },
  },

  {
    name: "block17",
    data: {
      block17: {
        images: [
          "https://via.placeholder.com/1920x1080.png?text=Image+1",
          "https://via.placeholder.com/1920x1080.png?text=Image+2",
          "https://via.placeholder.com/1920x1080.png?text=Image+3",
        ],
      },
    },
  },
];

export default blockConfig;
