puts 'cleaning old data...'
puts 'creating  admin user...'
User.create(
  first_name: 'john',
  last_name: 'smith',
  username: 'admin',
  password_digest: BCrypt::Password.create('admin'),
)
puts 'done seeding admin!'
