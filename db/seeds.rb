# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
Server.destroy_all
ServerMembership.destroy_all

demo = User.create(username: "Demo Boy", email: "demo@demo.demo", password: 'password')
user1 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user2 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user3 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user4 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')

server1 = Server.create(name: Faker::Ancient.god, admin_id: demo.id)
server2 = Server.create(name: Faker::Ancient.god, admin_id: demo.id)
server3 = Server.create(name: Faker::Ancient.god, admin_id: user1.id)
server4 = Server.create(name: Faker::Ancient.god, admin_id: user2.id)

ServerMembership.create(server_id: server1.id, user_id: demo.id)
ServerMembership.create(server_id: server1.id, user_id: user1.id)
ServerMembership.create(server_id: server1.id, user_id: user2.id)
ServerMembership.create(server_id: server1.id, user_id: user3.id)
ServerMembership.create(server_id: server1.id, user_id: user4.id)

ServerMembership.create(server_id: server2.id, user_id: demo.id)
ServerMembership.create(server_id: server2.id, user_id: user1.id)
ServerMembership.create(server_id: server2.id, user_id: user3.id)

ServerMembership.create(server_id: server4.id, user_id: user2.id)
ServerMembership.create(server_id: server4.id, user_id: user3.id)
ServerMembership.create(server_id: server4.id, user_id: user4.id)

Channel.create(name: Faker::Food.fruits, server_id: server1.id)
Channel.create(name: Faker::Food.fruits, server_id: server1.id)
Channel.create(name: Faker::Food.fruits, server_id: server2.id)
Channel.create(name: Faker::Food.fruits, server_id: server3.id)
Channel.create(name: Faker::Food.fruits, server_id: server3.id)
Channel.create(name: Faker::Food.fruits, server_id: server4.id)