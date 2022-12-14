class Api::V1::TeamsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show, :create]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index 
    teams = Team.all 
    render json: teams
  end

  def show 
    team = find_team 
    render json: team, include: ['team_entries', 'team_entries.vehicle', 'team_entries.result', 'team_entries.subevent.event', 'team_entries.competitor_entries.competitors']
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
    params.require(:team).permit(:name, :nationality_id)
  end

  def find_team
    Team.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Team not found" }, status: :not_found
  end
end
