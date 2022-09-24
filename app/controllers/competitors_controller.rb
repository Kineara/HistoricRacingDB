class CompetitorsController < ApplicationController
  def index 
    competitors = Competitor.all 
    render json: competitors 
  end

  def show 
    competitor = Competitor.find(params[:id])
    render json: competitor 
  end
end
