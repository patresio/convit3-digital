import type { Event } from '../event'

const events: Event[] = [
  {
    id: '809xoae2dmv-tuad9sr7ce-vw7ysr1egy',
    slug: 'evento-fullstack',
    password: 'password123',
    name: 'Evento de Desenvolvimento Fullstack',
    date: new Date('2024-12-01T10:00:00Z'),
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
        id: '8whlo3mzapv-ebpzw9dpuw7-5z8z4g750y',
        name: 'Alice Silva',
        email: 'alice@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 1
      },
      {
        id: 'pydav03ffi7-5jumufr9sfh-3o6yxoub3t3',
        name: 'Carlos Pereira',
        email: 'carlos@example.com',
        confirmation: false,
        hasCompanions: false,
        quantityCompanions: 0
      },
      {
        id: 'tu82ipxqpbe-w54bzt1x4g-1bwa8siig3p',
        name: 'Beatriz Lima',
        email: 'beatriz@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 2
      }
    ]
  },
  {
    id: 'lz3isrhzq6b-b018vgum1ov-vmzaip3tlr',
    slug: 'evento-js-avancado',
    password: 'js2024',
    name: 'Workshop Avançado de JavaScript',
    date: new Date('2024-11-20T15:00:00Z'),
    location: 'Rio de Janeiro, RJ',
    description: 'Um workshop avançado para programadores JavaScript.',
    image:
      'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
    bgImage:
      'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
    expectedAudience: 100,
    guests: [
      {
        id: 'p34xzfq4gi-k8o11o3iq6i-7s0k453vt7b',
        name: 'Eduardo Santos',
        email: 'eduardo@example.com',
        confirmation: true,
        hasCompanions: false,
        quantityCompanions: 0
      },
      {
        id: 'gwt56iykbts-2ckjtuqfn3b-ktjm88g3pep',
        name: 'Fernanda Costa',
        email: 'fernanda@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 1
      }
    ]
  },
  {
    id: 'kxre812frxa-aaktd3me9l-e5pn07ddovn',
    slug: 'evento-dev-frontend',
    password: 'front123',
    name: 'Bootcamp de Desenvolvimento Frontend',
    date: new Date('2024-11-15T09:00:00Z'),
    location: 'Belo Horizonte, MG',
    description: 'Aprenda a criar interfaces incríveis e responsivas.',
    image:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
    bgImage:
      'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
    expectedAudience: 150,
    guests: [
      {
        id: '99drawk4jqb-1aojptb4z68-pz2aea6o5m',
        name: 'Gabriela Rocha',
        email: 'gabriela@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 1
      },
      {
        id: 'ui1h1o4dmie-mgtimn5kzbi-6ovt6ryy1n7',
        name: 'Hugo Nogueira',
        email: 'hugo@example.com',
        confirmation: false,
        hasCompanions: false,
        quantityCompanions: 0
      },
      {
        id: '7g0ac2zffv3-bj2w25xuzsp-iavbgwi3p4',
        name: 'Isabela Martins',
        email: 'isabela@example.com',
        confirmation: true,
        hasCompanions: false,
        quantityCompanions: 0
      }
    ]
  },
  {
    id: 'b2wznpt7ym-34mz652nv83-rsqnxmi0bvs',
    slug: 'casamento-alberto-marina',
    password: 'casamento2024',
    name: 'Casamento do Alberto e Marina',
    date: new Date('2024-11-25T16:00:00Z'),
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
        id: 'c8063ly75mp-aalwp0ptyse-rvik8jt4sz8',
        name: 'Bruno Cardoso',
        email: 'bruno@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 1
      },
      {
        id: 's6r3f20izzt-7rv2774mn3k-sncjlbnwqc',
        name: 'Carla Mendes',
        email: 'carla@example.com',
        confirmation: true,
        hasCompanions: false,
        quantityCompanions: 0
      }
    ]
  },
  {
    id: '4c5c2x2qs7h-0f4kffjae6a-ewyxspg0r8',
    slug: 'aniversario-joao',
    password: 'joao2024',
    name: 'Aniversário do João - 30 Anos',
    date: new Date('2024-12-05T18:00:00Z'),
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
        id: '20xwgkapixj-pxn1i6b3wh-jfqv33elup9',
        name: 'Maria Souza',
        email: 'maria@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 2
      },
      {
        id: 'siqtvdejb5l-eo3hb84i06o-bu6lygsqjmp',
        name: 'José Almeida',
        email: 'jose@example.com',
        confirmation: false,
        hasCompanions: false,
        quantityCompanions: 0
      }
    ]
  },
  {
    id: '8l212pv5uik-piyf459cp1-963i2ixzft',
    slug: 'inauguracao-loja-estrela',
    password: 'estrela2024',
    name: 'Inauguração da Loja Estrela',
    date: new Date('2024-12-10T09:00:00Z'),
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
        id: 'x5r4pz9sm3n-fbf4j4kpypr-sd7jlbryugs',
        name: 'Cláudia Lima',
        email: 'claudia@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 3
      },
      {
        id: 'usmv6mj2q4-1a9ri3jdetj-0568bqzwcf6b',
        name: 'Ricardo Barbosa',
        email: 'ricardo@example.com',
        confirmation: true,
        hasCompanions: false,
        quantityCompanions: 0
      }
    ]
  },
  {
    id: '6dpm58cn874-2evh20q9ib6-ixq5ufj8u5e',
    slug: 'reuniao-familia-oliveira',
    password: 'familia2024',
    name: 'Reunião da Família Oliveira',
    date: new Date('2024-12-15T12:00:00Z'),
    location: 'Salvador, BA',
    description: 'Reunião de fim de ano da família Oliveira.',
    image:
      'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
    bgImage:
      'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
    expectedAudience: 50,
    guests: [
      {
        id: '3851j2moa9f-kfbidsir45-e5ukmzy9eao',
        name: 'Thiago Oliveira',
        email: 'thiago@example.com',
        confirmation: true,
        hasCompanions: true,
        quantityCompanions: 4
      },
      {
        id: '45eptrg71bw-z3dbdx8v5pl-8p59ayvcbwv',
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
