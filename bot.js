#discord bot made by spud
#spud - youtube
#@Spud1425 - discord
 
##IMPORTS##
import discord                      #MAKE SURE YOU DO "py -m pip install discord" IN COMMAND PROMPT!
from discord.ext.commands import bot
from discord.ext import commands
import random
import asyncio
import time
 
##PREFIX##
bot = commands.Bot(command_prefix='!')
 
##BOT IS READY##
@bot.event
async def on_ready():
    print("Bot Is Online! And Ready To Spam")
 
##SPAM COMMAND##
@bot.command(pass_context=True)
async def spam(ctx): #run "!spam" to run the command
    while True:
        await bot.say("you suck") #NOTE - you need the \n (new lines)
        await bot.say("you suck")
        await bot.say("you suck")
        await bot.say("you suck")
        await bot.say("you suck")
 
##BOT TOKEN##
bot.run ("NTE1OTQ2NzU4MjU0MjMxNTYy.DttCpA.ihEGsG5fQYFYA88JRsBZPy_RS8M")