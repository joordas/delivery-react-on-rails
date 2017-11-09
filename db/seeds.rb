# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Destroying everything...'
User.destroy_all
Dish.destroy_all
Restaurant.destroy_all

puts 'Creating Users...'

jordan = User.create!(email: 'jordasg@gmail.com', password: '123456')
dixon = User.create!(email: 'dixon@gmail.com', password: '123456')

puts 'Creating Restaurants...'

gloria_jeans = Restaurant.create!(
  name: 'Gloria Jeans',
  address: 'Bulevardul Ion Mihalache, București',
  phone_number: '021 332 1660',
  positive_reviews: 32,
  total_reviews: 40
)

mc_donalds = Restaurant.create!(
  name: 'McDonalds',
  address: 'Gara de Nord, Piața Gării de Nord, București ',
  phone_number: '021 300 0188',
  positive_reviews: 56,
  total_reviews: 120
)

puts 'Creating Dishes...'

dish1 = Dish.create!(name:'Big Tasty', restaurant: mc_donalds, price: '1200')
dish2 = Dish.create!(name:'Big Mac', restaurant: mc_donalds, price: '2200')

dish3 = Dish.create(name: 'Capuccino', restaurant: gloria_jeans, price: '900')
dish4 = Dish.create(name: 'Espresso', restaurant: gloria_jeans, price: '600')