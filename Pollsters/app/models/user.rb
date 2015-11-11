class User < ActiveRecord::Base
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: {minimum: 6}, length: {maximum: 20}

  has_many :polls, dependent: :destroy
end
