class Api::ServersController < ApplicationController
    def create
        # @server = current_user.owned_servers.new(server_params)
        @server = Server.new(server_params)

        if @server.save
            current_user.server_memberships.create(server_id: @server.id)
            @joined_servers = Server.joins(:memberships)
                                .select("server_memberships.*,servers.*")
                                .where("server_memberships.user_id = ? ", current_user.id)
            render "api/servers/index"
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def index
        if current_user
            @joined_servers = Server.joins(:memberships)
                                .select("server_memberships.*,servers.*")
                                .where("server_memberships.user_id = ? ", current_user.id)
            render "api/servers/index"
            # render json: @joined_servers
        else 
            render json: ["Login first"]
        end
    end

    def destroy
        @server = Server.find_by(id: params[:id])
        if current_user.id == @server.admin_id
            @server.destroy
        else
            current_user.server_memberships.find_by(server_id: @server.id).destroy
        end
    end




    private
    def server_params
        params.require(:server).permit(:name, :admin_id);
    end
end
