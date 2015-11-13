class Option < ActiveRecord::Base
  validates :answer, presence: :true
  belongs_to :poll
end
