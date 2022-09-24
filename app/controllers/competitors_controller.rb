class CompetitorsController < ApplicationController
  def index 
    competitors = Competitor.all 
    render json: competitors 
  end
end
