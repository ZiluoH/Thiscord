class Server < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    belongs_to :admin,
        class_name: :User,
        foreign_key: :admin_id

    has_many :memberships,
        class_name: :ServerMembership,
        dependent: :destroy

    has_many :members,
        through: :memberships,
        source: :user
end
