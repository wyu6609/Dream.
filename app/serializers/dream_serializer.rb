class DreamSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user_id, :created_at
  has_one :user
end
