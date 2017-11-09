json.extract! @restaurant, :id, :slug, :name, :address, :total_reviews, :positive_reviews, :phone_number
json.dishes @restaurant.dishes do |dish|
  json.extract! dish, :id, :name, :price
end
