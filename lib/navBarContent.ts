export type NavItem = {
  title: string
  href: string
  ariaLabel: string
  description: string
  img_url?: string
}

export const navItems: Record<string, NavItem[]> = {
  groupe: [
    {
      title: "A propos",
      href: "/groupe/aPropos",
      ariaLabel: "Lire la page à propos",
      description: "Description de l'entreprise, de son histoire, de ses valeurs et de ses engagements",
    },
    {
      title: "Équipe dirigeante",
      href: "/groupe/equipeDirigeante",
      ariaLabel: "Lire la page équipe dirigeante",
      description: "Présentation de l'équipe dirigeante",
    },
    {
      title: "Stratégie",
      href: "/groupe/stategie",
      ariaLabel: "Lire la page stratégie",
      description: "La stratégie de l'entreprise",
    },
    {
      title: "Démarche RSE",
      href: "/groupe/demarcheRse",
      ariaLabel: "Lire la page démarche RSE",
      description: "Nos engagements en matière de responsabilité sociétale et environnementale",
    },
    {
      title: "Engagements clients",
      href: "/groupe/engagementsClients",
      ariaLabel: "Lire la page engagements clients",
      description: "Nos engagements envers nos clients",
    },
  ],
  secteur: [
    {
      title: "Aéronautique & Spatial",
      href: "/secteur/aeronautiqueSpatial",
      ariaLabel: "Lire la page aéronautique et spatial",
      description: "Nos solutions pour l'aéronautique et le spatial",
      img_url: "/secteur/aero.webp",
    },
    {
      title: "Défense",
      href: "/secteur/defense",
      ariaLabel: "Lire la page défense",
      description: "Nos solutions pour la défense",
      img_url: "/secteur/defense.webp",
    },
    {
      title: "Naval",
      href: "/secteur/naval",
      ariaLabel: "Lire la page naval",
      description: "Nos solutions pour le naval",
      img_url: "/secteur/naval.webp",
    },
    {
      title: "Energie",
      href: "/secteur/energie",
      ariaLabel: "Lire la page énergie",
      description: "Nos solutions pour l'énergie",
      img_url: "/secteur/energie.webp",
    },
    {
      title: "Transport & Biens d'équipement",
      href: "/secteur/transportBiensEquipement",
      ariaLabel: "Lire la page transport et biens d'équipement",
      description: "Nos solutions pour le transport et les biens d'équipement",
      img_url: "/secteur/transport.webp",
    },
    {
      title: "Industrie des procédés",
      href: "/secteur/industrieDesProcedes",
      ariaLabel: "Lire la page industrie des procédés",
      description: "Nos solutions pour l'industrie des procédés",
      img_url: "/secteur/industrie.webp",
    },
  ],
  metiers: [
    {
      title: "R&D et Technologies Innovantes",
      href: "/metiers/RDetTechnologiesInnovantes",
      ariaLabel: "Lire la page R&D et technologies innovantes",
      description: "Notre expertise en R&D et technologies innovantes",
    },
    {
      title: "Conception Produit & Systèmes",
      href: "/metiers/conceptionProduitEtSystemes",
      ariaLabel: "Lire la page conception produit et systèmes",
      description: "Notre expertise en conception produit et systèmes",
    },
    {
      title: "Simulation numérique",
      href: "/metiers/simulationNumerique",
      ariaLabel: "Lire la page simulation numérique",
      description: "Notre expertise en simulation numérique",
    },
    {
      title: "Industrialisation & Outillage",
      href: "/metiers/industrialisationOutillage",
      ariaLabel: "Lire la page industrialisation et outillage",
      description: "Notre expertise en industrialisation et outillage",
    },
    {
      title: "Maintenance SLI / MCO / MRO",
      href: "/metiers/maintenanceSliMcoMro",
      ariaLabel: "Lire la page maintenance SLI MCO MRO",
      description: "Notre expertise en maintenance SLI MCO MRO",
    },
  ],
  carriere: [
    {
      title: "Pourquoi rejoindre INGELIANCE ?",
      href: "/carriere/rejoindre",
      ariaLabel: "Lire la page rejoindre",
      description: "Envie de rejoindre une entreprise dynamique et innovante ?",
    },
    {
      title: "Expérience candidat",
      href: "/carriere/experienceCandidat",
      ariaLabel: "Lire la page expérience candidat",
      description: "Voulez-vous en savoir plus sur le processus de recrutement chez INGELIANCE ?",
    },
    {
      title: "Nos collaborateurs témoignent",
      href: "/carriere/nosCollaborateursTemoignent",
      ariaLabel: "Lire la page nos collaborateurs témoignent",
      description: "Découvrez les témoignages de nos collaborateurs",
    },
    {
      title: "Nos offres",
      href: "/carriere/nosOffres",
      ariaLabel: "Lire la page nos offres",
      description: "Découvrez nos offres d'emploi",
    },
    {
      title: "Candidature spontanée",
      href: "/carriere/candidatureSpontanee",
      ariaLabel: "Lire la page candidature spontanée",
      description: "Envie de rejoindre INGELIANCE ?",
    },
  ],
}

export const navItemsSolo: NavItem[] = [
  {
    title: "actualites",
    href: "/actualites",
    ariaLabel: "Lire la page actualités",
    description: "Toutes les actualités de l'entreprise",
  },
  {
    title: "contact",
    href: "/contact",
    ariaLabel: "Lire la page contact",
    description: "Vous avez un problème d'ingénerie ? Contactez-nous, nous avons la solution",
  },
]
