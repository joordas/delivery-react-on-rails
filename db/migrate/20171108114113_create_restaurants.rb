class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.string :phone_number
      t.integer :total_reviews
      t.integer :positive_reviews

      t.timestamps
    end
  end
end
