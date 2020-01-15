class Api::ServerMembershipsController < ApplicationController
    def create
        @server = Server.find_by(name: server_membership_params[:server_name])
        if @server
            # current_user.server_memberships.create(server_id: @server.id)
            @server_membership = ServerMembership.new(server_id: @server.id, user_id: current_user.id);
            if @server_membership.save
                @joined_servers = Server.joins(:memberships)
                                .select("server_memberships.*,servers.*")
                                .where("server_memberships.user_id = ? ", current_user.id)
                render "api/servers/index"
            else
                render json: ["You joined this server already"], status: 422
            end
        else
            render json: ["Server not found"], status: 422
        end
    end


    private
    def server_membership_params
        params.require(:server_membership).permit(:server_name, :user_id);
    end

end
