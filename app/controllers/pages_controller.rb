class PagesController < ApplicationController
  def home
    @restaurants = Restaurant.all
  end

  def help; end
end
