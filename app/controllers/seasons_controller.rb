class SeasonsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index 
    if params[:series_id]
      season = Season.find(params[:series_id])
      seasons = season.seasons 
    else
      seasons = Season.all 
    end
    render json: seasons, include: :season 
  end

  def show 
    season = find_season
    render json: season 
  end

  def create 
    season = Season.create(season_params)
    render json: season, status: :created 
  end

  def update 
    season = find_season
    season.update(season_params)
    render json: season 
  end

  def destroy 
    season = find_season
    season.destroy 
    head :no_content 
  end

  private 

  def season_params 
    params.permit(:name, :series_id)
  end

  def find_season
    Season.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Season not found" }, status: :not_found
  end
end
