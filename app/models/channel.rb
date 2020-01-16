class Channel < ApplicationRecord
  validates :name, presence: true

  belongs_to :server,
    class_name: :Server,
    foreign_key: :server_id
end
