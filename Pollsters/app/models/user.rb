class User < ActiveRecord::Base
  has_secure_password
  validates :email, length: {minimum: 3}, uniqueness: true
  validates :password, length: {minimum: 5, maximum: 20}, allow_nil: true

  has_many :polls, dependent: :destroy
end
