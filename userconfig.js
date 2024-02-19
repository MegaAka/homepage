const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Mexico',
    scale: 'C'
  },
  clock: {
    format: 'do B Y - h:i',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia'],
      b: ['https://bing.com/search?q=', 'bing']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: ['weather-forecast', 'crypto-rate', 'todo-list'],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'home',
      background_url: 'src/img/banners/bg-8.png',
      categories: [
        {
        name: 'most important',
        links: [
          {
            url: 'https://youtu.be/',
            icon: 'brand-youtube',
            icon_color: '#996767'
          },
          {
            url: 'https://twitter.com/home',
            name: 'twitter',
            icon: 'brand-twitter-filled',
            icon_color: '#64a7c9'            
          },
        ],
        name: '',
        links: [
          {

          },
        ]
      }
    ],
    },
    {
      name: 'boards',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [{
        name: 'fun',
        links: [
          {
            url: 'https://4chan.org/wsg/',
            name: '/wsg/'
          },
          {
            name: '/out/',
            url: 'https://4chan.org/out',
            icon: 'leaf',
            icon_color: '#64876d'
          },
          {
            url: 'https://www.4chan.org/a/',
            name: '/a/'
          },
          {
            name: '/v/',
            url: 'https://4chan.org/v/',
            icon: 'device-gamepad',
            icon_color: '#8b647b'
          },
          {
            name: '/vt/',
            url: 'https://4chan.org/vt/'
          },
          {
            name: '/music/',
            url: 'https://lainchan.org/music/',
            icon: 'disc'
          },
          {
            name: '/mu/',
            url: 'https://boards.4channel.org/mu/',
          }
        ]
      },
      {
        name:'reddit boards',
        links: [
          {
            name:'r/piracy',
            link:'https://www.reddit.com/r/Piracy',
          },
          {
            name:'r/animepiracy',
            link:'https://www.reddit.com/r/animepiracy',
          },
          {
            name:'r/japanesepeopletwitter',
            link:'https://www.reddit.com/r/japanesepeopletwitter',
          }
        ]
      },
      {
        name: 'Comfy',
        links: [
          {
            name: '/lounge/',
            url: 'https://sushigirl.us/lounge/catalog.html'
          },
          {
            name: '/comfy/',
            url: 'https://anon.cafe/comfy/catalog.html'
          },
          {
            name: '/p/',
            url: 'https://4chan.org/p/',
            icon: 'camera',
            icon_color: '#6c849d'
          }
        ]
      }
      ]
    },
    {
      name: 'enjoyment',
      background_url: 'src/img/banners/bg-15.png',
      categories: [
        {
          name: 'otaku',
          links: [
            {
              name: 'anilist',
              url: 'https://anilist.co',              
            },
            {
              name: 'mal',
              url: 'https://myanimelist.com/',              
            },
            {
              name: 'mangadex',
              url: 'https://mangadex.org/',   
            },
            {
              name: 'nyaa',
              url: 'https://nyaa.si/',   
            },
          ]
        },
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750'
            },
            {
              url: 'https://music.youtube.com/',
              name: 'music',
              icon: 'brand-youtube',
              icon_color: '#996767'
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio'
            },
            {
              url: 'https://animethemes.moe/',
              icon: 'anime themes'
            },
          ]
        },
      ]
    },
     {
      name: 'myself',
      background_url: 'src/img/banners/bg-5.jpg',
      categories: [
        {
        name: 'social',
        links: [
            {
              url:'https://github.com/',
              icon:'brand-github',
              icon_color:'#938780'
            },
            {
              url: 'https://web.whatsapp.com/',
              name: 'whatsapp',
              icon: 'brand-whatsapp',
              icon_color: '#6bc964'
            },
            {
              url: 'https://www.reddit.com/',
              name: 'reddit',
              icon: 'brand-reddit',
              icon_color: '#c98264'             
            },
          ]
        },
        {
          name: 'shopping',
          links: [
            {
              url: 'https://www.amazon.com.mx',
              name: 'amazon',
              icon: 'brand-amazon',
              icon_color: '#d7b965'            
            },
            {
              url: 'https://www.aliexpress.com/',
              name: 'aliexpress',
              icon: 'shopping-cart',
              icon_color: '##d77c65'            
            },
            {
              url: 'https://mx.ebay.com/',
              name: 'ebay',
              icon: 'basket-filled',
              icon_color: '#65d778'            
            },
          ]
        }
        ],
      
    }
]
});
