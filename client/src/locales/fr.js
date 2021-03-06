export default {
  app: {
    appHeader: {
      logout: 'Déconnexion',
    },
  },

  dashboard: {
    layout: {
      title: 'Tableau de bord',
    },

    page: {
      activationInstructions: 'Nous avons envoyé un courriel à {email}.<br />Suivez les instructions qui s’y trouvent pour avoir accès à vos projets par la suite.',
      backlog: 'en sélectionner depuis la liste d’attente',
      createTask: 'Ajouter des tâches pour aujourd’hui',
      or: 'ou',
      projectsInProgress: 'Projets en cours',
      tasksForToday: '{count} tâche pour aujourd’hui | {count} tâches pour aujourd’hui',
    },
  },

  errors: {
    _: {
      login_failed: 'Oups ! Nous n’avons pas pu vous connecter, vos identifiants ne semblent pas valides.',
      missing_endpoint: 'Il semble que vous tentiez d’accéder à des ressources inconnues. Vous n’y êtes probablement pour rien et nous en sommes désolés. Nous faisons de notre mieux pour régler ce problème au plus vite !',
      unauthorized: 'Vous n’avez pas la permission d’effectuer cette action, veuillez rafraîchir la page et vous reconnecter.',
    },

    project: {
      parameter_missing: 'Un projet est nécessaire.',
      record_not_found: 'Ce projet ne semble pas exister.',

      due_at: {
        cannot_be_before_started_at: 'La date d’échéance ne peut précéder la date d’aujourd’hui.',
        cannot_be_set: 'La date d’échéance ne peut pas être indiquée pour le moment.',
        must_be_set: 'La date d’échéance est nécessaire.',
        parameter_missing: 'La date d’échéance est nécessaire.',
      },

      finished_at: {
        cannot_be_after_today: 'La date de fin ne peut être au-delà de la date d’aujourd’hui.',
        cannot_be_before_started_at: 'La date d’échéance ne peut pas précéder la date de début de tâche.',
        cannot_be_set: 'La date de fin ne peut pas être indiquée pour le moment.',
        must_be_set: 'La date de fin est nécessaire.',
        parameter_missing: 'La date de fin est nécessaire.',
      },

      name: {
        blank: 'Le nom est nécessaire.',
        parameter_missing: 'Le nom est nécessaire.',
        too_long: 'Le nom est trop long (100 caractères maximum).',
      },

      slug: {
        invalid: 'Quelque chose s’est mal passé lors de l’enregistrement du projet, son nom contient-il des caractères particuliers ? Veuillez essayer avec un autre nom.',
        taken: 'Ce nom est proche de celui d’un autre projet, veuillez en essayer un autre.',
      },

      state: {
        invalid_transition: 'Vous tentez d’accomplir une action que vous ne devriez pas pouvoir faire normalement, nous en sommes désolé·es !',
        reached_max_started: 'Vous ne pouvez pas démarrer plus que trois projets.',
      },
    },

    task: {
      parameter_missing: 'Une tâche est nécessaire.',
      record_not_found: 'Cette tâche n’existe pas.',

      label: {
        parameter_missing: 'Le libellé est nécessaire.',
      },

      state: {
        invalid_transition: 'Vous tentez d’accomplir une action que vous ne devriez pas pouvoir faire normalement, nous en sommes désolé·es !',
      },
    },

    user: {
      parameter_missing: 'Un utilisateur/une utilisatrice est nécessaire.',
      record_not_found: 'L’utilisateur/utilisatrice n’existe pas.',

      email: {
        parameter_missing: 'Le nom d’utilisateur/utilisatrice est nécessaire.',
        taken: 'Un compte existe déjà avec cette adresse courriel.',
      },

      password: {
        parameter_missing: 'Un nom d’utilisateur/utilisatrice est nécessaire.',
      },

      username: {
        exclusion: 'Ce nom d’utilisateur/utilisatrice est un mot réservé.',
        invalid: 'Le nom d’utilisateur/utilisatrice ne remplit pas les conditions demandées.',
        parameter_missing: 'Un nom d’utilisateur/utilisatrice est nécessaire.',
        taken: 'Ce nom d’utilisateur/utilisatrice n’est pas disponible.',
        too_long: 'Ce nom d’utilisateur/utilisatrice est trop long (max. 25 caractères).',
      },
    },
  },

  general: {
    defaultMenu: {
      dashboard: 'Tableau de bord',
      projects: 'Projets',
      tasks: 'Tâches',
    },

    homeLayout: {
      title: 'Maîtrisez votre temps',
      intro: 'Concentrez vos efforts sur ce qui est vraiment essentiel, ne dites plus jamais « Je n’ai pas le temps ».',

      detailsTitle: 'Un gestionnaire de temps éthique et respectueux',
      timeTitle: 'Le temps est une ressource précieuse',
      timeDetails: 'Le temps perdu ne se rattrape pas mais il n’est jamais trop tard pour l’utiliser du mieux possible. Si vous trouvez qu’il est temps de modifier un peu vos habitudes, Lessy va justement vous aider à avancer sur cette voie.',
      lessTitle: 'Moins de charge cognitive, moins de stress',
      lessDetails: 'Lessy vous aide dans vos habitudes quotidiennes en vous présentant ce que vous pouvez probablement faire en premier.<br />Vous êtes déjà exténué·e de votre journée ? Ne vous en faites pas, chacun va à son rythme et Lessy le prend en compte.',
      communityTitle: 'Créé par une communauté ouverte',
      communityDetails: 'Votre temps est trop précieux pour être confié à des entreprises privées. Lessy est un logiciel libre créé par une communauté accueillante d’utilisateurs et utilisatrices qui partagent vos préoccupations.<br /><a href="https://github.com/marienfressinaud/lessy/blob/master/CONTRIBUTING.md"> Vous aussi, participez au projet Lessy pour le rendre encore meilleur !</a>',

      moreTitle: 'Aller plus loin',
      exploreTitle: 'Explorer le code source',
      exploreDetails: 'parce que Lessy est <a href="https://github.com/marienfressinaud/lessy/blob/master/LICENSE">un logiciel libre</a> et le sera toujours.',
      hostTitle: 'Hébergez-le',
      hostDetails: 'Vos données vous appartiennent et nous ne souhaitons pas qu’elles soient stockées dans un service centralisé.',
      donateTitle: 'Faire un don',
      donateDetails: 'Cela nous aidera à maintenir le service ouvert pour tout le monde.',

      madeWithLove: 'Créé avec ♥ par de supers <a href="https://github.com/marienfressinaud/lessy/blob/master/CONTRIBUTORS.md">contributeurs et contributrices</a>.',
      greetings: 'Passez une bonne journée !',
    },

    loadingLayout: {
      inProgress: 'Chargement en cours, veuillez patienter…',
    },

    notFoundLayout: {
      home: 'Accueil',
      intro: 'Il semble que cette page n’existe pas…',
      title: 'Page introuvable',
    },

    welcomeHeader: {
      lessy: 'Lessy',
    },
  },

  ly: {
    form: {
      input: {
        optional: 'facultatif',
        revealPassword: 'Montrer',
      },

      select: {
        moreOptions: '+1 additional option | +{number} additional options',
        unselect: 'Unselect',
      },
    },
  },

  projects: {
    card: {
      shouldAddTasks: 'Des tâches inachevées devraient être associées pour vous assurer que le projet avance.',
      tasksCount: '{finishedCount} tâche sur {totalCount} achevée | {finishedCount} tâches sur {totalCount} achevées',
    },

    cardDeck: {
      empty: 'Aucun projet',
      emptyLink: 'Démarrer un projet de la boîte de réception',
    },

    createForm: {
      cancel: 'Annuler',
      submit: 'Créer',
      nameCaption: 'Maximum 100 caractères.',
    },

    editForm: {
      cancel: 'Annuler',
      descriptionLabel: 'Description',
      descriptionCaption: 'La description peut être rédigée en Markdown',
      dueLabel: 'Date d’échéance',
      nameLabel: 'Nom',
      nameCaption: 'Maximum 100 caractères.',
      submit: 'Valider',
    },

    finishForm: {
      cancel: 'Non, pas encore',
      finishedLabel: 'Terminé le',
      finishedCaption: 'Cette date ne peut pas être après la date d’aujourd’hui',
      submit: 'J’ai fini !',
    },

    finishPage: {
      intro: 'Vraiment ? Vous avez achevé le projet <b>{projectName}</b> ? C’est génial !<br />Dites-nous quand vous l’avez terminé :',
    },

    inboxPage: {
      createProject: 'Créer un projet',
      finishedProjects: 'Projets terminés',
      futureProjects: 'Projets à venir',
      hideFinishedProjects: 'Masquer votre projet | Masquer vos projets',
      projectsPlaceholder: 'Vous n’avez encore aucun projet, sur quoi travaillez-vous ?',
      seeFinishedProjects: 'Afficher votre projet achevé | Afficher vos {count} projets achevés',
    },

    item: {
      pausedOn: 'mis en pause le {date}',
      tasksCount: '{finishedCount} tâche sur {totalCount} achevée | {finishedCount} tâches sur {totalCount} achevées',
    },

    itemFinished: {
      finishedLabel: 'terminé le {date}',
      tasksCount: '{finishedCount} tâche sur {totalCount} achevée | {finishedCount} tâches sur {totalCount} achevées',
    },

    layout: {
      inbox: 'Boîte d’entrée',
      project: 'Projet',
      title: 'Projets',
    },

    showPage: {
      associatedTasks: 'Tâches associées',
      edit: 'Modifier',
      noDescription: 'Ce projet n’a pas encore de description.',
      timeline: 'Chronologie',
    },

    startForm: {
      cancel: 'Annuler',
      dueLabel: 'Date d’échéance',
      dueCaption: 'La date d’échéance doit être postérieure à la date d’aujourd’hui',
      nameLabel: 'Nom',
      submit: 'Démarrer maintenant',
    },

    timeline: {
      diff: '{days} jour | {days} jours',
      dueOn: 'date d’échéance : {date}',
      dueToday: 'date d’échéance : aujourd’hui',
      finish: 'Terminer',
      finishedOn: 'terminé le {date}',
      late: 'en retard',
      notStarted: 'pas débuté',
      pause: 'Mettre en pause',
      pausedOn: 'mis en pause le {date}',
      reachedMaxInProgress: 'Vous avez déjà atteint le nombre maximum de projets entamés.',
      restart: 'Démarrer à nouveau',
      start: 'Démarrer',
      startedOn: 'Débuté le {date}',
      untilDueDate: 'avant la date d’échéance',
    },
  },

  tasks: {
    attachProjectForm: {
      cancel: 'Annuler',
      projectLabel: 'Projet',
      submit: 'Attacher',
    },

    backlogPage: {
      tasksNumber: '{count} tâche en file d’attente | {count} tâches en file d’attente',
    },

    createForm: {
      cancel: 'Annuler',
      submit: 'Créer',
      warningTooMany: 'Vous pourriez rencontrer des difficultés pour mener à bien les tâches si vous tentez d’en entreprendre un trop grand nombre.',
    },

    editForm: {
      cancel: 'Annuler',
      submit: 'Mettre à jour',
    },

    item: {
      abandon: 'Abandonner',
      attachToProject: 'Attacher à un projet',
      planned: 'planifié le {date}',
      edit: 'Modifier',
      markAsDone: 'Marquer comme effectuée',
      markAsUndone: 'Marquer comme à faire',
      plan: 'Planifier pour aujourd’hui',
      replan: 'Planifier à nouveau pour aujourd’hui',
      replanned: 'Vous avez déjà planifié cette tâche une fois | Vous avez planifié cette tâche {count} fois, que pensez-vous de l’idée de la scinder en plusieurs parties ou de la renommer afin qu’elle soit plus facile à accomplir ?',
      startedSinceWeeks: 'Vous avez créé cette tâche il y a une semaine | Vous avez créé cette tâche il y a {count} semaines, peut-être est-il temps de l’abandonner, qu’en pensez-vous ?',
      transformInProject: 'Transformer en projet',
    },

    list: {
      empty: 'Aucune tâche ici…',
    },

    layout: {
      backlog: 'Liste d’attente',
      statistics: 'Statistiques',
      title: 'Tâches',
    },

    modals: {
      attachProjectTitle: 'Attacher la tâche à un projet',
      cancel: 'Annuler',
      confirmAbandon: 'La tâche « {label} » sera marquée comme abandonnée et disparaîtra de la liste. Confirmez-vous ?',
      confirmAbandonTitle: 'Abandonner la tâche',
      submitAbandon: 'Confirmer l’abandon',
      transformInProjectTitle: 'Transformer la tâche en projet',
    },

    statisticsPage: {
      chartName: 'Statistiques des tâches',
    },
  },

  users: {
    activateForm: {
      passwordLabel: 'Mot de passe',
      submit: 'Activez votre compte',
      usernameLabel: 'Nom d’utilisateur/utilisatrice',
      usernameCaption: 'Utilisez seulement des minuscules, le caractère soulignement et/ou le trait d’union (25 caractères maximum).',
    },

    activateLayout: {
      intro: 'Pour continuer, vous devez choisir un nom d’utilisateur/utilisatrice unique et un mot de passe qui vous permettront vous connecter à votre compte par la suite.',
      title: 'Activez votre compte',
    },

    loginForm: {
      passwordLabel: 'Mot de passe',
      submit: 'Se connecter',
      register: 'Créer un compte',
      usernameLabel: 'Nom d’utilisateur/utilisatrice',
    },

    loginLayout: {
      title: 'Se connecter',
    },

    registerForm: {
      emailLabel: 'Adresse courriel',
      emailPlaceholder: 'dupuis@morizeau.com',
      login: 'Vous avez déjà un compte ? Connectez-vous',
      submit: 'Créez votre compte',
    },
  },
}
