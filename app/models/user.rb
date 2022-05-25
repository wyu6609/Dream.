class User < ApplicationRecord
  has_many :dreams
  has_secure_password
  validates :username, presence: true, uniqueness: true, length: { minimum: 3 }

  PASSWORD_REQUIREMENTS = /\A  
  (?=.{8,}) # At least 8 characters long
  (?=.*\d) # Contains at least one number
  (?=.*[a-z]) # Contains at least one lowercase letter
  (?=.*[A-Z]) # Contains at least one uppercase letter
  (?=.*[[:^alnum:]]) # Contains at least one symbol
  /x

  validates :password,
            format: PASSWORD_REQUIREMENTS,
            message:
              'password must contains at least 8 characters, one number, a lowercase and uppercase letter and one symbol'
end
