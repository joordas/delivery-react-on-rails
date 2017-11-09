class Api::RestaurantsController < ApplicationController
  
  def index 
    @restaurants = Restaurant.all
  end

  def show
    # @restaurant = Restaurant.find(params[:id])
    @restaurant = Restaurant.friendly.find(params[:id])
  end
end
