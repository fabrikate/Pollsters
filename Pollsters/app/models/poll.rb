class Poll < ActiveRecord::Base
  has_many :options, dependent: :destroy
  accepts_nested_attributes_for :options
end
