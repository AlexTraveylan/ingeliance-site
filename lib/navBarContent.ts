export type NavItem = {
  title: string
  href: string
  description: string
}

export const navItems: Record<string, NavItem[]> = {
  groupe: [
    {
      title: "A propos",
      href: "/groupe/aPropos",
      description: "Description for aPropos",
    },
    {
      title: "Équipe dirigeante",
      href: "/groupe/equipeDirigeante",
      description: "Description for equipeDirigeante",
    },
    {
      title: "Stratégie",
      href: "/groupe/stategie",
      description: "Description for stategie",
    },
    {
      title: "Démarche RSE",
      href: "/groupe/demarcheRse",
      description: "Description for demarcheRse",
    },
    {
      title: "Engagements clients",
      href: "/groupe/engagementsClients",
      description: "Description for engagementsClients",
    },
  ],
  secteur: [
    {
      title: "Aéronautique & Spatial",
      href: "/secteur/aeronautiqueSpatial",
      description: "Description for aeronautiqueSpatial",
    },
    {
      title: "Défense",
      href: "/secteur/defense",
      description: "Description for defense",
    },
    {
      title: "Naval",
      href: "/secteur/naval",
      description: "Description for naval",
    },
    {
      title: "Energie",
      href: "/secteur/energie",
      description: "Description for energie",
    },
    {
      title: "Transport & Biens d'équipement",
      href: "/secteur/transportBiensEquipement",
      description: "Description for transportBiensEquipement",
    },
    {
      title: "Industrie des procédés",
      href: "/secteur/industrieDesProcedes",
      description: "Description for industrieDesProcedes",
    },
  ],
  metiers: [
    {
      title: "R&D et Technologies Innovantes",
      href: "/metiers/RDetTechnologiesInnovantes",
      description: "Description for RDetTechnologiesInnovantes",
    },
    {
      title: "Conception Produit & Systèmes",
      href: "/metiers/conceptionProduitEtSystemes",
      description: "Description for conceptionProduitEtSystemes",
    },
    {
      title: "Simulation numérique",
      href: "/metiers/simulationNumerique",
      description: "Description for simulationNumerique",
    },
    {
      title: "Industrialisation & Outillage",
      href: "/metiers/industrialisationOutillage",
      description: "Description for industrialisationOutillage",
    },
    {
      title: "Maintenance SLI / MCO / MRO",
      href: "/metiers/maintenanceSliMcoMro",
      description: "Description for maintenanceSliMcoMro",
    },
  ],
  carriere: [
    {
      title: "Pourquoi rejoindre INGELIANCE ?",
      href: "/carriere/rejoindre",
      description: "Description for rejoindre",
    },
    {
      title: "Expérience candidat",
      href: "/carriere/experienceCandidat",
      description: "Description for experienceCandidat",
    },
    {
      title: "Nos collaborateurs témoignent",
      href: "/carriere/nosCollaborateursTemoignent",
      description: "Description for nosCollaborateursTemoignent",
    },
    {
      title: "Nos offres",
      href: "/carriere/nosOffres",
      description: "Description for nosOffres",
    },
    {
      title: "Candidature spontanée",
      href: "/carriere/candidatureSpontanee",
      description: "Description for candidatureSpontanee",
    },
  ],
}

export const navItemsSolo: NavItem[] = [
  {
    title: "actualites",
    href: "/actualites",
    description: "Description for actualites",
  },
  {
    title: "contact",
    href: "/contact",
    description: "Description for contact",
  },
]
