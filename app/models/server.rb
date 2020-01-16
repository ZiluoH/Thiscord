class Server < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    after_commit :ensure_default_channel

    belongs_to :admin,
        class_name: :User,
        foreign_key: :admin_id

    has_many :memberships,
        class_name: :ServerMembership,
        dependent: :destroy

    has_many :members,
        through: :memberships,
        source: :user

    has_many :channels,
        class_name: :Channel,
        dependent: :destroy

    def ensure_default_channel
        Channel.create(name: "general", server_id: Server.last.id)
    end
end
