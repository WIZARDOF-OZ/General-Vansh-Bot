import { ActivityType } from 'discord.js'

/**
 * @param {import("../../structures/Client.js").G_V_GuildBot} client
 */

export default async (client) => {
    console.log(`${client.user.tag} Is On.`)
    console.table({
        guilds: client.guilds.cache.size,
        members: client.guilds.cache.map(c => c.memberCount).filter(v => typeof v === 'number').reduce((a, b) => a + b, 0),
        ping: client.ws.ping
    })
    await client.publishCommands()
    client.user.setActivity({
        name: 'Watching Everyone',
        type: ActivityType.Watching
    })
}