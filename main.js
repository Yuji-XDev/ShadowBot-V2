//Código elaborado por (https://github.com/OmarGranda)

const fs = require('fs')
const axios = require('axios')
const { exec, spawn, execSync } = require('child_process')
const speed = require('performance-now')
const chalk = require('chalk')
const yargs = require('yargs/yargs')
const _ = require('lodash')
const moment = require('moment')
const gradient = require('gradient-string')
const crypto = require('crypto')
const { format } = require('util')
const Jimp = require('jimp')
const path = require('path')
const fetch = require('node-fetch')
const { performance } = require('perf_hooks')
const osu = require('node-os-utils')
const PhoneNumber = require('awesome-phonenumber')
const yts = require('yt-search')
const ytdl = require('ytdl-core')
const FormData = require('form-data') 
const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper');
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent,  proto,  generateWAMessageContent, generateWAMessage,  prepareWAMessageMedia,  downloadContentFromMessage,  areJidsSameUser,  getContentType } = require('@whiskeysockets/baileys')
const {  smsg,  getGroupAdmins,  clockString,  sleep,  getBuffer, runtime, fetchJson, isUrl } = require('./lib/func')
require('./settings.js')

const msgs = (message) => {
return message.length >= 10 ? message.substring(0, 500) : message
}

module.exports = client = async (client, m, mesaages, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.message.listResponseMessage && m.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith('.') && m.message.listResponseMessage.singleSelectReply.selectedRowId) ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

m.isBot = m.id.startsWith('Lyru-') || m.id.startsWith('EvoGlobalBot-') && m.id.startsWith('FizzxyTheGreat-') && m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return 

/**
 * Returns early if ID starts with 'NJX-' due to Baileys' different generateId system.
 * @param {Object} m - The object containing the ID to check.
 * @returns {void} - Returns early if ID starts with 'NJX-', otherwise continues with the function.
 */
if (m.id.startsWith('NJX-')) return;

var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : '' : prefa ?? global.prefix

const command = body.slice(prefix.length).trim().split(/\s+/)[0].toLowerCase()
const args = body.trim().split(/\s+/).slice(1)
const chatContent = (() => {
const messageTypes = { 'conversation': m.message.conversation, 'imageMessage': m.message.imageMessage?.caption, 'documentMessage': m.message.documentMessage?.caption, 'videoMessage': m.message.videoMessage?.caption, 'extendedTextMessage': m.message.extendedTextMessage?.text, 'buttonsResponseMessage': m.message.buttonsResponseMessage?.selectedButtonId, 'templateButtonReplyMessage': m.message.templateButtonReplyMessage?.selectedId, 'listResponseMessage': m.message.listResponseMessage?.singleSelectReply?.selectedRowId, 'messageContextInfo': m.message.listResponseMessage?.singleSelectReply?.selectedRowId }; return messageTypes[m.mtype] || '' })()
const pushname = m.pushName || 'Sin nombre'
const text = args.join(' ')
const q = args.join(" ") 
const quoted = m.quoted || m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const isCreator = global.owner.some(([number]) => number.replace(/[^\d\s().+:]/g, '').replace(/\s/g, '') + '@s.whatsapp.net' === m.sender)
const isbot = await client.decodeJid(client.user.id)
const sender = m.isGroup ? (m.key.participant || m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(isbot) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAnti = true

const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6285600793871-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': null, thumbnail: null,sendEphemeral: true}}}

//Base de datos
let user = global.db.data.users[m.sender]
let chats = global.db.data.chats[m.chat]

let isNumber = x => typeof x === 'number' && !isNaN(x)
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!('lenguaje' in user)) user.lenguaje = 'es'
if (!('registered' in user)) user.registered = false

if (!user.registered) {
if (!('name' in user)) user.name = m.name
if (!isNumber(user.age)) user.age = -1
if (!isNumber(user.regTime)) user.regTime = -1
}
if (!isNumber(user.limit)) user.limit = 20
if(!isNumber(user.premium)) user.premium = false
} else global.db.data.users[m.sender] = { limit: 20 }

