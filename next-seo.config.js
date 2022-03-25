export default {
    title: 'Home',
    titleTemplate: ' OsrsQuery | %s ',

    description: 'A modern Runescape platform dedicated to providing the community an environment that anyone can use to gather data.',
    canonical: "http://osrsquery.com/",

    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: 'http://osrsquery.com/',
      description: 'A modern Runescape platform dedicated to providing the community an environment that anyone can use to gather data.',
      site_name: 'OsrsQuery',
      title: 'OSRSQuery | An RuneScape Data Project',
      images: [
        {
          url: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        }
      ]
    },
    additionalMetaTags: [
      {
        property: 'dc:creator',
        content: 'Mark'
      }, 
      {
        name: 'application-name',
        content: 'OsrsQuery'
      },
      {
        name: 'language',
        content: 'English'
      },
      {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1'
      },
      {
        name: 'keywords',
        content: ["OSRS","osrs","rs3","RS3","Old School Runescape","tools","old school runescape","world map","modeel viewer","sound manager","rsps","Oldschool Runescape", "OSRS, Platform", "OSRS Item", "Oldschool Runescape Item", "OSRS NPC", "Oldschool Runescape Npc", "OSRS Model", "OSRS Object"," OSRS Item Database", "Item Database OSRS", "OSRS Worldmap", "OSRS Livemap", "OSRS Interactive map", "OSRS Textures", "OSRS Music", "OSRS Sounds"]
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    ],
    images: [
      {
        url: 'https://blog.hubspot.com/hubfs/image8-2.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
    ],
    additionalLinkTags : [
      {
        rel: 'apple-touch-icon',
        href: '/public/apple-touch-icon.png',
        sizes: '180x180'
      },
      {
        rel: 'android-chrome-icon',
        href: '/public/android-chrome-192x192.png',
        sizes: '192x192'
      },
      {
        rel: 'android-chrome-icon',
        href: '/public/android-chrome-256x256',
        sizes: '256x256'
      }
    ]
  }