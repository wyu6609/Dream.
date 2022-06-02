puts 'cleaning old data...'
User.destroy_all
puts 'creating  admin user...'
User.create!(
  first_name: 'admin',
  last_name: 'admin',
  username: 'admin',
  password_digest: BCrypt::Password.create('admin'),
)
puts 'done seeding admin!'
puts 'seeding fake users...'
100.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    username: Faker::Internet.unique.user_name,
    password_digest: BCrypt::Password.create(Faker::Bank.account_number),
  )
end

puts 'seeding dreams...'
200.times do
  Dream.create(
    user_id: User.ids.sample,
    title: Faker::Hipster.sentence(word_count: 3),
    description: Faker::Hipster.sentence(word_count: 7),
  )
end
puts 'done seeding!'
