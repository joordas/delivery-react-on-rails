class Restaurant < ApplicationRecord
  extend FriendlyId
  friendly_id :slug_candidates, use: :slugged
  has_many :dishes

  def slug_candidates
    [
      :name,
      [:name, :address],
      [:name, :id]
    ]
  end
end
