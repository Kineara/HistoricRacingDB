class ChampionshipsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  # def index 
  #   championships = Championship.all 
  #   render json: championships
  # end

  def show 
    championship = find_championship
    render json: championship
  end

  def create 
    championship = Championship.create(championship_params)
    render json: championship, status: :created 
  end

  def update 
    championship = find_championship
    championship.update(championship_params)
    render json: championship
  end

  def destroy 
    championship = find_championship
    championship.destroy 
    head :no_content 
  end

  private 

  def championship_params 
    params.permit(:name, :season_id)
  end

  def find_championship
    Championship.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Season not found" }, status: :not_found
  end
end
