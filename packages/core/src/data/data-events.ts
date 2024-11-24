import type { Event } from '../event'
import {} from '../shared'

const events: Event[] = [
  {
    id: 'a83e31ce-ba20-4267-8293-99dbd87c8726',
    slug: 'evento-fullstack',
    password: 'password123',
    name: 'Evento de Desenvolvimento Fullstack',
    date: new Date(new Date('2024-12-01T10:00:00Z')),
    location: 'São Paulo, SP',
    description:
      'Um evento completo para aprender desenvolvimento fullstack do zero.',
    image:
      'https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk',
    bgImage:
      'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
    expectedAudience: 200,
    guests: [
      {
        id: 'd9b3cb9f-2dc3-432f-9583-5470862072c3',
        name: 'Alice Silva',
        email: 'alice@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 1
      },
      {
        id: 'dab6235f-fcc8-46b4-a0f9-0c053df16ead',
        name: 'Carlos Pereira',
        email: 'carlos@example.com',
        confirmation: false,
        hasCompanions: false,
        quantityCompanions: 0
      },
      {
        id: '3eed2119-a147-4366-b846-727cfbf45ba1',
        name: 'Beatriz Lima',
        email: 'beatriz@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 2
      }
    ]
  },
  {
    id: '3eed2119-a147-4366-b846-727cfbf45ba1',
    slug: 'evento-js-avancado',
    password: 'js2024',
    name: 'Workshop Avançado de JavaScript',
    date: new Date(new Date('2024-11-20T15:00:00Z')),
    location: 'Rio de Janeiro, RJ',
    description: 'Um workshop avançado para programadores JavaScript.',
    image:
      'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
    bgImage:
      'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
    expectedAudience: 100,
    guests: [
      {
        id: 'e62ef361-d64a-4ec5-873a-57e99a72aa8b',
        name: 'Eduardo Santos',
        email: 'eduardo@example.com',
        confirmation: true,
        hasCompanions: false,
        quantityCompanions: 0
      },
      {
        id: '96ed00e5-dc50-4e7b-967f-a26b07afdb91',
        name: 'Fernanda Costa',
        email: 'fernanda@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 1
      }
    ]
  },
  {
    id: '20449a23-79b7-4cbe-a85c-99063af3dd22',
    slug: 'evento-dev-frontend',
    password: 'front123',
    name: 'Bootcamp de Desenvolvimento Frontend',
    date: new Date(new Date('2024-11-15T09:00:00Z')),
    location: 'Belo Horizonte, MG',
    description: 'Aprenda a criar interfaces incríveis e responsivas.',
    image:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
    bgImage:
      'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
    expectedAudience: 150,
    guests: [
      {
        id: '788e9478-c44c-4cf2-b206-295718519c1b',
        name: 'Gabriela Rocha',
        email: 'gabriela@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 1
      },
      {
        id: '66f82b16-33ab-460d-af3e-4810ac4b7c24',
        name: 'Hugo Nogueira',
        email: 'hugo@example.com',
        confirmation: false,
        hasCompanions: false,
        quantityCompanions: 0
      },
      {
        id: '4930e017-aecf-4cd7-a0a3-f8cb25fb996e',
        name: 'Isabela Martins',
        email: 'isabela@example.com',
        confirmation: true,
        hasCompanions: false,
        quantityCompanions: 0
      }
    ]
  },
  {
    id: 'c0400700-76c6-40a1-b1b1-c23dd366cb1b',
    slug: 'casamento-alberto-marina',
    password: 'casamento2024',
    name: 'Casamento do Alberto e Marina',
    date: new Date(new Date('2024-11-25T16:00:00Z')),
    location: 'Florianópolis, SC',
    description:
      'Celebração do casamento de Alberto e Marina com amigos e familiares.',
    image:
      'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
    bgImage:
      'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
    expectedAudience: 150,
    guests: [
      {
        id: '5dd89215-0996-435e-ba7d-396612083cc6',
        name: 'Bruno Cardoso',
        email: 'bruno@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 1
      },
      {
        id: '4ba39fdd-632c-47b4-b6db-797650a401db',
        name: 'Carla Mendes',
        email: 'carla@example.com',
        confirmation: true,
        hasCompanions: false,
        quantityCompanions: 0
      }
    ]
  },
  {
    id: 'b1501ae5-833d-43b2-8b48-5d1073c8e290',
    slug: 'aniversario-joao',
    password: 'joao2024',
    name: 'Aniversário do João - 30 Anos',
    date: new Date(new Date('2024-12-05T18:00:00Z')),
    location: 'Curitiba, PR',
    description:
      'Comemoração dos 30 anos de João com amigos próximos e familiares.',
    image:
      'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
    bgImage:
      'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
    expectedAudience: 80,
    guests: [
      {
        id: '570690f4-a018-482f-9e83-f247aa7aa682',
        name: 'Maria Souza',
        email: 'maria@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 2
      },
      {
        id: '6fdc14cf-3404-4996-908d-aaf9b6e6dba3',
        name: 'José Almeida',
        email: 'jose@example.com',
        confirmation: false,
        hasCompanions: false,
        quantityCompanions: 0
      }
    ]
  },
  {
    id: 'c9b68f49-64fe-487b-abf0-877ff0556891',
    slug: 'inauguracao-loja-estrela',
    password: 'estrela2024',
    name: 'Inauguração da Loja Estrela',
    date: new Date(new Date('2024-12-10T09:00:00Z')),
    location: 'Porto Alegre, RS',
    description:
      'Evento de inauguração da nova loja Estrela com brindes e promoções.',
    image:
      'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
    bgImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
    expectedAudience: 300,
    guests: [
      {
        id: '7e2d9640-480b-43c8-8e15-bc6f0d70c68d',
        name: 'Cláudia Lima',
        email: 'claudia@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 3
      },
      {
        id: '31f83341-23a1-48ad-b48b-a27752309878',
        name: 'Ricardo Barbosa',
        email: 'ricardo@example.com',
        confirmation: true,
        hasCompanions: false,
        quantityCompanions: 0
      }
    ]
  },
  {
    id: 'b33a12e2-5b3c-473d-8a2d-b48f0f525738',
    slug: 'reuniao-familia-oliveira',
    password: 'familia2024',
    name: 'Reunião da Família Oliveira',
    date: new Date(new Date('2024-12-15T12:00:00Z')),
    location: 'Salvador, BA',
    description: 'Reunião de fim de ano da família Oliveira.',
    image:
      'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
    bgImage:
      'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
    expectedAudience: 50,
    guests: [
      {
        id: 'a6f8816c-f243-4353-bdd5-309b2c1d2604',
        name: 'Thiago Oliveira',
        email: 'thiago@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 4
      },
      {
        id: '8f99c8b4-1ea7-4c47-a4d1-6541cc9bff11',
        name: 'Letícia Oliveira',
        email: 'leticia@example.com',
        confirmation: true,
        hasCompanions: false,
        quantityCompanions: 0
      }
    ]
  }
]

export default events
