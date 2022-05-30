class DreamSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :user_id, :created_at
  has_one :user
end
