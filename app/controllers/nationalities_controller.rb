class NationalitiesController < ApplicationController
  def index 
    nationalities = Nationality.all 
    render json: nationalities 
  end

  def show 
    nationality = Nationality.find(params[:id])
    render json: nationality
  end
end
