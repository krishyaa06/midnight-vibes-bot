/** Theme + identity for Midnight Vibes. Everything brand-specific lives here. */
module.exports = {
    id: 'midnight',
    name: 'Midnight Vibes',
    short: 'Midnight',
    keyPrefix: 'MNV',
    tagline: "Dark, cinematic listening for late-night communities.",
    footer: 'Prism Protocol',
    colors: { brand: 0x6366f1, success: 0x00ffaa, danger: 0xff3366, premium: 0xffc857 },
    emoji: { brand: '🌙', ok: '✅', error: '❌', premium: '💎', radio: '📻', wave: '～' },
    bar: { done: '━', head: '🌙', todo: '─' },
    statuses: [
        { name: "/play • after dark", type: 'Listening' },
        { name: "{servers} night owls", type: 'Watching' },
        { name: "/radio fluid 🌙", type: 'Playing' }
    ],
    // Listener-supported radio from SomaFM (https://somafm.com). Please consider supporting them.
    stations: [
        { id: 'fluid', name: "Fluid", genre: "Instrumental hip-hop / lo-fi", url: 'https://ice1.somafm.com/fluid-128-mp3' },
        { id: 'groovesalad', name: "Groove Salad", genre: "Chill ambient beats", url: 'https://ice1.somafm.com/groovesalad-128-mp3' },
        { id: 'lush', name: "Lush", genre: "Sensual vocal chill", url: 'https://ice1.somafm.com/lush-128-mp3' },
        { id: 'dronezone', name: "Drone Zone", genre: "Atmospheric ambient", url: 'https://ice1.somafm.com/dronezone-128-mp3' },
        { id: 'darkzone', name: "The Dark Zone", genre: "Dark ambient", url: 'https://ice1.somafm.com/darkzone-128-mp3' }
    ],
    premium: { prices: { premium: '₹99/month', plus: '₹249/month' } },
    links: {
        panel: 'https://krishyaa06.github.io/prism-bots-panel/',
        support: 'https://dc.gg/prismprotocol',
        buy: 'https://krishyaa06.github.io/prism-bots-panel/#/premium/midnight',
        github: 'https://github.com/krishyaa06/midnight-vibes-bot'
    }
};
