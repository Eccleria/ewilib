import { MessageFlags } from "discord.js";
/**
 *
 * @param channel Channel where to send the message.
 * @param payload Payload of the message.
 * @returns Message sent on channel
 */
export async function channelSend(channel, payload) {
    try {
        const message = await channel.send(payload);
        return message;
    }
    catch (e) {
        console.error(e);
        return null;
    }
}
;
/**
 * Fetch a channel from a ChannelManager and catch issues
 * @param channels The channelManager to fetch the channel from.
 * @param id The id of the channel to fetch
 * @returns The channel fetched
 */
export async function fetchChannel(channels, id) {
    try {
        const channel = await channels.fetch(id);
        return channel;
    }
    catch (e) {
        console.error(e);
        return null;
    }
}
;
/**
 * Fetch the guild from its id
 * @param client Bot client
 * @param guildId The id of the guild to fetch
 * @returns The guild fetched
 */
export async function fetchGuild(client, guildId) {
    try {
        const guild = await client.guilds.fetch(guildId);
        return guild;
    }
    catch (e) {
        console.error(e);
        return null;
    }
}
;
/**
 * Fetch a guild member from its id using a GuildMemberManager
 * @param guildMembers The manager to fetch the member from
 * @param memberId The id of the guild member to fetch
 * @returns
 */
export async function fetchMember(guildMembers, memberId) {
    try {
        const guildMember = await guildMembers.fetch(memberId);
        return guildMember;
    }
    catch (e) {
        console.error(e);
        return null;
    }
}
;
/**
 * Fetch a message from its id using a MessageManager
 * @param messageManager The manager to fetch the message from
 * @param messageId The id of the message to fetch
 * @returns
 */
export async function fetchMessage(messageManager, messageId) {
    try {
        const message = await messageManager.fetch(messageId);
        return message;
    }
    catch (e) {
        console.error(e);
        return null;
    }
}
;
/**
 * Fetch a role from its id using a RoleManager
 * @param roleManager The manager to fetch the role from
 * @param roleId The id of the role to fetch
 * @returns
 */
export async function fetchRole(roleManager, roleId) {
    try {
        const role = await roleManager.fetch(roleId);
        return role;
    }
    catch (e) {
        console.error(e);
        return null;
    }
}
;
/**
 * Fetch a thread from its id using a ThreadManager
 * @param threadManager The manager to fetch the thread from
 * @param threadId The id of the thread
 * @returns
 */
export async function fetchThread(threadManager, threadId) {
    try {
        const thread = await threadManager.fetch(threadId);
        return thread;
    }
    catch (e) {
        console.error(e);
        return null;
    }
}
;
/**
 * Fetch a role from its id using a RoleManager
 * @param userManager The manager to fetch the user from
 * @param userId The id of the user to fetch
 * @returns
 */
export async function fetchUser(userManager, userId) {
    try {
        const user = await userManager.fetch(userId);
        return user;
    }
    catch (e) {
        console.error(e);
        return null;
    }
}
;
/**
 * Reply to interaction function
 * @param interaction Interaction the function is replying to.
 * @param data Data of the replying message.
 * @param [isEphemeral] Add the Ephemeral flag to message flags, true by default.
 * @returns
 */
export async function interactionReply(interaction, data, isEphemeral = true) {
    const payload = typeof data === "string" ? { content: data } : data;
    if (isEphemeral)
        payload.flags = MessageFlags.Ephemeral;
    try {
        await interaction.reply(payload);
    }
    catch (e) {
        console.error("interactionReply error", e);
    }
}
;
/**
 * Wrapper that handle Message.reply and its catch
 * @param message A Discord message
 * @param payload The content to reply with
 * @returns The reply sent
 */
export async function messageReply(message, payload) {
    try {
        const reply = await message.reply(payload);
        return reply;
    }
    catch (e) {
        console.error("message reply error", e);
        return null;
    }
}
;
