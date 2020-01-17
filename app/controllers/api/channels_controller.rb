class Api::ChannelsController < ApplicationController
    def create
        @channel = Channel.new(channel_params)
        if @channel.save         
            @channels = Channel.all.where("server_id = ?", @channel.server_id)
            render "api/channels/index"
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def index
        @channels = Channel.all.where("server_id = ?", params[:server_id])
        if @channels
       
            render "api/channels/index"
        else
            render json: ["Server does not exist"], status: 422
        end
    end

  def destroy

  end


    private
    def channel_params
        params.require(:channel).permit(:name, :server_id)
    end
end
