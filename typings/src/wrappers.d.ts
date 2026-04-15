import { Channel, ChannelManager, Client, CommandInteraction, Guild, GuildMember, GuildMemberManager, InteractionReplyOptions, Message, MessageComponentInteraction, MessageManager, MessagePayload, Role, RoleManager, TextChannel, ThreadChannel, ThreadManager, User, UserManager } from "discord.js";
/**
 *
 * @param channel Channel where to send the message.
 * @param payload Payload of the message.
 * @returns Message sent on channel
 */
export declare function channelSend(channel: TextChannel, payload: MessagePayload): Promise<Message | null>;
/**
 * Fetch a channel from a ChannelManager and catch issues
 * @param channels The channelManager to fetch the channel from.
 * @param id The id of the channel to fetch
 * @returns The channel fetched
 */
export declare function fetchChannel(channels: ChannelManager, id: string): Promise<Channel | null>;
/**
 * Fetch the guild from its id
 * @param client Bot client
 * @param guildId The id of the guild to fetch
 * @returns The guild fetched
 */
export declare function fetchGuild(client: Client, guildId: string): Promise<Guild | null>;
/**
 * Fetch a guild member from its id using a GuildMemberManager
 * @param guildMembers The manager to fetch the member from
 * @param memberId The id of the guild member to fetch
 * @returns
 */
export declare function fetchMember(guildMembers: GuildMemberManager, memberId: string): Promise<GuildMember | null>;
/**
 * Fetch a message from its id using a MessageManager
 * @param messageManager The manager to fetch the message from
 * @param messageId The id of the message to fetch
 * @returns
 */
export declare function fetchMessage(messageManager: MessageManager, messageId: string): Promise<Message | null>;
/**
 * Fetch a role from its id using a RoleManager
 * @param roleManager The manager to fetch the role from
 * @param roleId The id of the role to fetch
 * @returns
 */
export declare function fetchRole(roleManager: RoleManager, roleId: string): Promise<Role | null>;
/**
 * Fetch a thread from its id using a ThreadManager
 * @param threadManager The manager to fetch the thread from
 * @param threadId The id of the thread
 * @returns
 */
export declare function fetchThread(threadManager: ThreadManager, threadId: string): Promise<ThreadChannel | null>;
/**
 * Fetch a role from its id using a RoleManager
 * @param userManager The manager to fetch the user from
 * @param userId The id of the user to fetch
 * @returns
 */
export declare function fetchUser(userManager: UserManager, userId: string): Promise<User | null>;
export declare function interactionReply(interaction: CommandInteraction, data: string | InteractionReplyOptions, isEphemeral: boolean): Promise<void>;
export declare function interactionReply(interaction: MessageComponentInteraction, data: string | InteractionReplyOptions, isEphemeral: boolean): Promise<void>;
/**
 * Wrapper that handle Message.reply and its catch
 * @param message A Discord message
 * @param payload The content to reply with
 * @returns The reply sent
 */
export declare function messageReply(message: Message, payload: MessagePayload): Promise<Message | null>;
