@joined_servers.each do |joined_server|
    json.set! joined_server.server_id do
        json.extract! joined_server, :server_id, :name, :admin_id
    end
end
