import type {
  Channel,
  ChannelManager,
  Client,
  Guild,
  GuildMember,
  GuildMemberManager,
  Interaction,
  Message,
  MessageManager,
  MessagePayload,
  Role,
  RoleManager,
  ThreadChannel,
  ThreadManager,
  User,
  UserManager,
} from "discord.js";

export function channelSend(
  channel: Channel,
  payload: object,
): Promise<Message>;
export function fetchChannel(
  channels: ChannelManager,
  id: string,
): Promise<Channel>;
export function fetchGuild(client: Client, guildId: string): Promise<Guild>;
export function fetchMember(
  guildMembers: GuildMemberManager,
  memberId: string,
): Promise<GuildMember>;
export function fetchMessage(
  messageManager: MessageManager,
  messageId: string,
): Promise<Message>;
export function fetchRole(
  roleManager: RoleManager,
  roleId: string,
): Promise<Role>;
export function fetchThread(
  threadManager: ThreadManager,
  threadId: string
): Promise<ThreadChannel>
export function fetchUser(
  userManager: UserManager,
  userId: string,
): Promise<User>;
export function interactionReply(
  interaction: Interaction,
  data: string | object,
  isEphemeral: boolean | undefined,
): void;
export function messageReply(
  message: Message,
  payload: MessagePayload,
): Promise<Message>;
