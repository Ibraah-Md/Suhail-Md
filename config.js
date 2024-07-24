const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_29_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgyLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDczLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNixcbiAgICAgICAgMTc3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk5LFxuICAgICAgICA5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUxLFxuICAgICAgICA5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1LFxuICAgICAgICA2MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5LFxuICAgICAgICA0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDkxLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzLFxuICAgICAgICA0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDg0LFxuICAgICAgICAxODksXG4gICAgICAgIDcxLFxuICAgICAgICA5MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICA4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4LFxuICAgICAgICA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUEpzNGxNSnNZQ3JrK2Fua2tLOHIvMXdWNXZlYUhmU1FxVUlreTA2OE1zdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NTMxMDA5MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcxOUY1ODI2MjY4RjE1RTgyNzYyOTI4ODU4Qzg4RkY2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTgzNDk2MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIdWRPaXlpdFN2V1RBdnZhdk5na3NRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQxODE2MTMyLTU4MDUtNDgyYi04NDUxLTM3M2NlYTdlNjhiZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDQxLFxuICAgICAgMTAwLFxuICAgICAgMjM4LFxuICAgICAgMjExLFxuICAgICAgMTU3LFxuICAgICAgODUsXG4gICAgICAzNyxcbiAgICAgIDY4LFxuICAgICAgMTU4LFxuICAgICAgOTEsXG4gICAgICAyMCxcbiAgICAgIDE0NSxcbiAgICAgIDExLFxuICAgICAgMTksXG4gICAgICA5NixcbiAgICAgIDg1LFxuICAgICAgMjEyLFxuICAgICAgMjI4LFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMTUsXG4gICAgICAxNjYsXG4gICAgICAxNTMsXG4gICAgICAxMDEsXG4gICAgICAyMzEsXG4gICAgICA2MyxcbiAgICAgIDEwNSxcbiAgICAgIDE0LFxuICAgICAgMjI1LFxuICAgICAgMTMwLFxuICAgICAgMTIwLFxuICAgICAgMjI1LFxuICAgICAgMjQ0LFxuICAgICAgMjUwLFxuICAgICAgMjI2LFxuICAgICAgMjcsXG4gICAgICAxMzcsXG4gICAgICAxMjUsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlg2Rk1XQ1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1MzEwMDkxNTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzEwODI1OTUyMjk3ODc6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLijJDilabilabilZDilIAtLfCdmYTwnZi98J2ZjfCdmLzwnZi88J2Zgy7wnZmP8J2ZlS0t4pW+4pSB4pWk44OH4pWm77i7XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTExsNEpNSEVNTzdoTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiekxiUnlMOHNzbFRrVkp4YVFNZWg3RWI5cjN5eU1pWEQ3aVpSWXRsRmhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImlhZmE4c0JKUzFKdTNuSXFReUllT0pIQVNZTGRwY0ZyVlFzdUtQL05YSlMvdDZueEdOYkhsUFVpeENsNG1DZWNTNDlTUVE5U09NNW93VWlxQmpuRENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhKb2xNQ2preFVSZHhocXNBN1hkd2VDaDNvTkNiQk5DQTBZZlpOLzdQM0JxMGw4b2hzeEI2cDF1d0JwZWhsNG5wZ0xWWldEUldMSVlpMThpM1ZDNGpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc1MzEwMDkxNTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MzQ5NTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFS1BcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVLUC5qc29uIjogIntcImtleURhdGFcIjpcIlRXMnJrNlh4RDVYUHVqemZRbGFSVVlDWmR6VTZoOGpDV1VwcXNzZnpoWmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyMDQ3OTkyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxODM0OTYwMjczXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
