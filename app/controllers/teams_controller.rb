class TeamsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index 
    teams = Team.all 
    render json: teams 
  end

  def show 
    team = find_team 
    render json: team 
  end

  def create 
    team = Team.create(team_params)
    render json: team, status: :created 
  end

  def update 
    team = find_team 
    team.update(team_params)
    render json: team 
  end

  def destroy 
    team = find_team 
    team.destroy 
    head :no_content 
  end

  private 

  def team_params 
    params.permit(:first_name, :last_name, :nationality_id)
  end

  def find_team
    Team.find_by(id: params[:id])
  end

  def render_not_found_response
    render json: { error: "Team not found" }, status: :not_found
  end
end
