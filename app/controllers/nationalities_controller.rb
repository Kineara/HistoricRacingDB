class NationalitiesController < ApplicationController
  def index 
    nationalities = Nationality.all 
    render json: nationalities 
  end
end
