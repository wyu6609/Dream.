class DreamSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :user_id
  has_one :user
end