if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('welcome' in chats)) chats.welcome = true
if (!('antilink' in chats)) chats.antilink = false
if (!('antifake' in chats)) chats.antifake = false  
if (!('detect' in chats)) chats.detect = true 	
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
welcome: true,
antilink: false,
antifake: false,
detect: true, 	
mute: false
}
let setting = global.db.data.settings[client.user.jid] || {};
if (typeof setting !== 'object') global.db.data.settings[client.user.jid] = {}  
if (setting) {  
if (!isNumber(setting.status)) setting.status = 0  
if (!('self' in setting)) setting.self = false;
if (!('autobio' in setting)) setting.autobio = true
} else global.db.data.settings[client.user.jid] = {  
status: 0,  
self: false,
autobio: true
} 

//console
if (m.message) {
const fecha = chalk.bold.magentaBright(`\nFecha: ${chalk.whiteBright(moment().format('DD/MM/YY HH:mm:ss'))}`)
const mensaje = chalk.bold.greenBright(`\nMensaje: ${chalk.whiteBright(msgs(m.text))}`)
const usuario = chalk.bold.blueBright(`\nUsuario: ${chalk.yellowBright(pushname)}`)
const remitente = chalk.bold.redBright(`\nRemitente: ${gradient('deepskyblue', 'darkorchid')(sender)}`)
const grupo = m.isGroup ? chalk.bold.cyanBright(`\nGrupo: ${chalk.greenBright(groupName)}\nID: ${gradient('violet', 'midnightblue')(from)}`) : chalk.bold.redBright('\nChat privado\n')
console.log(`${fecha}${mensaje}${usuario}${remitente}${grupo}`)
}

//--------------------[ AUTOBIO ]----------------------- 
/*if (global.db.data.settings[client.user.jid].autobio) {
let setting = global.db.data.settings[client.user.jid]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
var timestamp = speed();   
var latensi = speed() - timestamp 
let bio = `${wm} || 💻 ${runtime(process.uptime())} || 👥️ ${Object.keys(global.db.data.users).length}`
try {
await client.updateProfileStatus(bio)
setting.status = new Date() * 1 
} catch {
console.log(latensi.toFixed(4)) 
}}} */

//interactive button
if (m.mtype === 'interactiveResponseMessage') {   
let msg = m.message[m.mtype]  || m.msg
if (msg.nativeFlowResponseMessage && !m.isBot ) { 
let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
if (id) {
let emit = { 
key : { ...m.key } , 
message:{ extendedTextMessage : { text : id } } ,
pushName : m.pushName,
messageTimestamp  : m.messageTimestamp || 754785898978
}
return client.ev.emit('messages.upsert', { messages : [ emit ] ,  type : 'notify'})
}}}

