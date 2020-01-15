@joined_servers.each_with_index do |joined_server, idx|
    json.set! idx+1 do
        json.extract! joined_server, :server_id, :name, :admin_id
    end
end