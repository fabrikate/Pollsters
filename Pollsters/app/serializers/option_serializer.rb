class OptionSerializer < ActiveModel::Serializer
  attributes :answer, :vote, :id, :poll_id
end
