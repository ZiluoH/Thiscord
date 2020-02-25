class Api::MessagesController < ApplicationController
    def create
        @message = Message.new(message_params)
        
        if @message.save
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def index
        @messages = Message.all.where("channel_id = ?", params[:channel_id])
        if @messages
            render json: @messages
        else
            render json: ["no msg found"], status: 422
        end
    end

    private
    def message_params
        params.require(:message).permit(:body, :channel_id, :author_id)
    end
end
