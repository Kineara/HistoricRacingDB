class SeasonsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index 
    if params[:series_id]
      series = Series.find(params[:series_id])
      seasons = series.seasons 
    else
      seasons = Season.all 
    end
    render json: seasons, include: :series 
  end

  private 

  def render_not_found_response
    render json: { error: "Season not found" }, status: :not_found
  end
end