//antilink all
if (global.db.data.chats[m.chat].antilink && groupMetadata) {
let linksProhibidos = {
'telegram': /telegram\.me|t\.me/gi,
'facebook': /facebook\.com/gi,
'whatsapp': /chat\.whatsapp\.com/gi,
'youtube': /youtu\.be|youtube\.com/gi
}
function vl(mensaje, tiposEnlaces) {
for (let tipo of tiposEnlaces) {
if (mensaje.match(linksProhibidos[tipo])) {
return true
}
}
return false
}
let EnlacesProhibidos = ['whatsapp', 'telegram']
if (vl(m.text, EnlacesProhibidos)) {
if (!isBotAdmins) return m.reply('El bot no es admin, no puede eliminar intrusos')
let gclink = (`https://chat.whatsapp.com/` + await client.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return client.sendMessage(m.chat, { text: `El enlace pertenece a *${groupName}*` }, { quoted: m })
if (isAdmins) return client.sendMessage(m.chat, { text: 'No puedo eliminar un administrador' }, { quoted: m })
await client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
client.sendMessage(from, { text: `Anti Enlaces\n\n@${m.sender.split('@')[0]} mandaste un enlace prohibido`, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//antifake
if (global.db.data.chats[m.chat].antifake && !isAdmins) {
let forbidPrefixes = ['965', '966', '971', '974', '212', '213', '216', '44', '1', '62', '61', '64', '353', '33', '32', '41', '352', '377', '351', '244', '258', '91', '977', '880', '92', '94', '960', '7', '380', '375', '998', '996', '373', '374', '994', '992', '62', '49', '43', '39', '378', '379', '86', '886', '852', '853', '65', '850', '82', '93', '98', '48', '84', '856', '855', '254', '255', '256', '250', '257', '258', '252', '269', '243', '90', '998', '60', '222', '27', '265']
for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
await m.reply('*Anti Fakes* activo')
client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}}
  
switch (prefix && command) {

//Herramientas 
case 'traducir': 
case 'translate': 
case 'tr': {
const translate = require('@vitalets/google-translate-api')
let codesidioma = '🇲🇽 *Español:* es\n🏴 *Welsh:* cy\n🇻🇳 *Vietnamese:* vi\n🇹🇷 *Turkish:* tr\n🇹🇭 *Thai:* th\n🇰🇬 *Tamil:* ta\n🇸🇪 *Swedish:* sv\n🇰🇪 *Swahili:* sw\n🇸🇰 *Slovak:* sk\n🇷🇸 *Serbian:* sr\n🇷🇺 *Russian:* ru\n🇷🇴 *Romanian:* ro\n🇵🇹 *Portuguese:* pt\n🇵🇱 *Polish:* pl\n🇳🇴 *Norwegian:* no\n🇲🇰 *Macedonian:* mk\n🇱🇻 *Latvian:* lv\n🇻🇦 *Latin:* la\n🇰🇷 *Korean:* ko\n🇯🇵 *Japanese:* ja\n🇮🇹 *Italian:* it\n🇮🇩 *Indonesian:* id\n🇮🇸 *Icelandic:* is\n🇭🇺 *Hungarian:* hu\n🇮🇳 *Hindi:* hi\n🇭🇹 *Haitian Creole:* ht\n🇬🇷 *Greek:* el\n🇩🇪 *German:* de\n🇫🇷 *French:* fr\n🇫🇮 *Finnish:* fi\n🇨🇨 *Esperanto:* eo\n🇬🇧 *English:* en\n🇳🇱 *Dutch:* nl\n🇩🇰 *Danish:* da\n🇨🇿 *Czech:* cs\n🇭🇷 *Croatian:* hr\n🇨🇳 *Chinese:* zh\n🇲🇰 *Catalan:* ca\n🇦🇲 *Armenian:* hy\n🇦🇪 *Arabic:* ar\n🇦🇱 *Albanian:* sq\n🇿🇦 *Afrikaans:* af'

if (!args || !args[0]) {
return m.reply('Ingrese el *código* del idioma más el *texto* que desea traducir\n\n`Ejemplo`: .translate ru Hola, ¿cómo estás?')
}

let lang = args[0]
let text = args.slice(1).join(' ')
const defaultLang = 'es'

if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
m.reply('Se ha detectado que no has ingresado un *código* de *idioma* válido. Se usará el idioma predeterminado (Español).')
}

if (!text && m.quoted && m.quoted.text) text = m.quoted.text

try {
const result = await translate(`${text}`, {to: lang, autoCorrect: true})
await m.reply(`${result.text}`)
} catch {
try {
const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkey}&text=${text}`)
const loll = await lol.json()
const result2 = loll.result.translated
await m.reply(`${result2}`)
} catch (e) {
await m.reply('No se pudo realizar la traducción: ' + e)
}}}
break

case 'hd':
case 'remini': 
case 'calidad': {
const FormData = require('form-data') 
const Jimp =  require('jimp')

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''

if (!mime) {
return m.reply(`Responde a una *imagen* usando este mismo *comando* (${prefix + command})`)
}

if (!/image\/(jpe?g|png)/.test(mime)) {
return m.reply(`Tipo de *media* no válida`)
}

m.reply('`Cargando Imágen`') 
try {
let img = await q.download?.()
let pr = await remini(img, 'enhance')
client.sendMessage(m.chat, { image: pr, caption: `Calidad mejorada` }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 })
} catch (e) {
return m.reply('Ha ocurrido un error al intentar mejorar la calidad de la imagen: ' + e) 
}
}
break

case 'ia': case 'chatgpt': {
if (!text) return m.reply(`Ingrese lo que *desea* preguntar a *ChatGPT*\n\n\`Ejemplo\`: ${prefix + command} ¿Qué es la teología?`)
try {
client.sendPresenceUpdate('composing', from)
let gpt = await fetch(`${apis}/ia/gptweb?text=${text}`) 
let res = await gpt.json()
await await m.reply(res.data)
} catch (e) {
return m.reply('Ha ocurrido un error al solicitar su petición: ' + e)
}}
break

case "deepseek": case "ia3": {
if (!text) return m.reply(`Ingrese lo que *desea* preguntar a *DeepSeek-AI*\n\n\`Ejemplo\`: ${prefix + command} ¿Qué es la teología?`)
client.sendPresenceUpdate('composing', from)
let { data } = await axios.get(`https://archive-ui.tanakadomp.biz.id/ai/deepseek?text=${text}`)
await m.reply(data?.result || '❌ No se obtuvo una respuesta válida de DeepSeek AI.')
}
break

case "gemini": {
if (!text) return m.reply(`Ingrese lo que *desea* preguntar a *Gemini*\n\n\`Ejemplo\`: ${prefix + command} ¿Qué es la teología?`)
client.sendPresenceUpdate('composing', from)
let gpt = await fetch(`https://api.dorratz.com/ai/gemini?prompt=${text}`)
let res = await gpt.json()
await m.reply(res.message)}
break

case "copilot": case "bing": {
if (!text) return m.reply(`Ingrese lo que *desea* preguntar a *copilot*\n\n\`Ejemplo\`: ${prefix + command} ¿Qué es la teología?`)
client.sendPresenceUpdate('composing', from)
let gpt = await fetch(`https://api.dorratz.com/ai/bing?prompt=${text}`)
let res = await gpt.json()
m.reply(res.result.ai_response)}
break

//buscadores
case 'google': case 'googleit': {
const google = require('google-it')
if (!text) return m.reply(`Ingrese algo *relevante* de lo que desea obtener *información*\n\n\`Ejemplo\`: ${prefix + command} Noticias n+`)
try {
const res = await fetch(`https://delirius-apiofc.vercel.app/search/googlesearch?query=${text}`);
const data = await res.json();
    
if (data.status && data.data && data.data.length > 0) {
let teks = `\t\t\t\t\t\t\t *‹* Google Search‘s *›*\n\n`;
for (let result of data.data) {
teks += `*· Título:* ${result.title}\n*· Enlace:* ${result.url}\n*· Descripción:* ${result.description}\n\n─────────────────\n\n`;
}                
client.sendMessage(m.chat, { video: { url: 'https://qu.ax/cPnS.mp4' }, gifPlayback: true, caption: teks }, { quoted: m })
}} catch (error) {
try {
google({ 'query': text }).then(res => {
let teks = `\t\t\t\t\t\t\t *‹* Google Search‘s *›*\n\n`
res.forEach((g, index) => {
teks += `\`${index + 1}\`\n\n`
teks += `*· Título:* ${g.title}\n`
teks += `*· Descripción:* ${g.snippet}\n`
teks += `*· Enlace:* ${g.link}\n\n`
})
client.sendMessage(m.chat, { video: { url: 'https://qu.ax/cPnS.mp4' }, gifPlayback: true, caption: teks }, { quoted: m })
}).catch(err => {
})
} catch (e) {
m.reply('Ha ocurrido un error al realizar la búsqueda: ' + e)
}}}
break

case 'yts':
case 'ytsearch': {
if (!text) {
return m.reply('Ingrese el *título* de un *vídeo*\n\n`Ejemplo`: .yts CuriosityBot-MD')
}

let ress = await yts(`${text}`)
let armar = ress.all
const Ibuff = await getBuffer(armar[0].image)
let teks2 = armar.map(v => {
switch (v.type) {
case 'video': return `
Título: *${v.title}* 
Duración: ${v.timestamp}
Subido: ${v.ago}
Vistas: ${v.views}
Url: ${v.url}
`.trim()
case 'channel': return `
Canal: *${v.name}*
Url: ${v.url}
Subscriptores: ${v.subCountLabel} (${v.subCount})
Videos totales: ${v.videoCount}
`.trim()
}
}).filter(v => v).join('\n----------------------------------------\n')
client.sendMessage(m.chat, { image: Ibuff, caption: teks2 }, { quoted: m })
.catch((err) => {
m.reply('Error')
})
}
break

//info
case 'menu':
case 'help':
case 'allmenu': {
  const userId = m.sender
  const usedPrefix = prefix
  function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes'
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const texto = `
╭━━━〔 🤖 𝗠𝗔𝗚𝗡𝗢𝗦𝗕𝗢𝗧 〕━━⬣
┃
┃ 👤 Usuario: @${userId.split('@')[0]}
┃ ⚡ Prefijo: ${usedPrefix}
┃ 💾 RAM usada: ${formatBytes(os.totalmem() - os.freemem())}
┃ 📦 RAM total: ${formatBytes(os.totalmem())}
┃
╰━━━━━━━━━━━━━━━━━━━━⬣

╭───────────────✧
│   ‣ 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣 🤖
│   ╰┈➤ ${usedPrefix}sc
│   ╰┈➤ ${usedPrefix}ping
│   ╰┈➤ ${usedPrefix} peedtest
╰───────────────✧
╭───────────────✧
│   ‣ 𝙊𝙣 / 𝙊𝙛𝙛 🚫
│   ╰┈➤ ${usedPrefix}on
│   ╰┈➤ ${usedPrefix}off
╰───────────────✧
╭───────────────✧
│  ‣ 𝘽𝙪𝙨𝙘𝙖𝙙𝙤𝙧𝙚𝙨 🔎
│  ╰┈➤ ${usedPrefix}google
│  ╰┈➤ ${usedPrefix}ia
╰───────────────✧
╭───────────────✧
│  ‣ 𝙃𝙚𝙧𝙧𝙖𝙢𝙞𝙚𝙣𝙩𝙖𝙨 ⚙️
│  ╰┈➤ ${usedPrefix}hd
│  ╰┈➤ ${usedPrefix}traducir
╰───────────────✧
╭───────────────✧
│  ‣ 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 📥
│  ╰┈➤ ${usedPrefix}play
│  ╰┈➤ ${usedPrefix}play audio
│  ╰┈➤ ${usedPrefix}play video
│  ╰┈➤ ${usedPrefix}play mp3doc
│  ╰┈➤ ${usedPrefix}play mp4doc
│  ╰┈➤ ${usedPrefix}gitclone
│  ╰┈➤ ${usedPrefix}tiktok
│  ╰┈➤ ${usedPrefix}facebook
│  ╰┈➤ ${usedPrefix}instagram
│  ╰┈➤ ${usedPrefix}slider
│  ╰┈➤ ${usedPrefix}x
│  ╰┈➤ ${usedPrefix}gdrive
╰───────────────✧
╭───────────────✧
│  ‣ 𝙂𝙧𝙪𝙥𝙤𝙨 👥
│  ╰┈➤ ${usedPrefix}admins
│  ╰┈➤ ${usedPrefix}grupo
│  ╰┈➤ ${usedPrefix}demote
│  ╰┈➤ ${usedPrefix}fantasmas
│  ╰┈➤ ${usedPrefix}hidetag
│  ╰┈➤ ${usedPrefix}kick
│  ╰┈➤ ${usedPrefix}link
│  ╰┈➤ ${usedPrefix}promote
│  ╰┈➤ ${usedPrefix}tagall
╰───────────────✧
╭───────────────✧
│  ‣ 𝙎𝙩𝙞𝙠𝙚𝙧𝙨 🔰
│  ╰┈➤ ${usedPrefix}s
╰───────────────✧
╭───────────────✧
│  ‣ 𝙋𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤 👑
│  ╰┈➤ ${usedPrefix}update
│  ╰┈➤ ${usedPrefix}restart
│  ╰┈➤ ${usedPrefix}join
│  ╰┈➤ ${usedPrefix}getcase 
│  ╰┈➤ ${usedPrefix}addcase
╰───────────────✧
`.trim()

  await client.sendMessage(m.chat, {
    text: texto,
    contextInfo: { 
      forwardingScore: 999, 
      isForwarded: true, 
      forwardedNewsletterMessageInfo: { 
        newsletterName: 'MagnosBot | CHANNEL', 
        newsletterJid: "120363422169517881@newsletter" 
      }, 
      externalAdReply: { 
        title: `© MagnosBot`, 
        body: '', 
        thumbnailUrl: 'https://i.postimg.cc/NGrhjVTv/IMG-20250909-WA0062.jpg', 
        sourceUrl: 'https://github.com/OmarGranda', 
        mediaType: 1, 
        renderLargerThumbnail: true 
      }
    }
  }, { quoted: fkontak })
}
break

case 'ping': {
const girastamp = speed()
const latensi = speed() - girastamp
const _muptime = process.uptime() * 1000
const muptime = clockString(_muptime)
m.reply(`Tiempo de respuesta *${latensi.toFixed(4)}*\n\nTiempo de actividad *${muptime}*`)
}
break

case 'sc': case 'script': case 'git': {
try {
let res = await fetch('https://api.github.com/repos/AzamiJs/CuriosityBot-MD')
let json = await res.json()
let git = `*乂  Bot  -  Script*\n\n· *Nombre*: ${json.name}\n· *Visitantes*: ${json.watchers_count}\n· *Peso*: ${(json.size / 1024).toFixed(2)} MB\n· *Actualizado*: ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n· *Url* : ${json.html_url}\n\n	   ${json.forks_count} Forks · ${json.stargazers_count} Stars · ${json.open_issues_count} Issues`
await client.sendMessage(m.chat, {text: git, contextInfo: { forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterName: 'MAGMOSBOT | CHANNEL', newsletterJid: "120363422169517881@newsletter", }, externalAdReply: { title: `© MagnosBot`, body: '', thumbnailUrl: 'https://i.postimg.cc/F1tDYDM9/IMG-20250909-WA0060.jpg', sourceUrl: 'https://github.com/OmarGranda', mediaType: 1, renderLargerThumbnail: true }}}, {quoted: fkontak})
} catch (e) {
m.reply(e)
}
}
break

/*
case 'speedtest': case 'speed': {
const cp = require('child_process') 
const {promisify} = require('util') 
const exec = promisify(cp.exec).bind(cp)
let o
m.reply('> Cargando... 🚀🚀🚀')
try {
o = await exec('python3 speed.py --secure')
*/
case 'speedtest':
case 'speed': {
  const cp = require('child_process')
  const { promisify } = require('util')
  const exec = promisify(cp.exec).bind(cp)

  await client.sendMessage(m.chat, { text: '> 🚀 Cargando SpeedTest, espera un momento...' }, { quoted: fkontak })

  try {
    let { stdout, stderr } = await exec('python3 speed.py --secure')

    if (stderr) throw new Error(stderr)

    let resultado = stdout || "❌ No se obtuvo salida del script."

    await client.sendMessage(m.chat, {
      text: `📡 *Resultado del SpeedTest:*\n\n${resultado}`,
      contextInfo: { 
        forwardingScore: 999, 
        isForwarded: true, 
        forwardedNewsletterMessageInfo: { 
          newsletterName: 'MagnosBot | CHANNEL', 
          newsletterJid: "120363422169517881@newsletter" 
        }, 
        externalAdReply: { 
          title: `⚡ SpeedTest - MagnosBot`, 
          body: 'Revisa tu velocidad de internet 📶', 
          thumbnailUrl: 'https://i.postimg.cc/NjTxRk94/speedtest.jpg', 
          sourceUrl: 'https://github.com/OmarGranda', 
          mediaType: 1, 
          renderLargerThumbnail: true 
        }
      }
    }, { quoted: fkontak })

  } catch (e) {
    await client.sendMessage(m.chat, {
      text: `⚠️ Ocurrió un error al ejecutar SpeedTest`,
      contextInfo: { 
        forwardingScore: 999, 
        isForwarded: true, 
        forwardedNewsletterMessageInfo: { 
          newsletterName: 'MagnosBot | CHANNEL', 
          newsletterJid: "120363422169517881@newsletter" 
        }, 
        externalAdReply: { 
          title: `❌ Error en SpeedTest`, 
          body: 'Inténtalo nuevamente más tarde', 
          thumbnailUrl: 'https://i.postimg.cc/NjTxRk94/speedtest.jpg', 
          sourceUrl: 'https://github.com/OmarGranda', 
          mediaType: 1, 
          renderLargerThumbnail: true 
        }
      }
    }, { quoted: fkontak })
  }
}
break