/**
 * Types imports for docstrings
 * @import {
 *  Channel,
 *  ChannelManager,
 *  GuildMember,
 *  GuildMemberManager,
 *  Interaction,
 *  Message,
 *  MessageManager,
 *  MessagePayload,
 *  Role,
 *  RoleManager,
 *  User,
 *  UserManager
 * } from "discord.js"
 */

/**
 *
 * @param {Channel} channel Channel where to send the message.
 * @param {object} payload Payload of the message.
 * @returns {Promise<Message>} Message sent on channel
 */
export const channelSend = async (channel, payload) => {
  const message = await channel.send(payload).catch((e) => console.error(e));
  return message;
};

/**
 * Fetch a channel from a ChannelManger and catch issues
 * @param {ChannelManager} channels The channelManager to fetch the channel from.
 * @param {string} id The Id of the channel to fetch
 * @returns {Promise<Channel>}
 */
export const fetchChannel = async (channels, id) => {
  const channel = await channels.fetch(id).catch(console.err);
  return channel;
};

/**
 * Fetch the guild from its id
 * @param {Client} client Bot client
 * @param {string} guildId The id of the guild to fetch
 * @returns {Promise<Guild>}
 */
export const fetchGuild = async (client, guildId) => {
  return await client.guilds.fetch(guildId).catch(console.error);
};

/**
 * Fetch a guild member from its id using a GuildMemberManager
 * @param {GuildMemberManager} guildMembers The manager to fetch the member from
 * @param {string} memberId The id of the guild member to fetch
 * @returns {Promise<GuildMember>}
 */
export const fetchMember = async (guildMembers, memberId) => {
  return await guildMembers.fetch(memberId).catch(console.error);
};

/**
 * Fetch a message from its id using a MessageManager
 * @param {MessageManager} messageManager The manager to fetch the message from
 * @param {string} messageId The id of the message to fetch
 * @returns {Promise<Message>}
 */
export const fetchMessage = async (messageManager, messageId) => {
  return await messageManager.fetch(messageId).catch(console.error);
};

/**
 * Fetch a role from its id using a RoleManager
 * @param {RoleManager} roleManager The manager to fetch the role from
 * @param {string} roleId The id of the role to fetch
 * @returns {Promise<Role>}
 */
export const fetchRole = async (roleManager, roleId) => {
  return await roleManager.fetch(roleId).catch(console.error);
};

/**
 * Fetch a thread from its id using a ThreadManager
 * @param {ThreadManager} threadManager The manager to fetch the thread from
 * @param {string} threadId The id of the thread
 * @returns {Promise<ThreadChannel>}
 */
export const fetchThread = async (threadManager, threadId) => {
  return await threadManager.fetch(threadId).catch(console.error);
};

/**
 * Fetch a role from its id using a RoleManager
 * @param {UserManager} userManager The manager to fetch the user from
 * @param {string} userId The id of the user to fetch
 * @returns {Promise<User>}
 */
export const fetchUser = async (userManager, userId) => {
  return await userManager.fetch(userId).catch(console.error);
};

/**
 * Reply to interaction function
 * @param {Interaction} interaction Interaction the function is replying to.
 * @param {string|object} data Data of the replying message.
 * @param {boolean} [isEphemeral] Add the Ephemeral flag to message flags, true by default.
 * @returns {void}
 */
export const interactionReply = async (
  interaction,
  data,
  isEphemeral = true,
) => {
  const payload = typeof data === "string" ? { content: data } : data;
  if (isEphemeral) payload.flags = MessageFlags.Ephemeral;

  await interaction
    .reply(payload)
    .catch((err) => console.log("interactionReply error", err));
};

/**
 * Wrapper that handle Message.reply and its catch
 * @param {Message} message A Discord message object
 * @param {MessagePayload} payload The content to reply with
 * @returns {Promise<Message>}
 */
export const messageReply = async (message, payload) => {
  return await message
    .reply(payload)
    .catch((err) => console.error("message reply error", err));
};
