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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_34_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMixcbiAgICAgICAgMTUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMxLFxuICAgICAgICA3NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIzLFxuICAgICAgICA1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDY3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA5LFxuICAgICAgICA1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk55bnRhL2ZlWEtZYURmZlhlY1pSYS9IakdiYmNEWUhHS3UzUzhWT1cya289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzUzMTAwOTE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNkQyN0RFMDk3MDA2NjREOTFEOUE2NkJFOTA2QTg5OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1Njg4OTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NTMxMDA5MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkREQ0Q0ODRGRTNCRDFGMTAxNjFEN0M5REU3MTY5QjZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTU2ODg5MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmRUdYcUQ5YlFqR19kLWZWcC1kX1lBXCIsXG4gIFwicGhvbmVJZFwiOiBcImFjMjM3YzdlLTQ3YjQtNDQ5Yi04ZDBlLTk1ODI4YWFmOTJjMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgODgsXG4gICAgICA5MSxcbiAgICAgIDU4LFxuICAgICAgNCxcbiAgICAgIDEzMixcbiAgICAgIDcwLFxuICAgICAgMjM1LFxuICAgICAgMTI0LFxuICAgICAgNTIsXG4gICAgICAxMSxcbiAgICAgIDkzLFxuICAgICAgMTI3LFxuICAgICAgNzMsXG4gICAgICAyMjIsXG4gICAgICAzMSxcbiAgICAgIDg4LFxuICAgICAgMjM0LFxuICAgICAgMjA5LFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDIzMSxcbiAgICAgIDIwMixcbiAgICAgIDM2LFxuICAgICAgOTMsXG4gICAgICA5OCxcbiAgICAgIDIyNSxcbiAgICAgIDEwLFxuICAgICAgMjAwLFxuICAgICAgMjE1LFxuICAgICAgMTY2LFxuICAgICAgMTkwLFxuICAgICAgMTU4LFxuICAgICAgODYsXG4gICAgICA5NixcbiAgICAgIDIwLFxuICAgICAgOTksXG4gICAgICA3MixcbiAgICAgIDAsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRThBSkczV05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1MzEwMDkxNTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzEwODI1OTUyMjk3ODc6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJpYnJhYWh3aXp6QGdtYWlsLmNvbVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xEbDRKTUhFUFNjOUxRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYnpMYlJ5TDhzc2xUa1ZKeGFRTWVoN0ViOXIzeXlNaVhEN2laUll0bEZoUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJab2VMenZKTU9qUnFvekFLSlBjUmlXY00zcTlkTmxVYlhQYXYrVENMdVZ5VXp2NGt4ZHgvbXpIaGlhWGhnQ2tjcUk0MjgwOGU5eEMrcVBrUUZPSFVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiRVlHWkpIMUh6OERZNWNyZ3cxTDJXY3dMNEtnOWpVbGZrTEtGeFlSeEhTcnZRSFlOaVhLS0YrVXN4TTlWaVNqcEhNSnNSek9qdnQ2ZTBKVk1lNlBBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NTMxMDA5MTU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTY4ODg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRUtKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFS0ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoaDZkM0lNa0dHNkt2VFh1UDNldFVQcGpkUWsyaktYS2hEaGhmZ0gwWUFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MjA0Nzk5MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQ2MjUzMjE0NVwifSIKfQ=="  // PUT your SESSION_ID 


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
