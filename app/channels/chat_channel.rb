class ChatChannel < ApplicationCable::Channel
  # def subscribed
  #   stream_for 'chat_channel'
  # end
  # def speak(data)
  #   channel_id = params['channelId']

  #   message = Message.new(body: data['message'], author_id: data['author_id'], channel_id: data['channel_id'])
  #   if message.save
  #     socket = { message: message.body, type: 'message' }
  #     ChatChannel.broadcast_to(channel_id, socket)
  #   end
  # end
  # def load
  #   messages = Message.all.collect(&:body)
  #   socket = { messages: messages, type: 'messages' }
  #   ChatChannel.broadcast_to('chat_channel', socket)
  # end

  def subscribed
    channel_id = params['channelId']
    stream_for channel_id
    load({'channelId' => channel_id})
  end

  def speak(data)
    channel_id = params['channelId']
    message = Message.new(body: data['message'], author_id: data['author_id'], channel_id: data['channel_id'])
    if message.save
      socket = { message: message, type: 'message', author_name: User.find_by(id: data['author_id']).username }
      ChatChannel.broadcast_to(channel_id, socket)
    end
  end

  def load(data)
    channel_id = data['channelId']
    channel = Channel.find_by(id: channel_id)

    messages = channel.messages.select('messages.*, users.username as author_name').joins(:author).order(created_at: :asc)
    socket = { messages: messages, type: 'messages'}
    ChatChannel.broadcast_to(channel_id, socket)
  end

  def unsubscribed; end
end