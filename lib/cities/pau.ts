import type { CityConfig } from "@/lib/types"

// PAU (64) — Béarn, Nouvelle-Aquitaine.
// Contenu unique, écrit pour Pau et sa région. NE PAS réutiliser tel quel
// pour une autre ville : le contexte local (quartiers, essences, climat,
// règles) doit être réécrit pour chaque site (règle anti-duplication SEO).
//
// ⚠️ phoneDisplay / phoneHref = PLACEHOLDER. À remplacer par le numéro de
// suivi Twilio avant la mise en ligne.

export const pau: CityConfig = {
  slug: "pau",
  city: "Pau",
  inCity: "à Pau",
  dept: "Pyrénées-Atlantiques",
  deptCode: "64",
  region: "Nouvelle-Aquitaine",
  domain: "elagage-pau.fr",
  brand: "Élagage Pau",
  phoneDisplay: "05 59 00 00 00", // PLACEHOLDER Twilio
  phoneHref: "tel:+33559000000", // PLACEHOLDER Twilio
  email: "", // pas d'email public pour l'instant (ne pas inventer d'adresse)
  postalCode: "64000",
  hours: "Du lundi au samedi, 8h–19h",
  geo: { lat: 43.2951, lng: -0.3708 },

  hero: {
    title: "Élagage et abattage d'arbres à Pau (64)",
    subtitle:
      "Élagueurs-grimpeurs en Béarn. Taille, abattage, dessouchage et entretien de vos arbres, à Pau et dans toute l'agglomération paloise. Devis gratuit, intervention rapide.",
    points: [
      "Devis gratuit sous 24 h",
      "Élagueurs-grimpeurs certifiés et assurés",
      "Intervention rapide en cas d'arbre dangereux",
      "Évacuation et valorisation des déchets verts incluses",
    ],
  },

  trust: [
    {
      title: "Des grimpeurs formés au travail sur corde",
      body: "Nos élagueurs interviennent en démontage sur corde comme à la nacelle, y compris sur les grands sujets des coteaux et des jardins palois où l'accès est difficile. Chaque chantier est sécurisé avant la première coupe.",
    },
    {
      title: "Assurance et responsabilité couvertes",
      body: "Nous travaillons assurés en responsabilité civile professionnelle. Un arbre proche d'une maison, d'une ligne ou de la voirie est abattu par démontage maîtrisé, jamais au hasard.",
    },
    {
      title: "Un interlocuteur local, pas une plateforme",
      body: "Vous parlez directement à un élagueur qui connaît Pau, le Béarn et leurs arbres. On passe voir le chantier, on chiffre clairement, et on vous dit franchement ce qui est nécessaire et ce qui ne l'est pas.",
    },
    {
      title: "Un chantier propre, déchets emportés",
      body: "Branches, troncs et copeaux sont broyés et évacués. Vous récupérez votre jardin net, et le bois peut être laissé en bûches si vous le chauffez.",
    },
  ],

  local: {
    geography:
      "Au pied des Pyrénées et traversée par le Gave de Pau, la ville baigne dans un climat océanique doux et humide qui fait pousser les arbres vite et densément.",
    climateRisk:
      "La contrainte n°1 ici, c'est le vent du sud (effet de foehn) qui descend des Pyrénées et fragilise les houppiers : un élagage bien conduit limite la prise au vent et prévient la casse.",
    intro: [
      "Pau est une ville verte, plantée d'arbres anciens : les platanes du boulevard des Pyrénées, les grands sujets du parc Beaumont et du parc du château, les jardins des villas des coteaux. Ce patrimoine arboré demande un entretien régulier pour rester sain et sûr.",
      "Nous intervenons à Pau et dans toute l'agglomération : sur les arbres de bord de Gave, les haies des lotissements de Lons ou d'Idron, les chênes des coteaux de Jurançon, comme sur le simple fruitier d'un jardin de ville.",
    ],
    neighborhoods: [
      "Centre historique / Château",
      "Le Hédas",
      "Saragosse",
      "Trespoëy",
      "Université",
      "Les Halles",
      "Berlioz",
      "Quartier du Hameau",
    ],
    landmarks: [
      "Boulevard des Pyrénées (platanes)",
      "Parc Beaumont",
      "Parc du château",
      "Coteaux de Jurançon",
      "Bords du Gave de Pau",
    ],
    towns: [
      "Lescar",
      "Billère",
      "Lons",
      "Bizanos",
      "Gelos",
      "Jurançon",
      "Gan",
      "Idron",
      "Mazères-Lezons",
      "Ousse",
    ],
    species: [
      "Platanes",
      "Chênes",
      "Tilleuls",
      "Cèdres",
      "Érables",
      "Marronniers",
      "Pins",
      "Magnolias",
      "Arbres fruitiers",
    ],
    regulations: {
      national: [
        "En tant que riverain, le Code civil (articles 671 à 673) vous oblige à respecter des distances de plantation et donne à votre voisin le droit d'exiger la taille des branches qui dépassent sur sa propriété. Un arbre planté à moins de deux mètres de la limite ne doit pas dépasser deux mètres de haut.",
      ],
      local: [
        "À Pau, certaines zones sont classées en Espaces Boisés Classés (EBC) au Plan Local d'Urbanisme : y abattre un arbre suppose une déclaration préalable en mairie. Nous vous aidons à vérifier si votre terrain est concerné avant tout abattage, pour éviter une infraction.",
      ],
    },
    season: [
      "La meilleure période pour élaguer la plupart des arbres en Béarn est le repos végétatif, de novembre à mars : l'arbre est moins stressé et la cicatrisation est plus nette. Les interventions de sécurité (arbre dangereux, branche fissurée après une tempête) se font, elles, toute l'année.",
      "Pour les haies, la loi protège la nidification des oiseaux : il est fortement déconseillé de tailler entre le 15 mars et le 31 juillet. Nous calons les chantiers de haies hors de cette période, sauf urgence.",
    ],
  },

  services: [
    {
      slug: "elagage",
      name: "Élagage",
      navLabel: "Élagage",
      tagline: "Taille et soin de vos arbres, dans les règles de l'art.",
      icon: "tree-deciduous",
      metaTitle: "Élagage d'arbres à Pau (64) | Élagueur-grimpeur",
      metaDescription:
        "Élagage et taille d'arbres à Pau et dans le Béarn par des élagueurs-grimpeurs certifiés. Éclaircissage, réduction, taille raisonnée. Devis gratuit sous 24 h.",
      h1: "Élagage d'arbres à Pau et en Béarn",
      intro: [
        "L'élagage ne consiste pas à « couper » un arbre, mais à le tailler pour qu'il reste sain, équilibré et sûr. Un arbre bien élagué résiste mieux au vent du sud qui balaie Pau, laisse passer la lumière, et ne menace ni votre toiture ni les lignes électriques. Nos élagueurs-grimpeurs interviennent en taille raisonnée, dans le respect de la physiologie de chaque essence.",
        "Que vous ayez un platane imposant hérité d'un jardin de ville, un chêne de coteau, un tilleul de cour ou quelques fruitiers, nous adaptons la coupe à l'arbre et à votre objectif : sécurité, lumière, mise en forme ou simple entretien. Chaque intervention commence par un diagnostic et un devis gratuit, sans engagement.",
      ],
      sections: [
        {
          heading: "Les types de taille que nous pratiquons",
          body: [
            "L'éclaircissage allège le houppier en retirant les branches surnuméraires, mortes ou mal orientées : l'air et la lumière circulent mieux, et la prise au vent diminue — précieux face aux coups de foehn béarnais. La réduction raccourcit la couronne d'un arbre devenu trop grand pour son emplacement, sans le mutiler, en revenant sur des tire-sève. La taille de formation, elle, accompagne les jeunes arbres pour leur donner une structure solide dès le départ.",
            "Nous évitons systématiquement l'étêtage brutal, qui consiste à couper net la tête de l'arbre. C'est une pratique qui l'affaiblit, ouvre la porte aux maladies et provoque des rejets nombreux et mal attachés, dangereux quelques années plus tard. C'est une fausse économie : un arbre étêté coûte plus cher à rattraper qu'à entretenir correctement.",
          ],
        },
        {
          heading: "Une taille adaptée à chaque essence",
          body: [
            "Chaque arbre a ses besoins. Les platanes, très présents à Pau, supportent des tailles architecturées mais réclament une coupe propre pour limiter le chancre. Les chênes des coteaux se taillent peu et de préférence en hiver. Les tilleuls et érables tolèrent bien la réduction. Les fruitiers demandent une taille annuelle pour rester productifs.",
            "Nous tenons aussi compte de l'âge et de l'état sanitaire : un vieux sujet fragilisé ne se taille pas comme un arbre vigoureux. Avant de monter, nous évaluons les signes de faiblesse (bois mort, champignons, fissures, écorce incluse) qui changent la stratégie d'intervention.",
          ],
        },
        {
          heading: "Comment se déroule une intervention",
          body: [
            "Nous passons d'abord évaluer l'arbre, son état sanitaire et son environnement, puis nous vous remettons un devis clair et gratuit. Le jour J, la zone est balisée et sécurisée. Le grimpeur progresse sur corde, dans le respect des techniques d'arboriste, ou nous utilisons une nacelle quand l'accès le permet. Les branches sont descendues de façon contrôlée pour ne rien endommager.",
            "En fin de chantier, tout est broyé et évacué : vous retrouvez votre jardin propre. Le bois de tronc peut être débité en bûches si vous vous chauffez au bois.",
          ],
        },
        {
          heading: "Pourquoi faire appel à un professionnel",
          body: [
            "L'élagage en hauteur est l'un des travaux de jardin les plus accidentogènes : chutes, tronçonneuse, branches sous tension. Un élagueur-grimpeur formé travaille encordé, assuré, et sait lire les contraintes mécaniques d'un arbre avant de couper. Au-delà de la sécurité, une coupe maîtrisée préserve la santé et la longévité de l'arbre, là où une taille amateur le défigure ou l'affaiblit durablement.",
          ],
        },
      ],
      faq: [
        {
          q: "Quand faut-il élaguer un arbre à Pau ?",
          a: "L'idéal est d'élaguer pendant le repos végétatif, de novembre à mars. Une intervention de sécurité (branche fissurée, arbre penché après une tempête) peut toutefois se faire à tout moment de l'année.",
        },
        {
          q: "À quelle fréquence élaguer ?",
          a: "Cela dépend de l'essence et de l'emplacement. Un arbre d'ornement en ville se taille souvent tous les 2 à 4 ans ; un fruitier, chaque année. Nous vous conseillons une fréquence adaptée lors du devis.",
        },
        {
          q: "De quoi dépend le prix d'un élagage ?",
          a: "Principalement de la taille de l'arbre, de la difficulté d'accès, du type de taille et du volume de déchets à évacuer. C'est pourquoi nous établissons un devis gratuit après être passés voir l'arbre.",
        },
      ],
    },
    {
      slug: "abattage",
      name: "Abattage",
      navLabel: "Abattage",
      tagline: "Abattage et démontage sécurisés, même en espace contraint.",
      icon: "axe",
      metaTitle: "Abattage d'arbres à Pau (64) | Démontage sécurisé",
      metaDescription:
        "Abattage et démontage d'arbres à Pau et en Béarn. Arbre dangereux, malade ou trop proche d'une maison : intervention sécurisée par des professionnels assurés.",
      h1: "Abattage d'arbres à Pau",
      intro: [
        "Un arbre mort, malade, dangereux ou simplement trop proche d'une construction doit parfois être abattu. En ville et dans les jardins palois, l'abattage direct est rarement possible : nous procédons le plus souvent par démontage, c'est-à-dire en descendant l'arbre morceau par morceau, sur corde, pour ne rien endommager autour.",
        "Chaque abattage commence par l'évaluation des risques : proximité d'une maison, d'une clôture, d'une ligne électrique, d'un mur de coteau. Nous travaillons assurés et équipés pour maîtriser la chute de chaque section. Avant tout, nous vous remettons un devis gratuit et vérifions ensemble si une autorisation est nécessaire.",
      ],
      sections: [
        {
          heading: "Abattage direct ou démontage ?",
          body: [
            "Quand l'espace le permet — terrain dégagé, coteau ouvert, distance suffisante — l'arbre peut être abattu d'un seul tenant, par une entaille dirigée qui contrôle le sens de chute. C'est rapide et économique, mais cela exige de la place tout autour.",
            "En milieu urbain ou près d'une habitation, nous démontons l'arbre depuis le sommet : le grimpeur coupe et descend les sections une à une, parfois à l'aide de cordes de rétention. C'est plus technique et plus long, mais c'est la seule méthode sûre dans la plupart des jardins de Pau et des communes denses comme Billère ou Bizanos.",
          ],
        },
        {
          heading: "Quand l'abattage est-il justifié ?",
          body: [
            "Un abattage se décide quand l'arbre est mort, dépérissant, atteint d'une maladie ou d'un champignon qui le rend instable, ou quand son système racinaire menace des fondations ou des canalisations. C'est aussi le cas d'un sujet trop proche d'une habitation, ou penché après une tempête.",
            "Nous privilégions toujours la solution la moins radicale : si une taille de réduction ou un haubanage suffit à sécuriser l'arbre, nous vous le disons. L'abattage n'est conseillé que lorsqu'il n'y a pas d'autre option raisonnable.",
          ],
        },
        {
          heading: "Faut-il une autorisation pour abattre à Pau ?",
          body: [
            "Oui, dans certains cas. Si votre terrain se situe en Espace Boisé Classé au Plan Local d'Urbanisme de Pau, ou si l'arbre bénéficie d'une protection particulière (arbre remarquable), une déclaration préalable en mairie est nécessaire. En dehors de ces zones, l'abattage d'un arbre sur une propriété privée est généralement libre.",
            "Nous vérifions ce point avec vous avant toute intervention : c'est inclus dans notre démarche, et cela vous évite une mauvaise surprise ou une sanction.",
          ],
        },
        {
          heading: "Sécurité et propreté du chantier",
          body: [
            "Tout abattage est balisé et réalisé avec un matériel adapté (cordes, tronçonneuses, parfois treuil). Une fois l'arbre au sol, nous débitons, broyons et évacuons. La souche peut être dessouchée dans la foulée pour vous rendre un terrain totalement net et réutilisable.",
          ],
        },
      ],
      faq: [
        {
          q: "Mon arbre est dangereux, pouvez-vous intervenir vite ?",
          a: "Oui. Pour un arbre qui menace une habitation, une voiture ou la voie publique, nous priorisons l'intervention. Appelez-nous, décrivez la situation, et nous nous déplaçons au plus vite.",
        },
        {
          q: "Que devient le bois après l'abattage ?",
          a: "Au choix : nous l'évacuons entièrement, ou nous le laissons débité en bûches si vous vous chauffez au bois. La souche peut être rognée dans la foulée.",
        },
        {
          q: "Abattez-vous aussi les arbres en limite de propriété ?",
          a: "Oui, mais ces situations demandent souvent l'accord du voisin et le respect des règles du Code civil. Nous vous conseillons sur la marche à suivre lors du devis.",
        },
      ],
    },
    {
      slug: "dessouchage",
      name: "Dessouchage",
      navLabel: "Dessouchage",
      tagline: "Rognage et retrait de souche, terrain prêt à replanter.",
      icon: "shovel",
      metaTitle: "Dessouchage à Pau (64) | Rognage de souche — Devis gratuit",
      metaDescription:
        "Dessouchage et rognage de souche à Pau et dans le Béarn. Récupérez un terrain propre et constructible après abattage. Devis gratuit.",
      h1: "Dessouchage et rognage de souche à Pau",
      intro: [
        "Une fois l'arbre abattu, la souche reste. Encombrante, parfois source de rejets et de champignons, elle empêche de replanter, de poser une terrasse ou de tondre tranquillement. Nous l'éliminons par rognage : une rogneuse réduit la souche en copeaux jusque sous le niveau du sol.",
        "Le rognage est plus propre et plus rapide que l'arrachage à la pelle mécanique, qui retourne tout le terrain et abîme les abords. Vous récupérez une surface plane, prête à être réengazonnée ou replantée, sans avoir à gérer un trou ni un tas de terre.",
      ],
      sections: [
        {
          heading: "Pourquoi enlever une souche",
          body: [
            "Une souche laissée en place continue souvent de produire des rejets, surtout chez les essences vigoureuses comme le robinier, le peuplier ou certains érables fréquents dans les jardins palois. Elle attire aussi les champignons lignivores et les insectes xylophages, et finit par pourrir lentement sur plusieurs années.",
            "Au-delà de l'esthétique, une souche est une gêne concrète : impossible de replanter au même endroit, de niveler le terrain ou d'installer une structure. La retirer libère définitivement la surface.",
          ],
        },
        {
          heading: "Rognage ou extraction complète ?",
          body: [
            "Le rognage broie la souche sur 20 à 40 cm de profondeur : c'est suffisant pour replanter une pelouse, poser une terrasse légère ou supprimer la gêne visuelle. C'est la solution la plus courante et la plus économique.",
            "Pour une construction, une plantation d'arbre au même endroit ou la pose d'une fondation, une extraction plus profonde des grosses racines peut être nécessaire. Nous évaluons votre projet et vous orientons vers la bonne méthode lors du devis.",
          ],
        },
        {
          heading: "Comment se passe le rognage",
          body: [
            "Nous dégageons la base de la souche, puis la rogneuse attaque le bois par passes successives. Les copeaux produits peuvent être laissés sur place comme paillage, mélangés à la terre, ou évacués selon votre préférence. L'intervention est rapide : la plupart des souches de jardin sont traitées en moins d'une demi-journée.",
          ],
        },
        {
          heading: "Le prix d'un dessouchage",
          body: [
            "Le tarif d'un rognage dépend surtout du diamètre de la souche, de sa dureté — les essences comme le chêne ou le robinier sont plus longues à broyer —, de l'accessibilité pour la rogneuse et du nombre de souches à traiter. Une petite souche de fruitier et une grosse souche de platane ne demandent pas le même travail.",
            "Regrouper plusieurs souches sur une même intervention fait baisser le coût unitaire. Comme pour nos autres prestations, nous établissons un devis gratuit après être passés mesurer les souches sur place : vous savez exactement à quoi vous attendre avant de vous engager.",
          ],
        },
      ],
      faq: [
        {
          q: "Le rognage abîme-t-il mon terrain ?",
          a: "Non. La rogneuse travaille au niveau de la souche uniquement ; le reste du terrain n'est pas retourné. Les copeaux sont évacués ou peuvent servir de paillage.",
        },
        {
          q: "Peut-on replanter au même endroit après dessouchage ?",
          a: "Pour une pelouse ou des massifs, oui, après un apport de terre. Pour replanter un arbre exactement au même emplacement, mieux vaut une extraction plus profonde — on vous le précise selon votre projet.",
        },
        {
          q: "Faut-il abattre l'arbre avant ?",
          a: "Oui, le dessouchage intervient après l'abattage. Nous pouvons enchaîner les deux dans la même intervention pour vous simplifier la vie.",
        },
      ],
    },
    {
      slug: "taille-de-haie",
      name: "Taille de haie",
      navLabel: "Taille de haie",
      tagline: "Haies nettes et denses, taillées au bon moment.",
      icon: "scissors",
      metaTitle: "Taille de haie à Pau (64) | Entretien de haies",
      metaDescription:
        "Taille et entretien de haies à Pau et en Béarn. Haies de jardin, brise-vue, grandes haies de propriété. Taille hors période de nidification. Devis gratuit.",
      h1: "Taille de haie à Pau",
      intro: [
        "Une haie bien taillée structure le jardin, protège du vis-à-vis et coupe le vent. Laissée à elle-même, elle s'évase, se dégarnit du bas et déborde sur le trottoir ou chez le voisin. Nous taillons tous types de haies à Pau et dans l'agglomération : laurier-palme, thuya, cyprès de Leyland, photinia, charmille, troène, sur petites comme grandes hauteurs.",
        "Sous le climat doux et humide du Béarn, les haies poussent vite : un entretien régulier évite qu'elles ne deviennent ingérables. Nous évacuons systématiquement les déchets de coupe, et nous respectons la réglementation sur la période de taille.",
      ],
      sections: [
        {
          heading: "Entretien régulier ou remise en forme",
          body: [
            "Une haie d'agrément se taille en général une à deux fois par an pour rester dense et nette : une taille de printemps (hors nidification) et une de fin d'été suffisent pour la plupart des essences. C'est l'entretien courant, rapide et économique.",
            "Une haie laissée trop longtemps sans soin demande une remise en forme plus sévère : réduction de hauteur, recépage des côtés, parfois sur plusieurs saisons pour ne pas la stresser. Nous évaluons l'état de la haie et vous proposons un plan d'entretien adapté.",
          ],
        },
        {
          heading: "La période de taille et la protection des oiseaux",
          body: [
            "La loi protège la nidification : il est fortement déconseillé de tailler les haies entre le 15 mars et le 31 juillet, période pendant laquelle les oiseaux nichent. Nous planifions donc les chantiers de haies hors de cette fenêtre, sauf nécessité de sécurité.",
            "En pratique, les meilleures périodes en Béarn sont la fin de l'hiver (février-début mars) et la fin de l'été (août-septembre), quand la haie a fini sa pousse.",
          ],
        },
        {
          heading: "Hauteur et règles entre voisins",
          body: [
            "La hauteur d'une haie est encadrée par le Code civil et dépend de sa distance à la limite de propriété : plantée à moins de deux mètres de la limite, elle ne doit en principe pas dépasser deux mètres. Au-delà de cette distance, vous pouvez la laisser monter davantage. Ces règles sont une source fréquente de désaccords de voisinage, que nous vous aidons à anticiper.",
          ],
        },
        {
          heading: "Quelles haies entretenons-nous en Béarn",
          body: [
            "Les jardins palois mêlent persistants et caducs : laurier-palme et laurier-tin, thuya et cyprès de Leyland pour les brise-vue qui poussent vite, photinia pour sa couleur, charmille et hêtre pour les haies taillées au carré, troène et bambou. Chacune a son rythme et sa technique — un thuya ne se rabat pas comme une charmille, et une coupe trop sévère sur du conifère ne repart pas.",
            "Nous adaptons l'outil et la forme à l'essence : taille au carré, en biseau pour laisser la lumière atteindre le pied, ou taille libre plus naturelle. L'objectif reste le même : une haie dense, régulière, et qui ne se dégarnit pas par le bas.",
          ],
        },
      ],
      faq: [
        {
          q: "À quelle fréquence tailler ma haie ?",
          a: "Une à deux fois par an pour la plupart des haies d'agrément. Les essences à croissance rapide (thuya, laurier, cyprès de Leyland) peuvent demander deux passages.",
        },
        {
          q: "À quelle hauteur ai-je le droit de laisser ma haie ?",
          a: "Cela dépend de la distance à la limite de propriété (Code civil, articles 671-672). Plantée à moins de 2 m de la limite, une haie ne doit pas dépasser 2 m. Nous vous conseillons selon votre configuration.",
        },
        {
          q: "Évacuez-vous les déchets de taille ?",
          a: "Oui, systématiquement. Les déchets sont broyés et évacués, ou laissés en paillage si vous le souhaitez.",
        },
      ],
    },
    {
      slug: "debroussaillage",
      name: "Débroussaillage",
      navLabel: "Débroussaillage",
      tagline: "Terrains et talus dégagés, ronces et broussailles éliminées.",
      icon: "sprout",
      metaTitle: "Débroussaillage à Pau (64) | Nettoyage de terrain",
      metaDescription:
        "Débroussaillage et nettoyage de terrains à Pau et en Béarn. Friches, talus de coteau, terrains en pente, ronces et végétation envahissante. Devis gratuit.",
      h1: "Débroussaillage et nettoyage de terrain à Pau",
      intro: [
        "Un terrain laissé en friche se referme vite sous le climat humide du Béarn : ronces, rejets ligneux, broussailles, jeunes pousses spontanées. Nous débroussaillons les terrains, talus et bords de propriété, y compris les pentes des coteaux difficiles d'accès, pour vous rendre une surface propre et praticable.",
        "Que ce soit pour entretenir une parcelle, préparer une vente, dégager les abords d'une maison ou respecter une obligation de débroussaillement, nous adaptons le matériel au terrain : débroussailleuse, broyeur, voire treuil sur les fortes pentes.",
      ],
      sections: [
        {
          heading: "Terrains en pente et accès difficiles",
          body: [
            "Les coteaux autour de Pau, de Jurançon et de Gan présentent souvent des terrains en pente, impraticables au tracteur. Nos équipes interviennent à la débroussailleuse portée et sécurisent le travail sur les talus raides, là où un particulier ne peut pas opérer sans risque.",
            "La végétation coupée est ensuite broyée sur place pour servir de paillage, ou évacuée en déchèterie selon votre choix. Le terrain est rendu net et accessible.",
          ],
        },
        {
          heading: "L'obligation légale de débroussaillement (OLD)",
          body: [
            "Dans certaines communes du département classées à risque d'incendie, le débroussaillement autour des habitations situées près des zones boisées ou de landes est une obligation légale (OLD), à la charge du propriétaire. Ne pas la respecter expose à une amende et augmente le risque pour votre bien.",
            "Si votre terrain est concerné, nous réalisons le débroussaillement réglementaire dans les règles : élimination des broussailles, élagage des arbres conservés et création d'une discontinuité de la végétation.",
          ],
        },
        {
          heading: "Préparer une vente ou un projet",
          body: [
            "Un terrain dégagé se vend mieux et se projette plus facilement. Avant une mise en vente, un bornage ou un projet de construction, un débroussaillage complet redonne de la lisibilité à la parcelle et révèle son potentiel.",
          ],
        },
        {
          heading: "Entretien régulier ou friche ancienne",
          body: [
            "Un terrain repris une à deux fois par an se débroussaille vite. Une friche laissée plusieurs années, elle, se transforme en fourré dense de ronces et de jeunes ligneux : l'intervention est plus lourde, parfois en deux temps, et peut demander un broyeur forestier. Plus on attend, plus le chantier coûte cher.",
            "Pour les parcelles régulièrement reprises par la végétation, nous proposons un entretien saisonnier qui maintient le terrain propre à moindre coût, plutôt que d'attendre que tout se referme.",
          ],
        },
      ],
      faq: [
        {
          q: "Pouvez-vous évacuer les déchets après débroussaillage ?",
          a: "Oui. La végétation peut être broyée et laissée en paillage sur place, ou entièrement évacuée en déchèterie. Nous chiffrons les deux options dans le devis.",
        },
        {
          q: "Intervenez-vous sur les terrains très en pente ?",
          a: "Oui. Nous sommes équipés pour travailler en sécurité sur les talus et coteaux raides typiques de la région paloise.",
        },
      ],
    },
    {
      slug: "evacuation-dechets-verts",
      name: "Évacuation des déchets verts",
      navLabel: "Déchets verts",
      tagline: "Branches, troncs et copeaux emportés et valorisés.",
      icon: "truck",
      metaTitle: "Évacuation de déchets verts à Pau (64) | Devis gratuit",
      metaDescription:
        "Évacuation et broyage de déchets verts à Pau et en Béarn après élagage ou abattage. Branches, troncs, copeaux emportés et valorisés. Devis gratuit.",
      h1: "Évacuation des déchets verts à Pau",
      intro: [
        "Après une taille ou un abattage, restent les branches, le bois et les copeaux. Plutôt que de les laisser encombrer votre jardin ou de multiplier les allers-retours en déchèterie, nous emportons tout. C'est inclus dans la plupart de nos chantiers, et disponible aussi en prestation seule.",
        "Les déchets verts sont broyés et valorisés — paillage, compostage, bois de chauffage — plutôt que simplement jetés. Vous récupérez un jardin net, sans rien à gérer ni à transporter.",
      ],
      sections: [
        {
          heading: "Broyage sur place ou enlèvement",
          body: [
            "Le broyage sur place transforme vos branches en paillage utile pour vos massifs et vos haies : il limite le volume à transporter et nourrit votre jardin. C'est souvent la solution la plus économique et la plus écologique.",
            "Quand le volume est important — gros abattage, débroussaillage d'un terrain entier — nous évacuons directement en benne vers les filières de valorisation. Le bois de tronc, lui, peut être débité en bûches si vous vous chauffez au bois.",
          ],
        },
        {
          heading: "En complément d'un chantier ou en prestation seule",
          body: [
            "L'évacuation est comprise dans la plupart de nos interventions d'élagage et d'abattage : vous n'avez rien à prévoir. Mais nous intervenons aussi seuls, par exemple si vous avez taillé vous-même et que vous vous retrouvez avec un tas de branches dont vous ne savez que faire.",
            "Dans ce cas, indiquez-nous le volume approximatif et le type de déchets, et nous vous établissons un devis pour l'enlèvement.",
          ],
        },
        {
          heading: "Où vont vos déchets verts",
          body: [
            "Plutôt que la simple mise en décharge, nous privilégions les filières de valorisation : le broyat devient paillage ou compost, et le bois de tronc, bois de chauffage. Les volumes que nous ne broyons pas sur place sont apportés en déchèterie ou en plateforme de compostage de l'agglomération paloise, dans le respect du tri des déchets verts.",
            "Cette approche limite ce qui part en décharge et redonne une utilité à ce qui sortait de votre jardin — un cercle plus vertueux, et souvent moins coûteux pour vous.",
          ],
        },
      ],
      faq: [
        {
          q: "Intervenez-vous juste pour évacuer mes déchets de jardin ?",
          a: "Oui, même si nous n'avons pas réalisé la coupe. Donnez-nous le volume approximatif et le type de déchets, nous vous faisons un devis pour l'enlèvement.",
        },
        {
          q: "Que deviennent les déchets verts ?",
          a: "Ils sont broyés et valorisés : paillage, compostage ou bois de chauffage. Nous privilégions la valorisation plutôt que la simple mise en décharge.",
        },
      ],
    },
  ],

  faq: [
    {
      q: "Le devis est-il vraiment gratuit ?",
      a: "Oui. Nous passons évaluer vos arbres et votre terrain à Pau ou dans l'agglomération, puis nous vous remettons un devis clair et sans engagement, en général sous 24 h.",
    },
    {
      q: "Intervenez-vous en dehors de Pau ?",
      a: "Oui, dans toute l'agglomération paloise : Lescar, Billère, Lons, Bizanos, Gelos, Jurançon, Gan, Idron et les communes alentour du Béarn. Indiquez-nous votre commune au téléphone.",
    },
    {
      q: "Êtes-vous assurés ?",
      a: "Oui, nous travaillons couverts en responsabilité civile professionnelle. C'est essentiel pour tout abattage ou élagage proche d'une habitation ou d'une ligne.",
    },
    {
      q: "Sous combien de temps pouvez-vous intervenir ?",
      a: "Pour un entretien classique, sous quelques jours à une semaine selon la saison. Pour un arbre dangereux, nous priorisons l'urgence — appelez-nous directement.",
    },
  ],
}
