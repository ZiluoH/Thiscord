class Message < ApplicationRecord
    validates :body, presence: true

    belongs_to :channel,
        class_name: :Channel,
        foreign_key: :channel_id

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id
end
