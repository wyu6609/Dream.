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
            format: {
              with: PASSWORD_REQUIREMENTS,
              message:
                'passwords must be at least 8 characters long, with one number, a lower and uppercase letter with at least one symbol',
            }
end
